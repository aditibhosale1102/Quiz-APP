import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminCourses from "./pages/AdminCourses";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminQuestions from "./pages/AdminQuestions";
import ViewQuestionsByCourse from "./pages/ViewQuestionsByCourse";
import AddQuestion from "./pages/AddQuestion";
import ViewQuestions from "./pages/ViewQuestions";
import Students from "./pages/Students";
import AdminStudents from "./pages/AdminStudents";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminStudentDashboard from "./pages/AdminStudentDashboard";
import QuizPage from "./pages/QuizPage";
import StudentsList from "./pages/StudentsList";
import AdminPendingTeachers from "./pages/AdminPendingTeachers";
import AdminTeacherDashboard from "./pages/AdminTeacherDashboard";
import AdminStudentsList from "./pages/AdminStudentsList";
import AdminViewStudentMarks from "./pages/AdminViewStudentMarks";
import AddCourse from "./pages/AddCourse";
import ViewCourse from "./pages/ViewCourse";
import StudentLanding from "./pages/StudentLanding";
import StudentSignup from "./pages/StudentSignup";
import StudentLoginForm from "./pages/StudentLoginForm";
import TeacherLanding from "./pages/TeacherLanding";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-landing" element={<StudentLanding />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/student-login" element={<StudentLoginForm />} />
        <Route path="/teacher-landing" element={<TeacherLanding />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-course" element={<AddCourse />} />

        <Route path="/admin/students/list" element={<AdminStudentsList />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />
        <Route path="/admin-questions" element={<AdminQuestions />} />
        <Route path="/admin/students-list" element={<StudentsList />} />
        <Route path="/students" element={<Students />} />

        <Route path="/admin/view-course" element={<ViewCourse />} />
        <Route path="/admin/view-questions" element={<ViewQuestionsByCourse />} />
        <Route path="/admin/view-questions/:courseName" element={<ViewQuestions />} />

        <Route path="/admin-view-student-marks" element={<AdminViewStudentMarks />} />

        {/* Teachers Dashboard */}
        <Route path="teachers" element={<AdminTeacherDashboard />} />

        {/* Pending Teachers */}
        <Route path="pending-teachers" element={<AdminPendingTeachers />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-course"
          element={
            <ProtectedRoute>
              <AddCourse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/teachers"
          element={
            <ProtectedRoute>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/pending-teachers"
          element={
            <ProtectedRoute>
              <AdminPendingTeachers />
            </ProtectedRoute>
          }
        />



        {/* Student */}
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute>
              <AdminStudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/students/list"
          element={
            <ProtectedRoute>
              <AdminStudentsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <ProtectedRoute>
              <AdminCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/questions"
          element={
            <ProtectedRoute>
              <AdminQuestions />
            </ProtectedRoute>
          }
        />

        {/* Quiz */}
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;