import api from "./api"; // Your base axios instance

export const sendEmail = async (emailData) => {
  const token = localStorage.getItem("token");
  const response = await api.post("/integration/send-email", emailData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
