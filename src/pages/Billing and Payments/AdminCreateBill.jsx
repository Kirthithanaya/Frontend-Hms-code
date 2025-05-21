import { useState } from "react";
import CreateBill from "../../components/AdminComponent/Billing/CreateBill";
import AdminBillingRecords from "./../../components/AdminComponent/Billing/AdminBillingRecords";
import DeleteInvoice from "../../components/AdminComponent/Billing/DeleteInvoice";

const AdminCreateBill = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshBilling = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* Create Billing Component */}
      <CreateBill refreshRooms={refreshBilling} />
      <AdminBillingRecords refreshRooms={refreshBilling} />
      <DeleteInvoice refreshRooms={refreshBilling} />
    </div>
  );
};

export default AdminCreateBill;
