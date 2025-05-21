import { useState } from "react";
import { toast } from "react-toastify";
import { createRoom } from "../../../services/roomService";

const CreateRoom = () => {
  const [roomData, setRoomData] = useState({
    roomNumber: "",
    type: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createRoom({
        roomNumber: roomData.roomNumber,
        type: roomData.type,
        capacity: Number(roomData.capacity),
      });

      toast.success("Room created successfully!");
      setRoomData({ roomNumber: "", type: "", capacity: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Room creation failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create New Room
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room Number
          </label>
          <input
            type="text"
            name="roomNumber"
            value={roomData.roomNumber}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room Type
          </label>
          <select
            name="type"
            value={roomData.type}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Capacity
          </label>
          <input
            type="number"
            name="capacity"
            value={roomData.capacity}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
