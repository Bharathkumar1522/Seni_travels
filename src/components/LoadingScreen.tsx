import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1756017470/Seni%20travels/WhatsApp_Image_2025-08-20_at_11.06.05_d92834ae_ly0md6.jpg"
                alt="SENI TRAVELS"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
        
        {/* Company Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            {['S', 'E', 'N', 'I'].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
            <span className="mx-4 text-white/60">•</span>
            {['T', 'R', 'A', 'V', 'E', 'L', 'S'].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.08, duration: 0.6 }}
                className="inline-block text-white"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-xl text-blue-200 mb-8 font-light"
        >
          Drive Comfort. Drive Freedom.
        </motion.p>

        {/* Animated Car */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Car className="w-16 h-16 text-blue-400 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="w-80 mx-auto"
        >
          <div className="relative">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  className="absolute right-0 top-0 w-4 h-1 bg-white/60 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-blue-200 mt-4 text-sm font-medium"
            >
              Loading your journey... {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};