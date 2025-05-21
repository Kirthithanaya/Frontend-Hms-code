import api from "./api";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update user role
export const updateUserRole = async (userId, role) => {
  const token = localStorage.getItem("token");
  const response = await api.put(
    `/user/${userId}/role`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Delete user
export const deleteUser = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
