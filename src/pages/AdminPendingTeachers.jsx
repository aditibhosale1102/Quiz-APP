import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "./TeacherDashboard.css";

const AdminPendingTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchPendingTeachers();
  }, []);

  const fetchPendingTeachers = async () => {
    const querySnapshot = await getDocs(collection(db, "teachers"));
    const list = [];

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      if (data.status === "pending") {
        list.push({
          id: docSnap.id,
          ...data,
        });
      }
    });

    setTeachers(list);
  };

  // Approve teacher
  const approveTeacher = async (id) => {
    await updateDoc(doc(db, "teachers", id), {
      status: "approved",
    });

    fetchPendingTeachers();
  };

  // Reject teacher
  const rejectTeacher = async (id) => {
    await updateDoc(doc(db, "teachers", id), {
      status: "rejected",
    });

    fetchPendingTeachers();
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <div className="pending-container">
          <h2 className="pending-title">Pending Teachers</h2>

          <table className="pending-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Profile Picture</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>

            <tbody>
              {teachers.length === 0 ? (
                <tr>
                  <td colSpan="6">No Pending Teachers</td>
                </tr>
              ) : (
                teachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.name}</td>

                    <td>
                      {teacher.photo ? (
                        <img
                          src={teacher.photo}
                          alt="profile"
                          width="50"
                          height="50"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>

                    <td>{teacher.mobile}</td>
                    <td>{teacher.address}</td>

                    <td>
                      <button
                        className="approve-btn"
                        onClick={() => approveTeacher(teacher.id)}
                      >
                        Approve
                      </button>
                    </td>

                    <td>
                      <button
                        className="reject-btn"
                        onClick={() => rejectTeacher(teacher.id)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPendingTeacher;