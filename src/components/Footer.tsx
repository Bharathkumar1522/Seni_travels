import { motion } from 'framer-motion';
import { Car, Phone, Mail, MapPin, Clock, Heart, Star, Shield, Award } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Car Rental', icon: Car },
      { name: 'City Tours', icon: Star },
      { name: 'Outstation Trips', icon: MapPin },
      { name: 'Wedding Cars', icon: Award }
    ],
    quickLinks: [
      'About Us',
      'Our Fleet',
      'Pricing',
      'Contact',
      'Terms & Conditions'
    ],
    support: [
      '24/7 Customer Support',
      'Emergency Assistance',
      'Booking Help',
      'Payment Support',
      'Feedback & Reviews'
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-400/20">
                  <img
                    src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1756017470/Seni%20travels/WhatsApp_Image_2025-08-20_at_11.06.05_d92834ae_ly0md6.jpg"
                    alt="SENI TRAVELS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SENI TRAVELS
                </h3>
                <p className="text-blue-300 text-sm font-medium">Drive Comfort. Drive Freedom.</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Experience premium car rentals with affordable pricing and flexible options. 
              We're committed to making your journey comfortable, safe, and memorable with 
              our well-maintained fleet and exceptional service.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: '8688529823', action: () => window.open('tel:8688529823') },
                { icon: Mail, text: 'Vinayseni8686@gmail.com', action: () => window.open('mailto:Vinayseni8686@gmail.com') },
                { icon: Clock, text: '24/7 Available', action: () => {} }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 cursor-pointer group"
                  onClick={item.action}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Our Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 group"
                  >
                    <div className="p-1 rounded bg-gray-700/50 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <service.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>{service.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-bold mb-8 text-blue-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Support
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <h5 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Us
              </h5>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1755956489801!5m2!1sen!2sin!6m8!1m7!1sM3EODois9Yu8YFZOK2rCbA!2m2!1d18.69445307271959!2d78.10752878320105!3f309.95239027494216!4f-6.899192195086869!5f0.7820865974627469"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <button
                  onClick={() => window.open('tel:8688529823')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Call for Directions
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>© {currentYear} SENI TRAVELS. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>for better journeys</span>
            </div>
            
            <div className="flex space-x-8 text-sm text-gray-400">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="https://wa.me/8688529823"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute -inset-2 bg-green-400/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
          
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.div>
        </motion.a>
      </motion.div>
    </footer>
  );
};