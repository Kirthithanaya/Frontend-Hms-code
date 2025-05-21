import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllRooms } from "../../../services/roomService";

const GetAllRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    const token = localStorage.getItem("token");

    try {
      const data = await getAllRooms(token);
      setRooms(data);
      toast.success("Rooms fetched successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch rooms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        All Rooms
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : rooms.length === 0 ? (
        <p className="text-center text-red-500">No rooms found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 border-b">Room Number</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Capacity</th>
                <th className="py-2 px-4 border-b">Occupancy</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room._id}
                  className="text-center hover:bg-gray-100 transition"
                >
                  <td className="py-2 px-4 border-b">{room.roomNumber}</td>
                  <td className="py-2 px-4 border-b">{room.type}</td>
                  <td className="py-2 px-4 border-b">{room.capacity}</td>
                  <td className="py-2 px-4 border-b">
                    {room.currentOccupancy || 0}
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

export default GetAllRoom;
