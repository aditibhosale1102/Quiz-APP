import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import "../styles/Students.css";

const Students = () => {
  const students = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", course: "React" },
    { id: 2, name: "Priya", email: "priya@gmail.com", course: "Java" },
    { id: 3, name: "Amit", email: "amit@gmail.com", course: "Python" },
  ];

  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="dashboard-content">
        <AdminTopbar />

        <h2>Students List</h2>

        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;