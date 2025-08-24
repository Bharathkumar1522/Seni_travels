import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock, MessageCircle, User, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const phone = "8688529823";
    const message = `Hi! I'm ${formData.name}.\n\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our team shortly!"
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '8688529823',
      subtitle: 'Available 24/7',
      action: () => window.open('tel:8688529823'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'Vinayseni8686@gmail.com',
      subtitle: 'Quick response guaranteed',
      action: () => window.open('mailto:Vinayseni8686@gmail.com'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat instantly',
      subtitle: 'Fastest way to connect',
      action: () => window.open('https://wa.me/8688529823', '_blank'),
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Clock,
      title: 'Service Hours',
      value: '24/7 Available',
      subtitle: 'Round-the-clock support',
      action: () => {},
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_70%)]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let's Start Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to book your perfect ride? Contact{' '}
            <span className="text-blue-400 font-semibold">PROP VINAY SENI</span>{' '}
            and our dedicated team for immediate assistance and personalized service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Owner Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <Card className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/20">
                        <img
                          src="https://res.cloudinary.com/dyecmgvcy/image/upload/v1756017470/Seni%20travels/WhatsApp_Image_2025-08-20_at_11.06.05_d92834ae_ly0md6.jpg"
                          alt="PROP VINAY SENI"
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
                      <h3 className="text-2xl font-bold text-white mb-1">PROP VINAY SENI</h3>
                      <p className="text-blue-300 font-medium mb-2">Owner & Founder</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        "Your satisfaction is our priority. We ensure every journey is safe, 
                        comfortable, and memorable."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="cursor-pointer group"
                  onClick={info.action}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-3 shadow-lg`}
                        >
                          <info.icon className="w-full h-full text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-1">{info.title}</h4>
                          <p className="text-gray-200 font-medium mb-1">{info.value}</p>
                          <p className="text-gray-400 text-sm">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <Card className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  Send us a Message
                </CardTitle>
                <p className="text-gray-300">We'll get back to you within minutes!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <Label htmlFor="name" className="text-white font-medium flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Label htmlFor="phone" className="text-white font-medium flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-300"
                      placeholder="Your phone number"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Label htmlFor="email" className="text-white font-medium flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12 transition-all duration-300"
                      placeholder="Your email address"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Label htmlFor="message" className="text-white font-medium flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl min-h-[120px] transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements, preferred dates, and any special requests..."
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <MessageCircle className="w-5 h-5" />
                        Send Message via WhatsApp
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};