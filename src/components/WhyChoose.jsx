import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import img1 from '../assets/img1.png'
import gif2 from '../assets/leaders.gif'
const reasons = [
  {
    icon: Zap,
    title: 'Lightning-Fast Implementation',
    description: 'Our AI-driven development process cuts implementation time by 60%, getting your solutions to market faster than traditional approaches.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Built with security-first architecture, our solutions comply with international standards and protect your critical business data.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team',
    description: 'Work with seasoned AI engineers, full-stack developers, and IoT specialists who bring years of industry experience.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our clients see an average 300% ROI within the first year through automation, efficiency gains, and reduced operational costs.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Award-Winning Innovation',
    description: 'Recognized for excellence in AI and automation, we stay ahead of the curve with cutting-edge research and development.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Future-Proof Technology',
    description: 'We build scalable, modular solutions that grow with your business and adapt to emerging technologies seamlessly.',
    color: 'from-pink-500 to-rose-500',
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Abhastra Automation?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver projects—we build partnerships that transform your business. 
            Here's what sets us apart in the world of AI and automation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image showcase with animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute  rounded-3xl opacity-20 blur-2xl" />
            <img 
              src={gif2}
              alt="AI Automation Technology"
              className="relative w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              From startups to Fortune 500 companies, businesses worldwide trust Abhastra Automation 
              to deliver mission-critical AI solutions that drive real results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-slate-600">Support Available</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second image section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Innovation at Every Step
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We combine the latest in AI research, hardware innovation, and software engineering 
              to create solutions that are not just functional, but transformative.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Continuous Innovation</div>
                  <div className="text-slate-600">We invest 20% of our resources in R&D to stay ahead</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Agile Methodology</div>
                  <div className="text-slate-600">Rapid iterations and continuous feedback loops</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">End-to-End Support</div>
                  <div className="text-slate-600">From concept to deployment and beyond</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute rounded-3xl opacity-20 blur-2xl" />
            <img 
              src={img1}
              alt="Innovation and Technology"
              className="relative  w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
