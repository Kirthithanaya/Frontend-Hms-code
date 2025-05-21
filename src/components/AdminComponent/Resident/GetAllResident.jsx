import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllResidents } from "../../../services/residentService";

const GetAllResident = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const data = await getAllResidents();
        setResidents(data.residents);
        toast.success("Residents loaded successfully");
      } catch (error) {
        toast.error("Failed to load residents");
      }
    };

    fetchResidents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">All Residents</h2>
      <div className="grid gap-6">
        {residents.map((resident) => (
          <div
            key={resident._id}
            className="bg-white shadow-md rounded-xl p-5 border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Name</label>
                <p className="border p-2 rounded">{resident.name}</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <p className="border p-2 rounded">{resident.email}</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Phone</label>
                <p className="border p-2 rounded">{resident.phone}</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Room Number</label>
                <p className="border p-2 rounded">{resident.roomNumber}</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Check-In Date</label>
                <p className="border p-2 rounded">
                  {new Date(resident.checkInDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-semibold">Preferences</label>
              </div>
              <div>
                <label className="text-sm font-semibold">Address</label>
                <p className="border p-2 rounded">{resident.address}</p>
              </div>
              <div>
                <label className="text-sm font-semibold">
                  Emergency Contact
                </label>
                <p className="border p-2 rounded">
                  {resident.emergencyContact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllResident;
