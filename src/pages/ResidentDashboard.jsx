import { Link } from "react-router-dom";

const ResidentDashboard = () => {
  const modules = [
    {
      name: "Resident CheckIn/CheckOut Rooms",
      path: "/CheckINOut-Room",
      emoji: "🛏️",
    },
    {
      name: "Get My Maintenance Request",
      path: "/create-request",
      emoji: "🛠️",
    },
    { name: "Get My Billing & Payments", path: "/getmy-payment", emoji: "💳" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        📊 Welcome to Your Resident Dashboard
      </h1>

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{mod.emoji}</div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition">
                  {mod.name}
                </h2>
                <p className="text-gray-500 text-sm">Go to {mod.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResidentDashboard;
