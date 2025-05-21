import { useState } from "react";
import CreateRoom from "../../components/AdminComponent/Room/CreateRoom";
import GetAllRoom from "../../components/AdminComponent/Room/GetAllRoom";
import AdminRoomCheckIns from "../../components/AdminComponent/Room/AdminRoomCheckIns ";
import RoomDelete from "../../components/AdminComponent/Room/RoomDelete ";
import AssignRoom from "../../components/AdminComponent/Room/AssignRoom";

const RoomAllocation = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshRooms = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* Create Room Component */}
      <CreateRoom refreshRooms={refreshRooms} />
      <GetAllRoom refreshRooms={refreshRooms} />
      <AdminRoomCheckIns refreshRooms={refreshRooms} />
      <AssignRoom refreshRooms={refreshRooms} />
      <RoomDelete refreshRooms={refreshRooms} />
    </div>
  );
};

export default RoomAllocation;
