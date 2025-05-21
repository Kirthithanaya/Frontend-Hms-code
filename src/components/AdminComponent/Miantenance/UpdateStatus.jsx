import  { useState } from 'react';
import { toast } from 'react-toastify';
import { updateRequestStatus } from '../../../services/maintenance';


const UpdateStatus = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roomNumber || !status) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const result = await updateRequestStatus({ roomNumber, status });

      toast.success(`Status updated to "${result.newStatus}" for Room ${roomNumber}`);
      setRoomNumber('');
      setStatus('Pending');
    } catch (error) {
      const message =
        error.response?.data?.message || 'Failed to update request status';
      toast.error(message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Update Maintenance Request Status</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Enter Room Number"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default UpdateStatus;
