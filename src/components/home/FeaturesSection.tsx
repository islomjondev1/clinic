import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Smartphone,
  Clock,
  MessageSquare,
  FileText,
  Zap
} from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Advanced appointment management with automated reminders and conflict detection.',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive patient records with medical history and treatment tracking.',
    color: 'green'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Seamless payment processing with Payme, Click, and Apelsin integration.',
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and reports to optimize your practice performance.',
    color: 'yellow'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security ensuring patient data privacy and compliance.',
    color: 'red'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Access your practice data anywhere with our responsive mobile interface.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock system availability with 99.9% uptime guarantee.',
    color: 'green'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Integrated messaging system for staff and patient communication.',
    color: 'purple'
  },
  {
    icon: FileText,
    title: 'Digital Records',
    description: 'Paperless medical records with advanced search and organization.',
    color: 'yellow'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automated workflows to reduce manual tasks and improve efficiency.',
    color: 'red'
  }
];

export const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive CRM platform provides all the tools modern medical practices 
            need to deliver exceptional patient care while streamlining operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center group">
                  <div className={`w-16 h-16 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};