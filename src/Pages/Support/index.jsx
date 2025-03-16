import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaQuestionCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I book a parking spot?',
      answer: 'You can book a parking spot through our website by selecting your preferred dates and parking type. Follow the booking process and make the payment to confirm your reservation.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Easypaisa, JazzCash, and Bank Transfers. All payments are processed securely through our payment gateway.',
    },
    {
      question: 'Is there a shuttle service to the airport?',
      answer: 'Yes, we provide free shuttle service to and from the airport terminal. Shuttles run every 15 minutes, 24/7.',
    },
    {
      question: 'What happens if I need to extend my parking duration?',
      answer: 'You can easily extend your parking duration through our website or mobile app. Additional charges will be calculated based on the new duration.',
    },
    {
      question: 'What security measures are in place?',
      answer: 'Our parking facility is equipped with 24/7 surveillance cameras, security personnel, and well-lit areas. We also provide comprehensive insurance coverage.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before your scheduled arrival time for a full refund.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            24/7 Customer Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We're here to help you with any questions or concerns
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chat with our support team on WhatsApp
            </p>
            <a
              href="https://wa.me/923155570362"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Start Chat</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Call us for immediate assistance
            </p>
            <a
              href="tel:+923155570362"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaPhone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Send us an email for detailed inquiries
            </p>
            <a
              href="mw051878@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <FaQuestionCircle className="w-6 h-6 text-blue-600 mr-2" />
              Frequently Asked Questions
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeTab === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                <span className="font-semibold">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                <span className="font-semibold">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                <span className="font-semibold">24/7</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 text-blue-600 mr-2" />
                <span>+92 315 5570362</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-blue-600 mr-2" />
                <span>support@ISBparking.pk</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="w-5 h-5 text-green-500 mr-2" />
                <span>+92 315 5570362</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support; 