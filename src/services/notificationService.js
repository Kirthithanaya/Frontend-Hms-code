import api from "./api";

export const sendNotification = async (email, message) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/notification/send",
    { email, message },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const sendSMS = async (phone, message) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/sms/send",
    { phone, message },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
