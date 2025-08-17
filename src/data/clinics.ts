import { Clinic, Doctor, Service, MedicalCondition } from '../types/clinic';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Aziza Karimova',
    specialty: 'Pediatrician',
    experience: 12,
    education: ['Tashkent Medical Academy', 'Harvard Medical School (Fellowship)'],
    languages: ['Uzbek', 'Russian', 'English'],
    avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    consultationFee: 250000,
    availability: {
      monday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
      tuesday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
      wednesday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
      thursday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
      friday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
      saturday: ['09:00', '10:00', '11:00']
    },
    qualifications: [
      'Board Certified Pediatrician',
      'Fellowship in Pediatric Cardiology',
      'Member of American Academy of Pediatrics'
    ],
    about: 'Dr. Aziza Karimova is a highly experienced pediatrician with over 12 years of practice. She specializes in child development, preventive care, and pediatric cardiology.'
  },
  {
    id: '2',
    name: 'Dr. Sherzod Rahimov',
    specialty: 'Cardiologist',
    experience: 15,
    education: ['Samarkand Medical Institute', 'Mayo Clinic (Residency)'],
    languages: ['Uzbek', 'Russian', 'English'],
    avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    consultationFee: 350000,
    availability: {
      monday: ['08:00', '09:00', '10:00', '13:00', '14:00'],
      tuesday: ['08:00', '09:00', '10:00', '13:00', '14:00'],
      wednesday: ['08:00', '09:00', '10:00', '13:00', '14:00'],
      thursday: ['08:00', '09:00', '10:00', '13:00', '14:00'],
      friday: ['08:00', '09:00', '10:00', '13:00', '14:00']
    },
    qualifications: [
      'Board Certified Cardiologist',
      'Fellowship in Interventional Cardiology',
      'Member of European Society of Cardiology'
    ],
    about: 'Dr. Sherzod Rahimov is a renowned cardiologist with extensive experience in interventional cardiology and heart disease prevention.'
  },
  {
    id: '3',
    name: 'Dr. Malika Nazarova',
    specialty: 'Dermatologist',
    experience: 10,
    education: ['Tashkent Medical Academy', 'Johns Hopkins (Fellowship)'],
    languages: ['Uzbek', 'Russian', 'English', 'Turkish'],
    avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    consultationFee: 300000,
    availability: {
      tuesday: ['10:00', '11:00', '12:00', '15:00', '16:00'],
      wednesday: ['10:00', '11:00', '12:00', '15:00', '16:00'],
      thursday: ['10:00', '11:00', '12:00', '15:00', '16:00'],
      friday: ['10:00', '11:00', '12:00', '15:00', '16:00'],
      saturday: ['10:00', '11:00', '12:00']
    },
    qualifications: [
      'Board Certified Dermatologist',
      'Fellowship in Dermatopathology',
      'Member of American Academy of Dermatology'
    ],
    about: 'Dr. Malika Nazarova specializes in medical and cosmetic dermatology with a focus on skin cancer prevention and treatment.'
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'General Consultation',
    description: 'Comprehensive health assessment and consultation',
    price: 200000,
    duration: 30,
    category: 'General'
  },
  {
    id: '2',
    name: 'Pediatric Consultation',
    description: 'Specialized consultation for children',
    price: 250000,
    duration: 45,
    category: 'Pediatrics'
  },
  {
    id: '3',
    name: 'Cardiology Consultation',
    description: 'Heart health assessment and consultation',
    price: 350000,
    duration: 60,
    category: 'Cardiology'
  },
  {
    id: '4',
    name: 'Dermatology Consultation',
    description: 'Skin health assessment and treatment',
    price: 300000,
    duration: 45,
    category: 'Dermatology'
  },
  {
    id: '5',
    name: 'ECG Test',
    description: 'Electrocardiogram test for heart monitoring',
    price: 150000,
    duration: 20,
    category: 'Diagnostics'
  },
  {
    id: '6',
    name: 'Blood Test',
    description: 'Comprehensive blood analysis',
    price: 100000,
    duration: 15,
    category: 'Laboratory'
  }
];

