import { useState } from "react";
import { toast } from "react-toastify";
import { deleteRoom } from "../../../services/roomService";

const RoomDelete = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!roomNumber.trim()) {
      toast.error("Please enter a room number");
      return;
    }

    if (
      !window.confirm(`Are you sure you want to delete Room ${roomNumber}?`)
    ) {
      return;
    }

    try {
      setLoading(true);
      const res = await deleteRoom(roomNumber);
      toast.success(res.message);
      setRoomNumber("");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to delete room";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleDelete}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Delete Room</h2>
        <label className="block mb-2 font-medium text-gray-700">
          Room Number
        </label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Enter room number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md"
        >
          {loading ? "Deleting..." : "Delete Room"}
        </button>
      </form>
    </div>
  );
};

export default RoomDelete;
