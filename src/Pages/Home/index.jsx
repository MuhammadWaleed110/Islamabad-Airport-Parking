import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCar, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Images from '../../Constants/Images';

const Home = () => {
  const features = [
    {
      icon: <FaCar className="w-8 h-8" />,
      title: 'Secure Parking',
      description: '24/7 surveillance and security personnel',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Insurance Coverage',
      description: 'Comprehensive vehicle insurance included',
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: '24/7 Service',
      description: 'Round-the-clock customer support',
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: 'Convenient Location',
      description: 'Just 5 minutes from ISB Airport',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-900/90" />
          <img
            src={Images.bgISBImages}
            alt="Airport Parking"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Affordable Airport Parking
            <br />
            <span className="text-blue-400">in Pakistan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Secure, convenient, and affordable parking solutions for your travel needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/booking"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-lg font-semibold px-8 py-4 inline-flex items-center space-x-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Book Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Experience the best airport parking service in Pakistan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Affordable Rates
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the perfect parking plan for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hourly',
                price: 'PKR 100',
                description: 'Perfect for short stays',
              },
              {
                title: 'Daily',
                price: 'PKR 800',
                description: 'Best value for day trips',
                featured: true,
              },
              {
                title: 'Monthly',
                price: 'PKR 15,000',
                description: 'Ideal for long-term parking',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <Link
                  to="/booking"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md block text-center transition duration-300 ease-in-out"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
