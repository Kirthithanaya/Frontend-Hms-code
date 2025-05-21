import React, { useState } from "react";
import { toast } from "react-toastify";
import { generateBill } from "./../../../services/billingService";

const CreateBill = () => {
  const [formData, setFormData] = useState({
    residentId: "",
    roomNumber: "",
    roomFee: "",
    utilities: "",
    additionalServices: "",
    discount: "",
    lateFee: "",
    paymentPlan: "Stripe", // Default payment method
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await generateBill(formData);
      toast.success("Invoice generated successfully!");
      setFormData({
        residentId: "",
        roomNumber: "",
        roomFee: "",
        utilities: "",
        additionalServices: "",
        discount: "",
        lateFee: "",
        paymentPlan: "Stripe",
      });
    } catch (error) {
      console.error("Error generating bill:", error);
      toast.error("Failed to generate invoice");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Generate Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="residentId"
          placeholder="Resident ID"
          value={formData.residentId}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="number"
          name="roomFee"
          placeholder="Room Fee"
          value={formData.roomFee}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />

        <input
          type="number"
          name="utilities"
          placeholder="Utilities"
          value={formData.utilities}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="number"
          name="additionalServices"
          placeholder="Additional Services"
          value={formData.additionalServices}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="number"
          name="lateFee"
          placeholder="Late Fee"
          value={formData.lateFee}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />

        <select
          name="paymentPlan"
          value={formData.paymentPlan}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          <option value="Stripe">Stripe</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash">Cash</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default CreateBill;
