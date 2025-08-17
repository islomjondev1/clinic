import React, { useEffect, useState } from 'react';
import { Search, MapPin, Star, Clock, Phone, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { clinics } from '../data/clinics';

export const Clinics: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Get all unique specialties
  const allSpecialties = Array.from(
    new Set(clinics.flatMap(clinic => clinic.specialties))
  ).sort();

  // Filter and sort clinics
  const filteredClinics = clinics
    .filter(clinic =>
    clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clinic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clinic.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
  .filter(clinic => 
    !selectedSpecialty || clinic.specialties.includes(selectedSpecialty)
  )
  .sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-uzum-primary to-uzum-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find Medical Clinics
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover top-rated healthcare facilities across Uzbekistan with experienced doctors and modern equipment
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search clinics, specialties, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-uzum-primary focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uzum-primary focus:border-transparent"
              >
                <option value="">All Specialties</option>
                {allSpecialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uzum-primary focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
                <option value="reviews">Sort by Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredClinics.length} Clinics Found
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedSpecialty && `Filtered by ${selectedSpecialty} • `}
                Sorted by {sortBy}
              </p>
            </div>
          </div>

          {/* Clinics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredClinics.map((clinic, index) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden group">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="relative lg:w-1/3">
                      <img
                        src={clinic.images[0]}
                        alt={clinic.name}
                        className="w-full h-48 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {clinic.isVerified && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="green" className="bg-green-500 text-white">
                            Verified
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 space-y-4">
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
                          <span className="ml-1">({clinic.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Tashkent</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{clinic.phone}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {clinic.specialties.slice(0, 4).map((specialty) => (
                          <Badge key={specialty} variant="blue" size="sm">
                            {specialty}
                          </Badge>
                        ))}
                        {clinic.specialties.length > 4 && (
                          <Badge variant="gray" size="sm">
                            +{clinic.specialties.length - 4} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Open Today</span>
                        </div>
                        <Link to={`/clinic/${clinic.id}`}>
                          <Button className="group">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredClinics.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No clinics found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};