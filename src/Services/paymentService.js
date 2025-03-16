import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const paymentService = {
  // Easypaisa Integration
  initiateEasypaisaPayment: async (amount, orderId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/easypaisa/initiate`, {
        amount,
        orderId,
      });
      return response.data;
    } catch (error) {
      console.error('Easypaisa payment initiation failed:', error);
      throw error;
    }
  },

  // JazzCash Integration
  initiateJazzCashPayment: async (amount, orderId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/jazzcash/initiate`, {
        amount,
        orderId,
      });
      return response.data;
    } catch (error) {
      console.error('JazzCash payment initiation failed:', error);
      throw error;
    }
  },

  // Payment Verification
  verifyPayment: async (paymentId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/payment/verify/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error('Payment verification failed:', error);
      throw error;
    }
  },

  // Get Payment History
  getPaymentHistory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/payment/history`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch payment history:', error);
      throw error;
    }
  },
}; 