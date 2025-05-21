import { useState } from "react";
import { toast } from "react-toastify";
import { assignRequest } from "../../../services/maintenance";

const AssignRequest = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [adminId, setAdminId] = useState("");
  const [staffId, setStaffId] = useState("");
  const [status, setStatus] = useState("Assigned");

  const handleAssign = async (e) => {
    e.preventDefault();

    if (!roomNumber || !adminId || !staffId || !status) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await assignRequest({
        roomNumber,
        adminId,
        staffId,
        status,
      });
      toast.success(
        `Request for Room ${response.roomNumber} assigned successfully with status "${response.status}"`
      );
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to assign request");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Assign Maintenance Request</h2>
      <form onSubmit={handleAssign} className="space-y-4">
        <input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Staff ID"
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Resolved</option>
          <option value="Pending">Pending</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Assign Request
        </button>
      </form>
    </div>
  );
};

export default AssignRequest;
