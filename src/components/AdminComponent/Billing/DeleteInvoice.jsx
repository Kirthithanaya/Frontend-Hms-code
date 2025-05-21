// src/components/DeleteInvoiceForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { adminDeleteInvoice } from "../../../services/billingService";

const DeleteInvoice = () => {
  const [invoiceId, setInvoiceId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!invoiceId.trim()) {
      return toast.error("Please enter an Invoice ID");
    }

    try {
      const res = await adminDeleteInvoice(invoiceId);
      toast.success(res.message || "Invoice deleted successfully");
      setInvoiceId("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete invoice");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Delete Invoice</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Invoice ID"
          value={invoiceId}
          onChange={(e) => setInvoiceId(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Delete Invoice
        </button>
      </form>
    </div>
  );
};

export default DeleteInvoice;
