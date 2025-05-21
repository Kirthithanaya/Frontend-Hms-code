import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMyInvoices } from "../../../services/billingService";

const GetMyBill = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getMyInvoices();
        setInvoices(data.invoices);
        toast.success("Your invoices loaded successfully ✅");
      } catch (error) {
        toast.error("Failed to fetch invoices ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Invoices</h2>

      {loading ? (
        <p>Loading...</p>
      ) : invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Bill ID</th>
                <th className="px-4 py-2 border">Room</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Method</th>
                <th className="px-4 py-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border text-xs text-gray-700 break-words max-w-[200px]">
                    {invoice._id}
                  </td>
                  <td className="px-4 py-2 border">{invoice.roomNumber}</td>
                  <td className="px-4 py-2 border">₹{invoice.totalAmount}</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        invoice.paid ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {invoice.paid ? "Paid" : "Unpaid"}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">{invoice.paymentMethod}</td>
                  <td className="px-4 py-2 border">
                    {new Date(invoice.createdAt).toLocaleDateString()}
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

export default GetMyBill;
