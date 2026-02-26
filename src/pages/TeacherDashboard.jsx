import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // NEW
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { addQuiz } from "../services/quizService";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [question, setQuestion] = useState("");

  const [totalTeachers, setTotalTeachers] = useState(0);
  const [pendingTeachers, setPendingTeachers] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  const navigate = useNavigate(); // NEW

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const querySnapshot = await getDocs(collection(db, "teachers"));

    let total = 0;
    let pending = 0;
    let salary = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      total++;

      if (data.status === "pending") {
        pending++;
      }

      salary += Number(data.salary || 0);
    });

    setTotalTeachers(total);
    setPendingTeachers(pending);
    setTotalSalary(salary);
  };

  const createQuiz = async () => {
    if (!question) return alert("Enter Question");

    await addQuiz({ question });
    alert("Quiz Added");
    setQuestion("");
  };

  // CLICK FUNCTION
  const goToPendingTeachers = () => {
    navigate("/admin/pending-teachers");
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        {/* CARDS SECTION */}
        <div className="cards-container">
          <div className="card teachers">
            <h3>Total Teacher</h3>
            <p>{totalTeachers}</p>
          </div>

          {/* CLICKABLE CARD */}
          <div
            className="card pending"
            onClick={goToPendingTeachers}
            style={{ cursor: "pointer" }}
          >
            <h3>Total Pending Teacher</h3>
            <p>{pendingTeachers}</p>
          </div>

          <div className="card salary">
            <h3>Total Teacher Salary</h3>
            <p>₹ {totalSalary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;