import { useState } from "react";
import GetAllUsers from "../../components/AdminComponent/UserManagement/GetAllUsers";
import UpdateUserRole from "../../components/AdminComponent/UserManagement/UpdateUserRole";

const GetAllUserAdmin = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshUsers = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* GetAllUsers Component */}
      <GetAllUsers refreshRooms={refreshUsers} />
      <UpdateUserRole refreshRooms={refreshUsers} />
    </div>
  );
};

export default GetAllUserAdmin;
