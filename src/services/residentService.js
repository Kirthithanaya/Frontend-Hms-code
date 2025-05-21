import api from "./api";

export const createResident = async (residentData) => {
  const token = localStorage.getItem("token");
  const response = await api.post("/resident/create", residentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllResidents = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/resident/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateResident = async (data) => {
  const token = localStorage.getItem("token");
  const response = await api.put("/resident/update", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteResident = async (id) => {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/resident/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
