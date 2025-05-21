import { useState } from "react";
import CreatePayment from "../../components/AdminComponent/FinancialReport/CreatePayment";
import GetAllPayment from "../../components/AdminComponent/FinancialReport/GetAllPayment";
import CreateExpense from "../../components/AdminComponent/FinancialReport/CreateExpense";
import GetExpense from "../../components/AdminComponent/FinancialReport/GetExpense";
import OverviewReport from "../../components/AdminComponent/FinancialReport/OverviewReport";
import MonthlyTrends from "../../components/AdminComponent/FinancialReport/MonthlyTrends";

const AdminCreatePaymen = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshFinancial = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* Createpayment Component */}
      <CreatePayment refreshRooms={refreshFinancial} />
      <GetAllPayment refreshRooms={refreshFinancial} />
      <CreateExpense refreshRooms={refreshFinancial} />
      <GetExpense refreshRooms={refreshFinancial} />
      <OverviewReport refreshRooms={refreshFinancial} />
      <MonthlyTrends refreshRooms={refreshFinancial} />
    </div>
  );
};

export default AdminCreatePaymen;
