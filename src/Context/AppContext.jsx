import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  booking: {
    currentBooking: null,
    bookingHistory: [],
    loading: false,
    error: null,
  },
  user: {
    isAuthenticated: false,
    userData: null,
    loading: false,
    error: null,
  },
  payment: {
    currentPayment: null,
    paymentHistory: [],
    loading: false,
    error: null,
  },
};

// Reducers
const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_BOOKING":
      return { ...state, currentBooking: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, bookingHistory: [...state.bookingHistory, action.payload] };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, isAuthenticated: action.payload };
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const paymentReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAYMENT":
      return { ...state, currentPayment: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, paymentHistory: [...state.paymentHistory, action.payload] };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [bookingState, bookingDispatch] = useReducer(bookingReducer, initialState.booking);
  const [userState, userDispatch] = useReducer(userReducer, initialState.user);
  const [paymentState, paymentDispatch] = useReducer(paymentReducer, initialState.payment);

  const value = {
    booking: {
      state: bookingState,
      dispatch: bookingDispatch,
    },
    user: {
      state: userState,
      dispatch: userDispatch,
    },
    payment: {
      state: paymentState,
      dispatch: paymentDispatch,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}; 