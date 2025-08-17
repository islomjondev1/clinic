import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, CreditCard, Users, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/Card';

const sections = [
  {
    icon: FileText,
    title: 'Service Description',
    content: [
      'ClinicCRM provides cloud-based practice management software for healthcare providers',
      'Services include patient management, appointment scheduling, payment processing, and analytics',
      'Platform is designed specifically for medical practices and healthcare organizations',
      'We provide technical support, training, and ongoing platform updates',
      'Service availability is subject to maintenance windows and technical requirements'
    ]
  },
  {
    icon: Users,
    title: 'User Responsibilities',
    content: [
      'Maintain accurate and up-to-date account information',
      'Ensure proper user access controls within your organization',
      'Comply with all applicable healthcare regulations and laws',
      'Use the platform only for legitimate medical practice purposes',
      'Report any security incidents or unauthorized access immediately',
      'Maintain appropriate professional standards when using the platform'
    ]
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    content: [
      'Subscription fees are billed monthly or annually in advance',
      'All payments are processed in Uzbek Som (UZS) unless otherwise specified',
      'Free trial period is 30 days with full platform access',
      'Refunds are available within 14 days of initial subscription',
      'Late payment may result in service suspension after 7-day grace period',
      'Price changes will be communicated 30 days in advance'
    ]
  },
  {
    icon: Shield,
    title: 'Data Protection',
    content: [
      'All patient data remains the property of the healthcare provider',
      'We implement industry-standard security measures and encryption',
      'Regular backups are performed to prevent data loss',
      'Data is stored in secure, HIPAA-compliant data centers',
      'You can export your data at any time in standard formats',
      'Data deletion is available upon account termination'
    ]
  },
  {
    icon: Scale,
    title: 'Limitation of Liability',
    content: [
      'Service is provided "as is" without warranties of any kind',
      'We are not liable for any indirect, incidental, or consequential damages',
      'Maximum liability is limited to the amount paid for services in the past 12 months',
      'Users are responsible for maintaining their own data backups',
      'We are not responsible for third-party integrations or services',
      'Force majeure events may affect service availability without liability'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Termination',
    content: [
      'Either party may terminate the agreement with 30 days written notice',
      'Immediate termination is allowed for breach of terms or non-payment',
      'Upon termination, you have 90 days to export your data',
      'Refunds for prepaid periods will be calculated on a pro-rata basis',
      'All user access will be revoked upon termination',
      'Confidentiality obligations survive termination of the agreement'
    ]
  }
];

export const Terms: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using ClinicCRM. 
              By using our service, you agree to these terms and conditions.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Agreement Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms of Service ("Terms") govern your use of ClinicCRM's 
                      practice management platform. By accessing or using our services, 
                      you agree to be bound by these terms. If you disagree with any 
                      part of these terms, you may not access the service.
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

            {/* Important Notice */}
            <div className="mt-12">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Important Notice
                    </h3>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        These terms may be updated from time to time. We will notify you of 
                        any material changes via email or through the platform. Continued 
                        use of the service after changes constitutes acceptance of the new terms.
                      </p>
                      <p>
                        For questions about these terms, please contact our legal team at 
                        <a href="mailto:legal@cliniccrm.uz" className="text-blue-600 hover:text-blue-700 ml-1">
                          legal@cliniccrm.uz
                        </a>
                      </p>
                      <p className="text-sm">
                        <strong>Governing Law:</strong> These terms are governed by the laws 
                        of the Republic of Uzbekistan. Any disputes will be resolved through 
                        arbitration in Tashkent, Uzbekistan.
                      </p>
                    </div>
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