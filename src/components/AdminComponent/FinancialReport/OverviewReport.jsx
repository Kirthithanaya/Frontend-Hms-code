import  { useState } from "react";
import { toast } from "react-toastify";
import { getOverviewReport } from "../../../services/financialService";

const OverviewReport = () => {
  const [report, setReport] = useState(null);

  const handleFetchReport = async () => {
    try {
      const data = await getOverviewReport();
      setReport(data);
      toast.success("Financial Overview fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch report.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Financial Overview Report</h2>
      <button
        onClick={handleFetchReport}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Load Report
      </button>

      {report && (
        <div className="mt-6 space-y-2 text-gray-700">
          <p><strong>Total Revenue:</strong> ₹{report.totalRevenue}</p>
          <p><strong>Total Expenses:</strong> ₹{report.totalExpenses}</p>
          <p><strong>Net Profit:</strong> ₹{report.netProfit}</p>
          <p><strong>Occupancy Rate:</strong> {report.occupancyRate.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default OverviewReport;
