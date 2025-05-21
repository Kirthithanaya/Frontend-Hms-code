import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Home,
  Wrench,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Database,
  Bell,
} from "lucide-react";

const AdminDashboard = () => {
  const modules = [
    {
      name: "Room Allocation",
      path: "/room-allocation",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Maintenance Requests",
      path: "/maintenance-requests",
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      name: "Billing & Payments",
      path: "/billing",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: "Resident Information",
      path: "/resident-info",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Financial Reporting",
      path: "/financial-reporting",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "User Roles & Permissions",
      path: "/user-roles",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "Integration & Data Management",
      path: "/integration",
      icon: <Database className="w-5 h-5" />,
    },
    {
      name: "Notifications & Alerts",
      path: "/notifications",
      icon: <Bell className="w-5 h-5" />,
    },
  ];

  const financialData = [
    { month: "Jan", revenue: 12000, expenses: 8000 },
    { month: "Feb", revenue: 15000, expenses: 9000 },
    { month: "Mar", revenue: 18000, expenses: 11000 },
    { month: "Apr", revenue: 16000, expenses: 9500 },
  ];

  const occupancyData = [
    { month: "Jan", occupancy: 75 },
    { month: "Feb", occupancy: 80 },
    { month: "Mar", occupancy: 78 },
    { month: "Apr", occupancy: 85 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        🏨 Admin Dashboard
      </h1>

      {/* Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="p-5 bg-gradient-to-br from-gray-100 to-white border border-gray-300 rounded-2xl shadow hover:shadow-xl transition group"
          >
            <div className="flex items-center space-x-3">
              <div className="text-blue-600">{mod.icon}</div>
              <h2 className="text-lg font-semibold group-hover:underline">
                {mod.name}
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Manage {mod.name.toLowerCase()}
            </p>
          </Link>
        ))}
      </div>

      {/* Charts */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          📈 Financial Overview
        </h2>

        {/* Revenue vs Expenses Chart */}
        <div className="mb-10">
          <h3 className="text-lg font-medium mb-3 text-gray-700">
            Revenue vs Expenses
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" />
              <Bar dataKey="expenses" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Occupancy Chart */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">
            Occupancy Rate Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="occupancy"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
