// src/pages/AdminUpdateResident.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { updateResident } from "../../../services/residentService";

const UpdateResident = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    roomNumber: "",
    checkInDate: "",
    address: "",
    emergencyContact: "",
    preferences: "Single", // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateResident(formData);
      toast.success(res.message || "Resident updated successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Update Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="Resident ID"
          value={formData.id}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="checkInDate"
          placeholder="Check-In Date"
          value={formData.checkInDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
        >
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Update Resident
        </button>
      </form>
    </div>
  );
};

export default UpdateResident;
