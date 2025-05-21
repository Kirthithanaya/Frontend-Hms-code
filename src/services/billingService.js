import api from "./api";

export const generateBill = async ({
  residentId,
  roomNumber,
  roomFee,
  utilities,
  additionalServices,
  discount,
  lateFee,
  paymentPlan,
}) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/billing/create",
    {
      resident: residentId, //  Backend expects "resident"
      roomNumber,
      roomFee,
      utilities,
      services: additionalServices, //  Backend expects "services"
      discount,
      lateFee,
      paymentMethod: paymentPlan, //  Backend expects "paymentMethod"
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

//Admin get all invoices

export const getAllInvoices = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/billing/invoices", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMyInvoices = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/billing/my-invoices", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Resident: Process Payment

export const processPayment = async ({ billId, method }) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/billing/process",
    { billId, method },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getPaymentHistory = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/billing/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// src/api/deleteInvoice.js

export const adminDeleteInvoice = async (invoiceId) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/billing/admin/delete-invoice",
    { id: invoiceId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
