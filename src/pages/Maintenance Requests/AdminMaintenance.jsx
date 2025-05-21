import { useState } from "react";
import GetResidentRequest from "../../components/AdminComponent/Miantenance/GetResidentRequest";
import AssignRequest from "../../components/AdminComponent/Miantenance/AssignRequest";
import UpdateStatus from "../../components/AdminComponent/Miantenance/UpdateStatus";
import DeleteRequest from "../../components/AdminComponent/Miantenance/DeleteRequest";

const AdminMaintenance = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshMaintenance = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* Create Request Component */}
      <GetResidentRequest refreshRooms={refreshMaintenance} />
      <AssignRequest refreshRooms={refreshMaintenance} />
      <UpdateStatus refreshRooms={refreshMaintenance} />
      <DeleteRequest refreshRooms={refreshMaintenance} />
    </div>
  );
};

export default AdminMaintenance;
