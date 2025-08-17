import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Clock,
  Heart,
  MapPin,
  Phone,
  Search,
  Shield,
  Star,
  Users
} from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { clinics } from '../data/clinics'

export const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [clinicsRef, clinicsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Heart,
      title: 'Expert Medical Care',
      description: 'Board-certified doctors with years of experience in their specialties'
    },
    {
      icon: Shield,
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and comfortable treatment environments'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Personalized care plans tailored to each patient\'s unique needs'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Accredited facilities meeting international healthcare standards'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-uzum-primary via-uzum-secondary to-uzum-accent overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Trusted Healthcare Network in Uzbekistan
                </motion.div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Find the Best
                  <span className="block text-yellow-300">Medical Care</span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Connect with top-rated clinics and experienced doctors across Uzbekistan. 
                  Book appointments, view pricing, and get the healthcare you deserve.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/clinics">
                  <Button size="lg" className="bg-white text-uzum-primary hover:bg-gray-100 group">
                    Find Clinics
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="text-white border-white hover:bg-white hover:text-uzum-primary"
                  >
                    Browse Doctors
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{clinics.length}+</p>
                  <p className="text-sm text-blue-100">Partner Clinics</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-sm text-blue-100">Expert Doctors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-blue-100">Emergency Care</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical professionals"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Verified Clinics</p>
                      <p className="text-sm text-gray-600">Licensed & Accredited</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Clinics */}
      <section ref={clinicsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={clinicsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Medical Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover top-rated healthcare facilities with experienced doctors and modern equipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinics.map((clinic, index) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 50 }}
                animate={clinicsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden group">
                  <div className="relative">
                    <img
                      src={clinic.images[0]}
                      alt={clinic.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {clinic.isVerified && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="green" className="bg-green-500 text-white">
                          Verified
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {clinic.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {clinic.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{clinic.rating}</span>
                        <span className="ml-1">({clinic.reviewCount})</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Tashkent</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {clinic.specialties.slice(0, 3).map((specialty) => (
                        <Badge key={specialty} variant="blue" size="sm">
                          {specialty}
                        </Badge>
                      ))}
                      {clinic.specialties.length > 3 && (
                        <Badge variant="gray" size="sm">
                          +{clinic.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Open Today</span>
                      </div>
                      <Link to={`/clinic/${clinic.id}`}>
                        <Button size="sm" className="group">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/clinics">
              <Button size="lg" variant="ghost" className="group">
                View All Clinics
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Network
            </h2>
            <p className="text-xl text-gray-600">
              Experience healthcare excellence with our trusted medical partners
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="text-center h-full group">
                    <div className="w-16 h-16 bg-uzum-primary bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-uzum-primary group-hover:bg-opacity-100 transition-all duration-300">
                      <Icon className="w-8 h-8 text-uzum-primary group-hover:text-white transition-colors duration-300" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-uzum-primary to-uzum-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Healthcare Provider?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Browse our network of verified clinics, compare prices, read reviews, 
              and book appointments with top-rated doctors in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/clinics">
                <Button 
                  size="lg" 
                  className="bg-white text-uzum-primary hover:bg-gray-100 group"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Find Clinics Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-uzum-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Help
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};