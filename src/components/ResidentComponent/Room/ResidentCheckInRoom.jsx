import { useState } from "react";
import { toast } from "react-toastify";
import { checkInRoom } from "../../../services/roomService";

const ResidentCheckInRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [residentId, setResidentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await checkInRoom({ roomNumber, residentId }); // send both values
      toast.success("Checked in successfully!");
      setRoomNumber("");
      setResidentId("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Check-in failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Resident Check-In
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room Number
          </label>
          <input
            type="text"
            name="roomNumber"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resident ID
          </label>
          <input
            type="text"
            name="residentId"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Check In
        </button>
      </form>
    </div>
  );
};

export default ResidentCheckInRoom;