export const medicalConditions: MedicalCondition[] = [
  {
    id: '1',
    name: 'Hypertension',
    description: 'High blood pressure condition requiring ongoing management',
    symptoms: ['Headaches', 'Dizziness', 'Chest pain', 'Shortness of breath'],
    treatments: ['Medication', 'Lifestyle changes', 'Regular monitoring'],
    specialists: ['Cardiologist', 'General Practitioner']
  },
  {
    id: '2',
    name: 'Diabetes',
    description: 'Metabolic disorder affecting blood sugar levels',
    symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'],
    treatments: ['Insulin therapy', 'Diet management', 'Exercise', 'Blood sugar monitoring'],
    specialists: ['Endocrinologist', 'General Practitioner']
  },
  {
    id: '3',
    name: 'Asthma',
    description: 'Respiratory condition causing breathing difficulties',
    symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing'],
    treatments: ['Inhalers', 'Bronchodilators', 'Corticosteroids', 'Allergy management'],
    specialists: ['Pulmonologist', 'Allergist']
  },
  {
    id: '4',
    name: 'Eczema',
    description: 'Skin condition causing inflammation and irritation',
    symptoms: ['Itchy skin', 'Red patches', 'Dry skin', 'Rashes'],
    treatments: ['Topical creams', 'Moisturizers', 'Antihistamines', 'Lifestyle changes'],
    specialists: ['Dermatologist']
  }
];

export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'Smart Kids Medical Center',
    description: 'Leading pediatric healthcare facility providing comprehensive medical services for children and adolescents.',
    address: 'Tashkent, Chilonzor district, Bunyodkor street 1',
    phone: '+998 78 123 45 67',
    email: 'info@smartkids.uz',
    website: 'https://smartkids.uz',
    images: [
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 156,
    workingHours: {
      monday: '08:00 - 18:00',
      tuesday: '08:00 - 18:00',
      wednesday: '08:00 - 18:00',
      thursday: '08:00 - 18:00',
      friday: '08:00 - 18:00',
      saturday: '09:00 - 15:00',
      sunday: 'Closed'
    },
    specialties: ['Pediatrics', 'General Medicine', 'Vaccination', 'Child Development'],
    doctors: [doctors[0]],
    services: services.filter(s => ['General', 'Pediatrics', 'Laboratory'].includes(s.category)),
    location: {
      lat: 41.2995,
      lng: 69.2401
    },
    isVerified: true,
    establishedYear: 2015
  },
  {
    id: '2',
    name: 'Heart Care Clinic',
    description: 'Specialized cardiovascular center offering advanced cardiac care and preventive services.',
    address: 'Tashkent, Yunusabad district, Amir Temur street 15',
    phone: '+998 78 123 45 68',
    email: 'info@heartcare.uz',
    website: 'https://heartcare.uz',
    images: [
      'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 203,
    workingHours: {
      monday: '07:00 - 17:00',
      tuesday: '07:00 - 17:00',
      wednesday: '07:00 - 17:00',
      thursday: '07:00 - 17:00',
      friday: '07:00 - 17:00',
      saturday: '08:00 - 14:00',
      sunday: 'Closed'
    },
    specialties: ['Cardiology', 'Cardiac Surgery', 'Interventional Cardiology', 'Heart Rehabilitation'],
    doctors: [doctors[1]],
    services: services.filter(s => ['Cardiology', 'Diagnostics', 'General'].includes(s.category)),
    location: {
      lat: 41.3123,
      lng: 69.2787
    },
    isVerified: true,
    establishedYear: 2010
  },
  {
    id: '3',
    name: 'Skin Health Dermatology',
    description: 'Premier dermatology clinic providing comprehensive skin care and cosmetic treatments.',
    address: 'Tashkent, Mirzo Ulugbek district, Mustaqillik avenue 45',
    phone: '+998 78 123 45 69',
    email: 'info@skinhealth.uz',
    website: 'https://skinhealth.uz',
    images: [
      'https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviewCount: 89,
    workingHours: {
      monday: 'Closed',
      tuesday: '09:00 - 18:00',
      wednesday: '09:00 - 18:00',
      thursday: '09:00 - 18:00',
      friday: '09:00 - 18:00',
      saturday: '10:00 - 16:00',
      sunday: '10:00 - 16:00'
    },
    specialties: ['Dermatology', 'Cosmetic Dermatology', 'Dermatopathology', 'Laser Treatments'],
    doctors: [doctors[2]],
    services: services.filter(s => ['Dermatology', 'General'].includes(s.category)),
    location: {
      lat: 41.3111,
      lng: 69.2797
    },
    isVerified: true,
    establishedYear: 2018
  }
];