import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Users, 
  CreditCard, 
  BarChart3, 
  MessageSquare, 
  Shield,
  Smartphone,
  FileText,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Calendar,
    title: 'Appointment Management',
    description: 'Advanced scheduling system with automated reminders, conflict detection, and patient self-booking.',
    features: ['Online booking portal', 'SMS/Email reminders', 'Calendar integration', 'Waitlist management'],
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Patient Records',
    description: 'Comprehensive patient management with medical history, treatment tracking, and family connections.',
    features: ['Digital medical records', 'Treatment history', 'Family linking', 'Medical alerts'],
    color: 'green'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Integrated payment solutions supporting local and international payment methods.',
    features: ['Payme integration', 'Click payments', 'Apelsin support', 'Invoice generation'],
    color: 'purple'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time insights and comprehensive reporting to optimize your practice performance.',
    features: ['Revenue analytics', 'Patient insights', 'Staff performance', 'Custom reports'],
    color: 'yellow'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Integrated messaging system for seamless communication between staff and patients.',
    features: ['Internal chat', 'Patient messaging', 'Broadcast notifications', 'Telegram integration'],
    color: 'red'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security ensuring HIPAA compliance and data protection.',
    features: ['Data encryption', 'Access controls', 'Audit trails', 'Backup systems'],
    color: 'blue'
  }
];

const plans = [
  {
    name: 'Basic',
    price: '299,000',
    period: 'per month',
    description: 'Perfect for small clinics getting started',
    features: [
      'Up to 100 patients',
      'Basic appointment scheduling',
      'Payment processing',
      'Email support',
      'Mobile app access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '599,000',
    period: 'per month',
    description: 'Ideal for growing medical practices',
    features: [
      'Up to 500 patients',
      'Advanced scheduling',
      'Analytics dashboard',
      'SMS notifications',
      'Priority support',
      'Multi-location support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large healthcare organizations',
    features: [
      'Unlimited patients',
      'Custom integrations',
      'Advanced analytics',
      'Dedicated support',
      'White-label options',
      'API access'
    ],
    popular: false
  }
];

export const Services: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare
              <span className="text-blue-600 block">Management Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your medical practice needs to deliver exceptional patient care 
              while streamlining operations and maximizing efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed specifically for healthcare professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options to fit practices of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`h-full text-center ${plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price === 'Custom' ? 'Custom' : `${plan.price} UZS`}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/register">
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'variant-ghost'}`}
                      variant={plan.popular ? 'primary' : 'ghost'}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};