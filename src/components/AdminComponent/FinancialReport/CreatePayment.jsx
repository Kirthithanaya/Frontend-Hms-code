// src/components/Admin/CreatePaymentForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { createPayment } from "../../../services/financialService";

const CreatePayment = () => {
  const [formData, setFormData] = useState({
    residentId: "",
    amount: "",
    method: "Stripe", // default method
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPayment(formData);
      toast.success("Payment created successfully!");
      console.log("Payment response:", response);
      setFormData({ residentId: "", amount: "", method: "Stripe" }); // reset
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating payment");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Create Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Resident ID</label>
          <input
            type="text"
            name="residentId"
            value={formData.residentId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Method</label>
          <select
            name="method"
            value={formData.method}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CreatePayment;
