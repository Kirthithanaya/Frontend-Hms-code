// src/components/CreateExpenseForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createExpense } from "../../../services/financialService";

const CreateExpense = () => {
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expense = await createExpense(formData);
      toast.success("Expense created successfully!");
      // Optionally, clear the form on success:
      setFormData({ category: "", amount: "", description: "" });
      console.log("Created expense:", expense);
    } catch (error) {
      console.error("Error creating expense:", error);
      toast.error(error.response?.data?.message || "Failed to create expense");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter expense category"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter expense description"
            className="w-full border px-4 py-2 rounded"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Expense
        </button>
      </form>
    </div>
  );
};

export default CreateExpense;
