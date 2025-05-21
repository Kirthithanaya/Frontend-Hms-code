import { useState } from "react";
import CreateResident from "../../components/AdminComponent/Resident/CreateResident";
import GetAllResident from "../../components/AdminComponent/Resident/GetAllResident";
import UpdateResident from "../../components/AdminComponent/Resident/UpdateResident";
import DeleteResident from "../../components/AdminComponent/Resident/DeleteResident";

const AdminCRUD = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshResidents = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Room allocation
        </h2>
      </div>

      {/* Create Residents Component */}
      <CreateResident refreshRooms={refreshResidents} />
      <GetAllResident refreshRooms={refreshResidents} />
      <UpdateResident refreshRooms={refreshResidents} />
      <DeleteResident refreshRooms={refreshResidents} />
    </div>
  );
};

export default AdminCRUD;
