// frontend/src/api/userAPI.js
import apiClient from './apiClient';

// Function to update points
export const updateUserPoints = async (userId, points) => {
  try {
    const response = await apiClient.put(`/updatePoints`, {
      userId,
      points,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating points:', error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post(`/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to get all users
export const getAllUsers = async () => {
  try {
    const response = await apiClient.get(`/getall`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
