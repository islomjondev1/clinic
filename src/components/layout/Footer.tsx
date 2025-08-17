import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-uzum-primary to-uzum-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MedCare</h3>
                <p className="text-sm text-gray-400">Healthcare Network</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional medical clinic network providing comprehensive 
              healthcare solutions across Uzbekistan with modern facilities and expert doctors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/clinics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Find Clinics
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Medical Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Medical Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Pediatric Care</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Cardiology</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Dermatology</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">General Medicine</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Emergency Services</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-uzum-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Tashkent, Uzbekistan<br />
                    Multiple locations available
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-uzum-primary" />
                <span className="text-gray-400 text-sm">+998 78 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-uzum-primary" />
                <span className="text-gray-400 text-sm">info@medcare.uz</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-uzum-primary mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>24/7 Emergency Services</p>
                  <p>Regular Hours: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 MedCare Healthcare Network. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-400 text-sm">
                Licensed Healthcare Provider
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};