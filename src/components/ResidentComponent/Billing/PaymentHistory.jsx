// src/pages/PaymentHistory.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPaymentHistory } from "../../../services/billingService";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getPaymentHistory();
        setHistory(data.history);
        toast.success("Payment history fetched successfully");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to load payment history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Payment History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No payment records found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              <th className="px-6 py-3 border-b">Date</th>
              <th className="px-6 py-3 border-b">Amount</th>
              <th className="px-6 py-3 border-b">Method</th>
              <th className="px-6 py-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((bill) => (
              <tr key={bill._id} className="text-sm text-gray-700">
                <td className="px-6 py-3 border-b">
                  {new Date(bill.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-3 border-b">${bill.totalAmount}</td>
                <td className="px-6 py-3 border-b">{bill.paymentMethod}</td>
                <td className="px-6 py-3 border-b text-green-600 font-semibold">
                  Paid
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;
