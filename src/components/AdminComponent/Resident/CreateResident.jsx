// src/pages/AdminCreateResident.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createResident } from "./../../../services/residentService";

const CreateResident = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomNumber: "",
    checkInDate: "",
    emergencyContact: "",
    address: "",
    preferences: "single",
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
      await createResident(formData);
      toast.success("Resident created successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomNumber: "",
        checkInDate: "",
        emergencyContact: "",
        address: "",
        preferences: "single",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create resident");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Name", name: "name" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone" },
          { label: "Room Number", name: "roomNumber" },
          { label: "Check-in Date", name: "checkInDate", type: "date" },
          { label: "Emergency Contact", name: "emergencyContact" },
          { label: "Address", name: "address" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Preferences</label>
          <select
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="triple">Triple</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Resident
        </button>
      </form>
    </div>
  );
};

export default CreateResident;
