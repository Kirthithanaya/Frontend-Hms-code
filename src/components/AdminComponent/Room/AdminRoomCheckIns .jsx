import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllRoomCheckIn } from "../../../services/roomService";

const AdminRoomCheckIns = () => {
  const [roomCheckIns, setRoomCheckIns] = useState([]);

  useEffect(() => {
    const fetchRoomCheckIns = async () => {
      try {
        const data = await getAllRoomCheckIn();
        setRoomCheckIns(data);
        toast.success("Check-in data loaded successfully!");
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to load check-in data"
        );
      }
    };

    fetchRoomCheckIns();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Admin Room Check-Ins
      </h2>

      {roomCheckIns.length === 0 ? (
        <p className="text-center text-gray-500">No check-in data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border divide-y divide-white border-gray-200">
            <thead className="bg-blue-600 ">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-white-600">
                  Room Number
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white-600">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white-600">
                  Capacity
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white-600">
                  Available
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-white-600">
                  Occupants
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {roomCheckIns.map((room, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {room.roomNumber}
                  </td>
                  <td className="px-4 py-3">{room.type}</td>
                  <td className="px-4 py-3">{room.capacity}</td>
                  <td className="px-4 py-3">
                    {room.isAvailable ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-3">
                    {room.occupants.length > 0 ? (
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {room.occupants.map((occupant, idx) => (
                          <li key={idx}>
                            <span className="font-medium">
                              {occupant.residentName}
                            </span>{" "}
                            ({occupant.residentEmail})<br />
                            Check-In:{" "}
                            {new Date(
                              occupant.checkInDate
                            ).toLocaleDateString()}
                            {occupant.checkOutDate && (
                              <>
                                <br />
                                Check-Out:{" "}
                                {new Date(
                                  occupant.checkOutDate
                                ).toLocaleDateString()}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400 italic">No occupants</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminRoomCheckIns;
