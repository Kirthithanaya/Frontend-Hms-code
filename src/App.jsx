import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgotpassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import ResidentDashboard from "./pages/ResidentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import RoomAllocation from "./pages/RoomMangement/RoomAllocation";
import CheckInOutRoom from "./pages/RoomMangement/CheckInOutRoom";
import Residentmaintenance from "./pages/Maintenance Requests/Residentmaintenance";
import AdminMaintenance from "./pages/Maintenance Requests/AdminMaintenance";
import AdminCreateBill from "./pages/Billing and Payments/AdminCreateBill";
import ResidentGetBill from "./pages/Billing and Payments/ResidentGetBill";
import AdminCRUD from "./pages/ResidentInformation/AdminCRUD";
import AdminCreatePaymen from "./pages/FinancialReport/AdminCreatePaymen";
import GetAllUserAdmin from "./pages/UserManagement/GetAllUserAdmin";
import SendEmailAdmin from "./pages/IntegrationDataManagement/SendEmailAdmin";
import SendNotificationAdmin from "./pages/Notification/SendNoticationAdmin";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/resident-dashboard"
          element={
            <ProtectedRoute allowedRoles={["resident", "staff"]}>
              <ResidentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/room-allocation"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <RoomAllocation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CheckINOut-Room"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <CheckInOutRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-request"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <Residentmaintenance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maintenance-requests"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminMaintenance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/billing"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminCreateBill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/getmy-payment"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ResidentGetBill />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resident-info"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminCRUD />
            </ProtectedRoute>
          }
        />
        <Route
          path="/financial-reporting"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminCreatePaymen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-roles"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <GetAllUserAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/integration"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SendEmailAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <SendNotificationAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
