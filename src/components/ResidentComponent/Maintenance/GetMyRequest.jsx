import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMyRequests } from "../../../services/maintenance";

const GetMyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getMyRequests();
        setRequests(data);
        toast.success("Maintenance requests loaded successfully");
      } catch (err) {
        toast.error("Failed to load maintenance requests");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        My Maintenance Requests
      </h2>

      {loading && <p className="text-center">Loading...</p>}

      {requests.length === 0 && !loading && (
        <p className="text-center text-gray-500">
          You have not submitted any maintenance requests.
        </p>
      )}

      <div className="grid gap-4">
        {requests.map((req) => (
          <div
            key={req._id}
            className="bg-white shadow-md rounded-lg p-4 border"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{req.issueTitle}</h3>
              <span
                className={`px-2 py-1 text-sm rounded ${
                  req.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : req.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {req.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Room:</strong> {req.roomNumber}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {req.issueDescription}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Priority:</strong> {req.priority}
            </p>
            <p className="text-sm text-gray-400">
              Submitted on: {new Date(req.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMyRequests;
