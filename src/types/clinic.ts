export interface Clinic {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  images: string[];
  rating: number;
  reviewCount: number;
  workingHours: {
    [key: string]: string;
  };
  specialties: string[];
  doctors: Doctor[];
  services: Service[];
  location: {
    lat: number;
    lng: number;
  };
  isVerified: boolean;
  establishedYear: number;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  education: string[];
  languages: string[];
  avatar: string;
  rating: number;
  consultationFee: number;
  availability: {
    [key: string]: string[];
  };
  qualifications: string[];
  about: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
}

export interface MedicalCondition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  specialists: string[];
}