import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../pages/AdminDashboard.css";

const AdminViewStudentMarks = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));

    let studentList = [];

    querySnapshot.forEach((doc) => {
      studentList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setStudents(studentList);
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="table-container">
          <h2 className="table-title">Students</h2>

          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.marks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No Students Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewStudentMarks;