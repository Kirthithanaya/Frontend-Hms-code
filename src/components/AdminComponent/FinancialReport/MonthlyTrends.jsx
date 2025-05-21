import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getMonthlyTrends } from "../../../services/financialService";

const MonthlyTrends = () => {
  const [data, setData] = useState([]);

  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const { payments, expenses } = await getMonthlyTrends();

        const trends = Array.from({ length: 12 }, (_, i) => ({
          month: monthNames[i + 1],
          revenue: 0,
          expense: 0,
        }));

        payments.forEach((p) => {
          trends[p._id - 1].revenue = p.revenue;
        });

        expenses.forEach((e) => {
          trends[e._id - 1].expense = e.expense;
        });

        setData(trends);
        toast.success("Monthly trends loaded successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to load monthly trends");
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Monthly Financial Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4CAF50"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#F44336"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTrends;
