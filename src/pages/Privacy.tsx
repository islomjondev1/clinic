import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    content: [
      'Personal information you provide when registering (name, email, phone)',
      'Medical practice information (clinic name, address, specialization)',
      'Patient data you input into the system (with proper consent)',
      'Usage data and analytics to improve our services',
      'Technical information (IP address, browser type, device information)'
    ]
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: [
      'Provide and maintain our CRM services',
      'Process payments and manage subscriptions',
      'Send important updates and notifications',
      'Improve our platform based on usage patterns',
      'Comply with legal and regulatory requirements',
      'Provide customer support and technical assistance'
    ]
  },
  {
    icon: Shield,
    title: 'Data Security',
    content: [
      'End-to-end encryption for all sensitive data',
      'Regular security audits and penetration testing',
      'HIPAA compliant infrastructure and processes',
      'Multi-factor authentication for enhanced security',
      'Regular automated backups with encryption',
      'Strict access controls and employee training'
    ]
  },
  {
    icon: Users,
    title: 'Data Sharing',
    content: [
      'We never sell your personal information to third parties',
      'Data is only shared with your explicit consent',
      'Integration partners receive minimal necessary data',
      'Legal authorities only when required by law',
      'Service providers under strict confidentiality agreements',
      'Anonymous, aggregated data for research purposes only'
    ]
  },
  {
    icon: Eye,
    title: 'Your Rights',
    content: [
      'Access your personal data at any time',
      'Request correction of inaccurate information',
      'Delete your account and associated data',
      'Export your data in a portable format',
      'Opt-out of non-essential communications',
      'File complaints with data protection authorities'
    ]
  },
  {
    icon: Globe,
    title: 'International Compliance',
    content: [
      'GDPR compliance for European users',
      'HIPAA compliance for healthcare data',
      'Local data protection laws in Uzbekistan',
      'SOC 2 Type II certification',
      'ISO 27001 information security standards',
      'Regular compliance audits and updates'
    ]
  }
];

export const Privacy: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy and data security are our top priorities. 
              Learn how we protect and handle your information.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-12">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Our Commitment to Privacy
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      At ClinicCRM, we understand the sensitive nature of healthcare data. 
                      This privacy policy explains how we collect, use, and protect your 
                      information in compliance with international standards including 
                      HIPAA, GDPR, and local regulations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.content.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Section */}
            <div className="mt-12">
              <Card>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Questions About Privacy?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this privacy policy or how we handle your data, 
                    please don't hesitate to contact our privacy team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:privacy@cliniccrm.uz"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      privacy@cliniccrm.uz
                    </a>
                    <a 
                      href="tel:+998781234567"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +998 78 123 45 67
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};