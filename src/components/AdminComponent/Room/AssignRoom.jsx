import { useState } from "react";
import { toast } from "react-toastify";
import { assignRoom } from "../../../services/roomService";

const AssignRoom = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await assignRoom(formData);
      toast.success("Room assigned successfully!");
      setFormData({
        roomNumber: "",
        checkInDate: "",
        checkOutDate: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Room assignment failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-bold mb-4">Assign Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Assign Room
        </button>
      </form>
    </div>
  );
};

export default AssignRoom;
