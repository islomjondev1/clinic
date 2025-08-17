import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Globe,
  Calendar,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  User,
  Award,
  Languages,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import { clinics, medicalConditions } from '../data/clinics';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { formatCurrency } from '../utils/date';
import toast from 'react-hot-toast';

export const ClinicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  
  const clinic = clinics.find(c => c.id === id);
  
  if (!clinic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Clinic Not Found</h2>
          <p className="text-gray-600 mb-4">The clinic you're looking for doesn't exist.</p>
          <Link to="/clinics">
            <Button>Back to Clinics</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === clinic.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? clinic.images.length - 1 : prev - 1
    );
  };

  const handleBookAppointment = (doctorId?: string) => {
    toast.success('Appointment booking feature coming soon!');
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'conditions', label: 'Medical Conditions' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const treatedConditions = medicalConditions.filter(condition =>
    condition.specialists.some(specialist =>
      clinic.specialties.some(specialty =>
        specialty.toLowerCase().includes(specialist.toLowerCase()) ||
        specialist.toLowerCase().includes(specialty.toLowerCase())
      )
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/clinics"
            className="inline-flex items-center text-uzum-primary hover:text-uzum-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clinics
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={clinic.images[currentImageIndex]}
                  alt={clinic.name}
                  className="w-full h-full object-cover"
                />
                {clinic.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              {clinic.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {clinic.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-uzum-primary' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${clinic.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clinic Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{clinic.name}</h1>
                  {clinic.isVerified && (
                    <Badge variant="green" className="bg-green-500 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{clinic.description}</p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-gray-900">{clinic.rating}</span>
                  <span className="text-gray-600 ml-1">({clinic.reviewCount} reviews)</span>
                </div>
                <div className="text-sm text-gray-600">
                  Est. {clinic.establishedYear}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-uzum-primary" />
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-uzum-primary" />
                  <span>{clinic.phone}</span>
                </div>
                {clinic.website && (
                  <div className="flex items-center text-gray-700">
                    <Globe className="w-5 h-5 mr-3 text-uzum-primary" />
                    <a 
                      href={clinic.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-uzum-primary hover:text-uzum-secondary transition-colors"
                    >
                      {clinic.website}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {clinic.specialties.map((specialty) => (
                    <Badge key={specialty} variant="blue">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleBookAppointment()}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  selectedTab === tab.id
                    ? 'border-uzum-primary text-uzum-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Clinic</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {clinic.description} Our facility has been serving the community since {clinic.establishedYear}, 
                    providing high-quality medical care with state-of-the-art equipment and experienced healthcare professionals.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We specialize in {clinic.specialties.join(', ')} and are committed to delivering 
                    personalized care to each of our patients. Our team of qualified doctors and medical staff 
                    work together to ensure the best possible outcomes for your health.
                  </p>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Working Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(clinic.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900 capitalize">{day}</span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full" onClick={() => handleBookAppointment()}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                    <Button variant="ghost" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic
                    </Button>
                    <Button variant="ghost" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Phone:</span>
                      <p className="text-gray-600">{clinic.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Address:</span>
                      <p className="text-gray-600">{clinic.address}</p>
                    </div>
                    {clinic.email && (
                      <div>
                        <span className="font-medium text-gray-900">Email:</span>
                        <p className="text-gray-600">{clinic.email}</p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {selectedTab === 'doctors' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
                <p className="text-gray-600">
                  Meet our experienced doctors who are dedicated to providing you with the best medical care.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {clinic.doctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden">
                    <div className="flex items-start space-x-4">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-uzum-primary font-medium mb-2">{doctor.specialty}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span>{doctor.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            <span>{doctor.experience} years exp.</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {doctor.about}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-900">Consultation Fee:</span>
                          <p className="text-uzum-primary font-semibold">
                            {formatCurrency(doctor.consultationFee)}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Languages:</span>
                          <p className="text-gray-600 text-sm">
                            {doctor.languages.join(', ')}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-900 block mb-2">Education:</span>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.education.map((edu, index) => (
                            <li key={index}>• {edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-900 block mb-2">Qualifications:</span>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {doctor.qualifications.map((qual, index) => (
                            <li key={index}>• {qual}</li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full"
                        onClick={() => handleBookAppointment(doctor.id)}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book with {doctor.name.split(' ')[1]}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'services' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services & Pricing</h2>
                <p className="text-gray-600">
                  Transparent pricing for all our medical services and treatments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinic.services.map((service) => (
                  <Card key={service.id} hover>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-uzum-primary">
                            {formatCurrency(service.price)}
                          </span>
                          <p className="text-sm text-gray-600">{service.duration} minutes</p>
                        </div>
                        <Badge variant="blue" size="sm">
                          {service.category}
                        </Badge>
                      </div>

                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleBookAppointment()}
                      >
                        Book Service
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'conditions' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Conditions We Treat</h2>
                <p className="text-gray-600">
                  Our specialists are experienced in treating a wide range of medical conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatedConditions.map((condition) => (
                  <Card key={condition.id}>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {condition.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {condition.description}
                      </p>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Common Symptoms:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {condition.symptoms.map((symptom, index) => (
                            <li key={index}>• {symptom}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Treatment Options:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {condition.treatments.map((treatment, index) => (
                            <li key={index}>• {treatment}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Specialists:</h4>
                        <div className="flex flex-wrap gap-2">
                          {condition.specialists.map((specialist) => (
                            <Badge key={specialist} variant="blue" size="sm">
                              {specialist}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'gallery' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinic Gallery</h2>
                <p className="text-gray-600">
                  Take a virtual tour of our modern facilities and equipment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinic.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="aspect-video rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${clinic.name} facility ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};