import { useState } from "react";
import { toast } from "react-toastify";
import { createMaintenanceRequest } from "../../../services/maintenance";

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    issueTitle: "",
    issueDescription: "",
    priority: "Low",
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
      await createMaintenanceRequest(formData);
      toast.success("Maintenance request submitted successfully");
      setFormData({
        roomNumber: "",
        issueTitle: "",
        issueDescription: "",
        priority: "Low",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error submitting request");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          placeholder="Room Number"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="issueTitle"
          value={formData.issueTitle}
          onChange={handleChange}
          placeholder="Issue Title"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="issueDescription"
          value={formData.issueDescription}
          onChange={handleChange}
          placeholder="Describe the issue"
          className="w-full p-2 border rounded"
          rows="4"
          required
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
