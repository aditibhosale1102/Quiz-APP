import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./AdminDashboard.css";

const AdminStudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));

    let list = [];

    querySnapshot.forEach((docItem) => {
      list.push({
        id: docItem.id,
        ...docItem.data(),
      });
    });

    setStudents(list);
  };

  // Delete Student
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  // Update Student (for now just alert)
  const handleUpdate = (student) => {
    alert("Update feature coming soon for: " + student.name);
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="table-container">
          <h2>Students</h2>

          <table className="students-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Profile Picture</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name || "N/A"}</td>

                    <td>
                      {student.profilePic ? (
                        <img
                          src={student.profilePic}
                          alt="profile"
                          width="40"
                          height="40"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>

                    <td>{student.mobile || "N/A"}</td>
                    <td>{student.address || "N/A"}</td>

                    <td>
                      <button
                        className="update-btn"
                        onClick={() => handleUpdate(student)}
                      >
                        Update
                      </button>
                    </td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No Students Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStudentsList;