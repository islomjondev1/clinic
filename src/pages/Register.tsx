import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const registerSchema = z.object({
  clinicName: z.string().min(2, 'Clinic name must be at least 2 characters'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  specialization: z.string().min(2, 'Specialization is required'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const benefits = [
  'Free 30-day trial with full access',
  'No setup fees or hidden costs',
  'HIPAA compliant and secure',
  '24/7 customer support',
  'Easy data migration assistance',
  'Mobile app included'
];

const steps = [
  { number: 1, title: 'Create Account', description: 'Fill out the registration form' },
  { number: 2, title: 'Verify Email', description: 'Confirm your email address' },
  { number: 3, title: 'Setup Clinic', description: 'Configure your clinic settings' },
  { number: 4, title: 'Start Using', description: 'Begin managing your practice' }
];

export const Register: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showToast.success('Registration successful! Please check your email to verify your account.');
      setCurrentStep(2);
    } catch (error) {
      showToast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="max-w-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Start Your Free Trial
                  </h1>
                  <p className="text-gray-600">
                    Join thousands of healthcare professionals using ClinicCRM
                  </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.number 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {currentStep > step.number ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          step.number
                        )}
                      </div>
                      {step.number < steps.length && (
                        <div className={`w-12 h-0.5 ml-2 ${
                          currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Clinic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      Clinic Information
                    </h3>
                    
                    <Input
                      label="Clinic Name"
                      {...register('clinicName')}
                      error={errors.clinicName?.message}
                      placeholder="Your clinic name"
                    />
                    
                    <Input
                      label="Address"
                      {...register('address')}
                      error={errors.address?.message}
                      placeholder="Full clinic address"
                    />
                    
                    <Input
                      label="Specialization"
                      {...register('specialization')}
                      error={errors.specialization?.message}
                      placeholder="e.g., Pediatrics, General Medicine"
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                        placeholder="Your first name"
                      />
                      <Input
                        label="Last Name"
                        {...register('lastName')}
                        error={errors.lastName?.message}
                        placeholder="Your last name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Email Address"
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                        placeholder="your@email.com"
                      />
                      <Input
                        label="Phone Number"
                        {...register('phone')}
                        error={errors.phone?.message}
                        placeholder="+998 XX XXX XX XX"
                      />
                        placeholder="+998 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  {/* Security */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-blue-600" />
                      Security
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Password"
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                        placeholder="Create a strong password"
                      />
                      <Input
                        label="Confirm Password"
                        type="password"
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      {...register('agreeToTerms')}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="text-sm">
                      <p className="text-gray-700">
                        I agree to the{' '}
                        <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                          Privacy Policy
                        </Link>
                      </p>
                      {errors.agreeToTerms && (
                        <p className="text-red-600 mt-1">{errors.agreeToTerms.message}</p>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    Create Account & Start Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Benefits Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Call us</p>
                    <p className="text-sm text-gray-600">+998 78 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email us</p>
                    <p className="text-sm text-gray-600">support@cliniccrm.uz</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Getting Started
              </h3>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      currentStep >= step.number 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.number}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{step.title}</p>
                      <p className="text-xs text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};