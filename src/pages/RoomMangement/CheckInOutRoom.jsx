import { useState } from "react";
import AvailableRooms from "../../components/ResidentComponent/Room/AvailableRooms";
import ResidentCheckInRoom from "../../components/ResidentComponent/Room/ResidentCheckInRoom";
import CheckOutRoom from "./../../components/ResidentComponent/Room/CheckOutRoom";

const CheckInOutRoom = () => {
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
      <AvailableRooms refreshRooms={refreshRooms} />
      <ResidentCheckInRoom refreshRooms={refreshRooms} />
      <CheckOutRoom refreshRooms={refreshRooms} />
    </div>
  );
};

export default CheckInOutRoom;
