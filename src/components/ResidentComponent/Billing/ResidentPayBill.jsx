import { useState } from "react";
import { toast } from "react-toastify";
import { processPayment } from "../../../services/billingService";

const ResidentPayBill = () => {
  const [billId, setBillId] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!billId || !method) {
      toast.error("Both Bill ID and Payment Method are required");
      return;
    }

    try {
      setLoading(true);
      const response = await processPayment({ billId, method });

      toast.success(`${method} payment successful!`);
      console.log("Payment Response:", response);

      // Optionally clear form
      setBillId("");
      setMethod("");
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(
        error?.response?.data?.message || "Payment failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Process Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bill ID
          </label>
          <input
            type="text"
            value={billId}
            onChange={(e) => setBillId(e.target.value)}
            placeholder="Enter Bill ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a method</option>
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default ResidentPayBill;
