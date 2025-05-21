import { useState } from "react";
import CreateRequest from "../../components/ResidentComponent/Maintenance/CreateRequest";
import GetMyRequest from "../../components/ResidentComponent/Maintenance/GetMyRequest";

const Residentmaintenance = () => {
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
      <CreateRequest refreshRooms={refreshMaintenance} />
      <GetMyRequest refreshRooms={refreshMaintenance} />
    </div>
  );
};

export default Residentmaintenance;
