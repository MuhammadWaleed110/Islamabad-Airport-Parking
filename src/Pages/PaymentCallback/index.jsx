import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { useApp } from "../../context/AppContext";
import { paymentService } from "../../services/paymentService";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { payment } = useApp();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const processPayment = async () => {
      try {
        const orderId = searchParams.get("orderId");
        const paymentId = searchParams.get("paymentId");
        const status = searchParams.get("status");

        if (!orderId || !paymentId) {
          setStatus("error");
          return;
        }

        if (status === "success") {
          await paymentService.verifyPayment(paymentId);
          setStatus("success");
        } else {
          setStatus("error");
        }

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate("/booking");
        }, 3000);
      } catch (error) {
        console.error("Payment verification failed:", error);
        setStatus("error");
      }
    };

    processPayment();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        {status === "processing" && (
          <div className="text-center">
            <FaSpinner className="animate-spin text-4xl text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Processing Payment
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your payment...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="text-center">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600">
              Your booking has been confirmed. Redirecting to booking details...
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <FaTimesCircle className="text-4xl text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Payment Failed
            </h2>
            <p className="text-gray-600">
              There was an issue processing your payment. Please try again.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentCallback; 