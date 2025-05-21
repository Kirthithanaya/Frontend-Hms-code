import api from "./api"; // Importing your custom axios instance

//  Create a new room
export const createRoom = async (roomData) => {
  const response = await api.post("/room/create", roomData);
  return response.data;
};

// Admin: Get All Rooms//  Get all rooms
export const getAllRooms = async (token) => {
  const response = await api.get("/room/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Get available rooms for resident
export const getAllRoomsForResident = async () => {
  const response = await api.get("/room/available");
  return response.data;
};

// services/checkinService.js

export const checkInRoom = async (data) => {
  const token = localStorage.getItem("token");
  const response = await api.post("/room/checkin", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllRoomCheckIn = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/room/admin/room-checkins", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const assignRoom = async ({
  roomNumber,
  residentId,
  checkInDate,
  checkOutDate,
}) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/room/assign",
    { roomNumber, residentId, checkInDate, checkOutDate },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const checkOutRoom = async (data) => {
  const token = localStorage.getItem("token");
  const response = await api.put("/room/checkout", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteRoom = async (roomNumber) => {
  const token = localStorage.getItem("token");
  const response = await api.delete(`/room/delete/${roomNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
