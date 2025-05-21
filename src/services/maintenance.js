import api from "./api";

export const createMaintenanceRequest = async (data) => {
  const token = localStorage.getItem("token");
  const response = await api.post("/maintenance/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMyRequests = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/maintenance/my-requests", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//Admin Get ALL rResident request

export const getAllRequests = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/maintenance/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const assignRequest = async ({
  roomNumber,
  adminId,
  staffId,
  status,
}) => {
  const token = localStorage.getItem("token");
  const response = await api.put(
    "/maintenance/assign",
    { roomNumber, adminId, staffId, status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateRequestStatus = async ({ roomNumber, status }) => {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/maintenance/update-status`,
    { roomNumber, status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

//Admin Delete

export const deleteRequest = async (roomNumber) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(`/maintenance/delete`, {
    data: { roomNumber },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
