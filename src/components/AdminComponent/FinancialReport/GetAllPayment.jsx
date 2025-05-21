// src/components/Admin/AdminPaymentList.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllPayments } from "../../../services/financialService";

const GetAllPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getAllPayments();
        setPayments(data);
        toast.success("Payments loaded successfully!");
      } catch (error) {
        toast.error("Failed to load payments");
        console.error(error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">All Payments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Resident Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="p-2 border">{payment.residentId?.name}</td>
                <td className="p-2 border">{payment.residentId?.email}</td>
                <td className="p-2 border">${payment.amount}</td>
                <td className="p-2 border">{payment.method}</td>
                <td className="p-2 border">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllPayment;
