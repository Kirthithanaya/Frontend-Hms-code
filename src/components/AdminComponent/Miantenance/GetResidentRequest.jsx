//  src/pages/admin/AllRequests.jsx

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllRequests } from "../../../services/maintenance";

const GetResidentRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
        toast.success("Fetched all maintenance requests successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch maintenance requests");
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Maintenance Requests</h2>

      {requests.length === 0 ? (
        <p className="text-gray-600">No maintenance requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.map((req) => (
            <div key={req._id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-lg text-indigo-600 mb-1">
                Room: {req.roomNumber}
              </h3>
              <p>
                <span className="font-medium">Issue Title:</span>{" "}
                {req.issueTitle}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {req.issueDescription}
              </p>
              <p>
                <span className="font-medium">Priority:</span> {req.priority}
              </p>
              <p>
                <span className="font-medium">Status:</span> {req.status}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Submitted by: {req.resident?.name} ({req.resident?.email})
              </p>
              <p className="text-sm text-gray-400">
                Submitted on: {new Date(req.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetResidentRequest;
