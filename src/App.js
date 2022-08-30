import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
// LANDING PAGE
import Home from "./HomePage/pages/Home";
import Courses from "./HomePage/pages/Courses";
import Course from "./HomePage/pages/Course";
import About from "./HomePage/pages/About";
import Contact from "./HomePage/pages/Contact";
// SIGNUP 
import SignupStudent from "./Registry/SIGNUP/SignupStudent";
import SignupTeacher from "./Registry/SIGNUP/SignupTeacher";
// LOGIN
import LoginAdmin from "./Registry/LOGIN/LoginAdmin";
import LoginTeacher from "./Registry/LOGIN/LoginTeacher";
import LoginStudent from "./Registry/LOGIN/LoginStudent";
// RESET
import ResetAdmin from "./Registry/RESET/ResetAdmin";
import ResetTeacher from "./Registry/RESET/ResetTeacher";
import ResetStudent from "./Registry/RESET/ResetStudent";
// PRIVATE ROUTES
import PrivateRoute from "./Registry/PrivateRoute";
import UpdateProfile from "./Registry/UPDATE/UpdateProfile";

import MainDashboard from "./Components/MainDashboard";
// ADMIN DASHBOARD
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminStudents from "./Components/Admin/Student/AdminStudents";
import AdminTeachers from "./Components/Admin/Teacher/AdminTeachers";
import AdminCourses from "./Components/Admin/Courses/AdminCourses";
import AdminQuizes from "./Components/Admin/Quizes/AdminQuizes";
import AdminProfile from "./Components/Admin/Profile/AdminProfile"
import AdminCourse from "./Components/Admin/Course/AdminCourse";
// TEACHER DASHBORD
import TeacherDashboard from "./Components/Teacher/TeacherDashboard";
import TeacherStudents from "./Components/Teacher/Student/TeacherStudents";
import TeacherCourses from "./Components/Teacher/Courses/TeacherCourses";
import TeacherQuizes from "./Components/Teacher/Quizes/TeacherQuizes";
import TeacherProfile from "./Components/Teacher/Profile/TeacherProfile";
import TeacherCourse from "./Components/Teacher/Course/TeacherCourse";

// STUDENT DASHBORD
import StudentDashboard from "./Components/Student/StudentDashboard";
import StudentCourses from "./Components/Student/Courses/StudentCourses";
import StudentProfile from "./Components/Student/Profile/StudentProfile";
import SEnrolledCourses from "./Components/Student/EnrolledCourses/SEnrolledCourses";
import StudentQuizes from "./Components/Student/Quizes/StudentQuizes";
import StudentCourse from "./Components/Student/Course/StudentCourse";
import CourseDescription from "./Components/Student/EnrolledCourses/CourseDescription";


function App() {
  return (
    <div className="bg-color">
      <Router>
        <AuthProvider>
          <Routes>
            {/* LANDING PAGE /> */}
            <Route path='/home' exact element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<Course />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />

            {/* SIGNUP */}
            <Route path="/signup-student" element={<SignupStudent />} />
            <Route path="/signup-teacher" element={<SignupTeacher />} />

            {/* LOGIN */}
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/login-teacher" element={<LoginTeacher />} />
            <Route path="/login-student" element={<LoginStudent />} />

            {/* RESET /> */}
            <Route path="/reset-admin" element={<ResetAdmin />} />
            <Route path="/reset-teacher" element={<ResetTeacher />} />
            <Route path="/reset-student" element={<ResetStudent />} />

            {/* PRIVATE ROUTES FOR AUTHENTICATION/> */}
            <Route path="/" element={
              <PrivateRoute>  <MainDashboard />  </PrivateRoute>} />
            <Route path="/update-profile" element={
              <PrivateRoute>  <UpdateProfile />  </PrivateRoute>} />

            {/* ADMIN DASHBOARD /> */}
            <Route path="/admin-dashboard" element={
              <PrivateRoute>  <AdminDashboard />  </PrivateRoute>} />
            <Route path="/admin-students-view" element={
              <PrivateRoute>  <AdminStudents />  </PrivateRoute>} />
            <Route path="/admin-teachers-view" element={
              <PrivateRoute>  <AdminTeachers />  </PrivateRoute>} />
            <Route path="/admin-quizes-view" element={
              <PrivateRoute>  <AdminQuizes />  </PrivateRoute>} />
            <Route path="/admin-profile-view" element={
              <PrivateRoute>  <AdminProfile />  </PrivateRoute>} />
            <Route path="/admin-courses-view" element={
              <PrivateRoute>  <AdminCourses />  </PrivateRoute>} />
            <Route path="/admin-courses-view/:id" element={
              <PrivateRoute> <AdminCourse />  </PrivateRoute>} />

            {/* TEACHER DASHBOARD /> */}
            <Route path="/teacher-dashboard" element={
              <PrivateRoute>  <TeacherDashboard /> </PrivateRoute>} />
            <Route path="/teacher-students-view" element={
              <PrivateRoute>  <TeacherStudents />  </PrivateRoute>} />
            <Route path="/teacher-quizes-view" element={
              <PrivateRoute>  <TeacherQuizes />  </PrivateRoute>} />
            <Route path="/teacher-profile-view" element={
              <PrivateRoute>  <TeacherProfile />  </PrivateRoute>} />
            <Route path="/teacher-courses-view" element={
              <PrivateRoute>  <TeacherCourses />  </PrivateRoute>} />
            <Route path="/teacher-courses-view/:id" element={
              <PrivateRoute>  <TeacherCourse />  </PrivateRoute>} />


            {/* STUDENT DASHBOARD /> */}
            <Route path="/student-dashboard" element={
              <PrivateRoute>  <StudentDashboard />  </PrivateRoute>} />
            <Route path="/student-profile-view" element={
              <PrivateRoute>  <StudentProfile />  </PrivateRoute>} />
            <Route path="/student-enrolled-courses" element={
              <PrivateRoute>  <SEnrolledCourses />  </PrivateRoute>} />
            <Route path="/student-quizes-view" element={
              <PrivateRoute>  <StudentQuizes />  </PrivateRoute>} />
            <Route path="/student-courses-view" element={
              <PrivateRoute>  <StudentCourses />  </PrivateRoute>} />
            <Route path="/student-courses-view/:id" element={
              <PrivateRoute> <StudentCourse />  </PrivateRoute>} />
            <Route path="/student-course-description" element={
              <PrivateRoute> <CourseDescription />  </PrivateRoute>} />


          </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;