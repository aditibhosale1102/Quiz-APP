import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./TeacherPage.css";

const TeacherPage = () => {
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [pendingTeachers, setPendingTeachers] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const snapshot = await getDocs(collection(db, "teachers"));

    let total = 0;
    let pending = 0;
    let salary = 0;

    snapshot.forEach((doc) => {
      const data = doc.data();
      total++;

      if (data.status === "pending") pending++;
      salary += Number(data.salary || 0);
    });

    setTotalTeachers(total);
    setPendingTeachers(pending);
    setTotalSalary(salary);
  };

  return (
    <div className="cards-container">
      <div className="card teachers">
        <h3>Total Teacher</h3>
        <p>{totalTeachers}</p>
      </div>

      <div className="card pending">
        <h3>Total Pending Teacher</h3>
        <p>{pendingTeachers}</p>
      </div>

      <div className="card salary">
        <h3>Total Teacher Salary</h3>
        <p>₹ {totalSalary}</p>
      </div>
    </div>
  );
};

export default TeacherPage;