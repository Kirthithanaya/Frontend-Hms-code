// src/api/createPayment.js
import api from "./api";

export const createPayment = async (paymentData) => {
  const token = localStorage.getItem("token");
  const response = await api.post("/financial/payment", paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

//GetPayment Admin

export const getAllPayments = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/financial/payments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createExpense = async (expenseData) => {
  const token = localStorage.getItem("token"); // Assumes token is stored here
  const response = await api.post("/financial/expense", expenseData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getExpenses = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/financial/expenses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getOverviewReport = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/financial/overview", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// services/api/financial.js
export const getMonthlyTrends = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/financial/trends", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
