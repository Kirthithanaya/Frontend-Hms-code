import { useState } from "react";
import GetMyBill from "./../../components/ResidentComponent/Billing/GetMyBill";
import ResidentPayBill from "../../components/ResidentComponent/Billing/ResidentPayBill";
import PaymentHistory from "../../components/ResidentComponent/Billing/PaymentHistory";

const ResidentGetBill = () => {
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

      {/* Get My Billing Component */}
      <GetMyBill refreshRooms={refreshBilling} />
      <ResidentPayBill refreshRooms={refreshBilling} />
      <PaymentHistory refreshRooms={refreshBilling} />
    </div>
  );
};

export default ResidentGetBill;
