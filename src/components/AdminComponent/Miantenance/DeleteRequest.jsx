import { useState } from "react";
import { toast } from "react-toastify";
import { deleteRequest } from "../../../services/maintenance";

const DeleteRequest = () => {
  const [roomNumber, setRoomNumber] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!roomNumber.trim()) {
      toast.error("Please enter a room number");
      return;
    }

    try {
      const res = await deleteRequest(roomNumber);
      toast.success(`Request for Room ${roomNumber} deleted successfully`);
      setRoomNumber("");
    } catch (err) {
      const message = err.response?.data?.message || "Failed to delete request";
      toast.error(message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Delete Maintenance Request</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Room Number"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Delete Request
        </button>
      </form>
    </div>
  );
};

export default DeleteRequest;
