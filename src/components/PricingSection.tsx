import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, Clock, Users, Fuel, Star, Shield, Zap } from 'lucide-react';
import { useRef } from 'react';

const vehicles = [
  {
    name: 'Hyundai i20',
    price12: '₹1,500',
    price24: '₹2,500',
    image: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1756017192/Seni%20travels/images_zfiwcd.jpg',
    features: ['5 Seater', 'AC', 'Petrol', 'Manual'],
    popular: true,
    rating: 4.8
  },
  {
    name: 'Tata Zest',
    price12: '₹1,300',
    price24: '₹2,300',
    image: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1756015381/Seni%20travels/zestplatinumsilver_j1z4u6.webp',
    features: ['5 Seater', 'AC', 'Petrol', 'Manual'],
    rating: 4.6
  },
  {
    name: 'Maruti Swift Dzire',
    price12: '₹1,300',
    price24: '₹2,300',
    image: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1756017193/Seni%20travels/maruti-dzire-09_zgs3zd.jpg',
    features: ['5 Seater', 'AC', 'Petrol', 'Manual'],
    rating: 4.7
  },
  {
    name: 'Maruti Swift',
    price12: '₹1,300',
    price24: '₹2,300',
    image: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1756015380/Seni%20travels/zill3ra_1429634_yfdo6g.avif',
    features: ['5 Seater', 'AC', 'Petrol', 'Manual'],
    rating: 4.5
  },
  {
    name: 'Maruti Ertiga',
    price12: '₹1,800',
    price24: '₹3,000',
    image: 'https://res.cloudinary.com/dyecmgvcy/image/upload/v1756015380/Seni%20travels/aeaccb280abfd5f4029fc2b48dc9dc73_d33tbb.jpg',
    features: ['7 Seater', 'AC', 'Petrol', 'Manual'],
    spacious: true,
    rating: 4.9
  }
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 rounded-full px-6 py-3 mb-6"
          >
            <Car className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Premium Fleet</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Ride
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury and comfort with our carefully curated fleet of premium vehicles, 
            all maintained to the highest standards for your perfect journey.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl bg-white/70 backdrop-blur-xl hover:bg-white/80 transition-all duration-500 relative">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                  initial={false}
                />

                {/* Badges */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  {vehicle.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  {vehicle.spacious && (
                    <motion.div
                      initial={{ scale: 0, rotate: 10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                        <Users className="w-3 h-3 mr-1" />
                        Spacious
                      </Badge>
                    </motion.div>
                  )}
                </div>

                {/* Car Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Rating overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1"
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{vehicle.rating}</span>
                  </motion.div>
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Car className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    {vehicle.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50/50 rounded-lg px-3 py-2 backdrop-blur-sm"
                      >
                        {idx === 0 && <Users className="w-4 h-4 text-blue-500" />}
                        {idx === 1 && <Zap className="w-4 h-4 text-cyan-500" />}
                        {idx === 2 && <Fuel className="w-4 h-4 text-green-500" />}
                        {idx === 3 && <Shield className="w-4 h-4 text-purple-500" />}
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200/50 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-700">12 Hours</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{vehicle.price12}</span>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl border border-green-200/50 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-700">24 Hours</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">{vehicle.price24}</span>
                    </motion.div>
                  </div>

                  {/* Book Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                      onClick={() => {
                        const phone = "8688529823";
                        const message = `Hi! I'm interested in booking the ${vehicle.name}. Could you please provide more details?`;
                        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Book Now
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl backdrop-blur-sm">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                🎉 Special Launch Offers Available!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-blue-100 mb-8 text-lg leading-relaxed"
              >
                Book for multiple days and save more. Contact us for custom packages, 
                group discounts, and exclusive deals tailored just for you.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-full text-lg shadow-xl"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Custom Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};