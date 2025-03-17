import { motion } from 'framer-motion';
import { FaCheck, FaCar, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Hourly',
      price: 'PKR 100',
      period: 'per hour',
      description: 'Perfect for short stays and quick trips',
      features: [
        'Flexible hourly rates',
        'No minimum stay required',
        '24/7 access to your vehicle',
        'Free shuttle service',
        'Basic security coverage',
      ],
      icon: <FaClock className="w-8 h-8" />,
    },
    {
      name: 'Daily',
      price: 'PKR 800',
      period: 'per day',
      description: 'Best value for day trips and short vacations',
      features: [
        'Unlimited in/out access',
        'Priority parking spots',
        'Enhanced security coverage',
        'Free shuttle service',
        'Vehicle maintenance check',
        '24/7 customer support',
      ],
      icon: <FaCar className="w-8 h-8" />,
      featured: true,
    },
    {
      name: 'Monthly',
      price: 'PKR 15,000',
      period: 'per month',
      description: 'Ideal for long-term parking and frequent travelers',
      features: [
        'Dedicated parking spot',
        'Premium security coverage',
        'Free shuttle service',
        'Vehicle maintenance check',
        'Priority customer support',
        'Monthly car wash service',
        'Exclusive member benefits',
      ],
      icon: <FaShieldAlt className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Parking Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Select the perfect parking solution for your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card relative ${
                plan.featured ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.price}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{plan.period}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full text-center">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Additional Services</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCar className="w-5 h-5 text-blue-600 mr-2" />
                <span>Car wash service (PKR 500)</span>
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="w-5 h-5 text-blue-600 mr-2" />
                <span>Premium insurance coverage (PKR 1,000/month)</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mr-2" />
                <span>Valet parking service (PKR 200/day)</span>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>Easypaisa</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>JazzCash</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>Bank Transfer</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What happens if I need to extend my parking duration?',
                answer: 'You can easily extend your parking duration through our website or mobile app. Additional charges will be calculated based on the new duration.',
              },
              {
                question: 'Is there a shuttle service to the airport?',
                answer: 'Yes, we provide free shuttle service to and from the airport terminal. Shuttles run every 15 minutes, 24/7.',
              },
              {
                question: 'What security measures are in place?',
                answer: 'Our parking facility is equipped with 24/7 surveillance cameras, security personnel, and well-lit areas. We also provide comprehensive insurance coverage.',
              },
              {
                question: 'Can I cancel my booking?',
                answer: 'Yes, you can cancel your booking up to 24 hours before your scheduled arrival time for a full refund.',
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing; 