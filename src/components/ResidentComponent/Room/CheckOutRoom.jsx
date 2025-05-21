import { useState } from "react";
import { toast } from "react-toastify";
import { checkOutRoom } from "../../../services/roomService";

const CheckOutRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckOut = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await checkOutRoom({ roomNumber });
      toast.success("Room checked out successfully!");
      console.log(res);
    } catch (err) {
      toast.error(err.response?.data?.message || "Check-out failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Check Out Room</h2>
      <form onSubmit={handleCheckOut} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Processing..." : "Check Out"}
        </button>
      </form>
    </div>
  );
};

export default CheckOutRoom;
