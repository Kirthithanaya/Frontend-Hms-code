import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllRoomsForResident } from "../../../services/roomService";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRoomsForResident();
        setRooms(data);
        toast.success("Rooms fetched successfully!");
      } catch (error) {
        toast.error("Failed to fetch rooms.");
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rooms.length === 0 ? (
          <p>No rooms available.</p>
        ) : (
          rooms.map((room) => (
            <div
              key={room._id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <p>
                <strong>Room Number:</strong> {room.roomNumber}
              </p>
              <p>
                <strong>Type:</strong> {room.type}
              </p>
              <p>
                <strong>Capacity:</strong> {room.capacity}
              </p>
              <p>
                <strong>Occupied:</strong> {room.occupied ? "Yes" : "No"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableRooms;
