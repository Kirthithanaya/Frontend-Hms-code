// components/AdminDeleteResidentForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteResident } from "../../../services/residentService";

const DeleteResident = () => {
  const [residentId, setResidentId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!residentId) {
      toast.error("Please enter a Resident ID");
      return;
    }

    try {
      await deleteResident(residentId);
      toast.success("Resident deleted successfully");
      setResidentId("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Delete Resident by ID</h2>
      <form onSubmit={handleDelete}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Resident ID</label>
          <input
            type="text"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            placeholder="Enter Resident ID"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete Resident
        </button>
      </form>
    </div>
  );
};

export default DeleteResident;
