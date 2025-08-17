import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Star, 
  Calendar, 
  Award, 
  GraduationCap,
  MapPin,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sherzod Rahimov',
    specialty: 'Pediatrician',
    experience: '12 years',
    education: 'Tashkent Medical Academy',
    rating: 4.9,
    reviews: 156,
    languages: ['Uzbek', 'Russian', 'English'],
    avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialized in pediatric care with extensive experience in child development and preventive medicine.',
    achievements: ['Best Pediatrician 2023', 'Medical Excellence Award', 'Research Publication Author'],
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
    location: 'Smart Kids Medical Center'
  },
  {
    id: 2,
    name: 'Dr. Aziza Karimova',
    specialty: 'General Practitioner',
    experience: '8 years',
    education: 'Samarkand Medical Institute',
    rating: 4.8,
    reviews: 203,
    languages: ['Uzbek', 'Russian'],
    avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dedicated to providing comprehensive primary care with a focus on preventive medicine and patient education.',
    achievements: ['Community Health Award', 'Patient Care Excellence', 'Medical Innovation Prize'],
    availability: 'Mon-Sat: 8:00 AM - 6:00 PM',
    location: 'Healthy Future Clinic'
  },
  {
    id: 3,
    name: 'Dr. Malika Nazarova',
    specialty: 'Family Medicine',
    experience: '15 years',
    education: 'Tashkent Medical Academy',
    rating: 4.9,
    reviews: 189,
    languages: ['Uzbek', 'Russian', 'English', 'Turkish'],
    avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in family medicine with special interest in women\'s health and chronic disease management.',
    achievements: ['Family Medicine Excellence', 'Research Leadership Award', 'International Speaker'],
    availability: 'Tue-Sat: 10:00 AM - 7:00 PM',
    location: 'Family Health Center'
  }
];

export const OurDoctors: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [doctorsRef, doctorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert
              <span className="text-blue-600 block">Medical Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced healthcare professionals are dedicated to providing 
              exceptional medical care using the latest technology and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section ref={doctorsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 50 }}
                animate={doctorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full">
                  <div className="text-center mb-6">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <Badge variant="blue" className="mb-2">
                      {doctor.specialty}
                    </Badge>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {doctor.bio}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{doctor.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-600">{doctor.education}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-gray-600">{doctor.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-yellow-600 mr-2" />
                        <span className="text-gray-600">{doctor.availability}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.languages.map((lang) => (
                          <Badge key={lang} variant="gray" size="sm">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Achievements:</p>
                      <ul className="space-y-1">
                        {doctor.achievements.map((achievement) => (
                          <li key={achievement} className="text-xs text-gray-600 flex items-center">
                            <Award className="w-3 h-3 text-yellow-500 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Medical Network?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with our platform and start providing better patient care today.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};