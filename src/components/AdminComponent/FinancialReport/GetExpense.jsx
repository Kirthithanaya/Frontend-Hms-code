// src/components/ExpenseList.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getExpenses } from "../../../services/financialService";

const GetExpense = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
        toast.success("Expenses loaded successfully!");
      } catch (error) {
        toast.error("Failed to fetch expenses");
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-semibold mb-4">All Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp._id} className="border-b">
                <td className="p-2 border">{exp.category}</td>
                <td className="p-2 border">₹{exp.amount}</td>
                <td className="p-2 border">{exp.description}</td>
                <td className="p-2 border">
                  {new Date(exp.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetExpense;
