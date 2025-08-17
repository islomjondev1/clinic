import { create } from 'zustand';
import { Clinic, Patient, Appointment, DashboardStats } from '../types';

interface ClinicState {
  clinics: Clinic[];
  patients: Patient[];
  appointments: Appointment[];
  stats: DashboardStats | null;
  isLoading: boolean;
  fetchClinics: () => Promise<void>;
  fetchPatients: (clinicId?: string) => Promise<void>;
  fetchAppointments: (clinicId?: string) => Promise<void>;
  fetchStats: (clinicId?: string) => Promise<void>;
  addClinic: (clinic: Omit<Clinic, 'id' | 'createdAt'>) => Promise<void>;
  updateClinic: (id: string, updates: Partial<Clinic>) => Promise<void>;
  addPatient: (patient: Omit<Patient, 'id' | 'createdAt'>) => Promise<void>;
  updatePatient: (id: string, updates: Partial<Patient>) => Promise<void>;
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt'>) => Promise<void>;
  updateAppointment: (id: string, updates: Partial<Appointment>) => Promise<void>;
}

// Mock data
const mockClinics: Clinic[] = [
  {
    id: '1',
    name: 'Smart Kids Medical Center',
    address: 'Tashkent, Chilonzor district, Bunyodkor street 1',
    phone: '+998781234567',
    email: 'info@smartkids.uz',
    website: 'https://smartkids.uz',
    isActive: true,
    subscription: 'premium',
    createdAt: '2024-01-01T00:00:00Z',
    totalPatients: 1248,
    totalStaff: 12,
    monthlyRevenue: 45600000,
    logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Healthy Future Clinic',
    address: 'Tashkent, Yunusabad district, Amir Temur street 15',
    phone: '+998781234568',
    email: 'info@healthyfuture.uz',
    isActive: true,
    subscription: 'basic',
    createdAt: '2024-01-15T00:00:00Z',
    totalPatients: 856,
    totalStaff: 8,
    monthlyRevenue: 28900000
  }
];

const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'Amir',
    lastName: 'Karimov',
    dateOfBirth: '2018-03-15',
    phone: '+998901111111',
    email: 'parent@example.com',
    address: 'Tashkent, Mirzo Ulugbek district',
    guardianName: 'Dilnoza Karimova',
    guardianPhone: '+998901111111',
    medicalHistory: 'Healthy child, regular checkups',
    allergies: 'None known',
    clinicId: '1',
    isActive: true,
    createdAt: '2024-01-10T00:00:00Z',
    lastVisit: '2024-03-01T10:00:00Z',
    totalVisits: 8,
    totalPaid: 2400000
  },
  {
    id: '2',
    firstName: 'Zarina',
    lastName: 'Abdullayeva',
    dateOfBirth: '2016-07-22',
    phone: '+998902222222',
    address: 'Tashkent, Shaykhontohur district',
    guardianName: 'Malika Abdullayeva',
    guardianPhone: '+998902222222',
    medicalHistory: 'Asthma, under control',
    allergies: 'Pollen, dust',
    clinicId: '1',
    isActive: true,
    createdAt: '2024-01-05T00:00:00Z',
    lastVisit: '2024-02-28T14:30:00Z',
    totalVisits: 12,
    totalPaid: 3600000
  }
];

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '3',
    clinicId: '1',
    date: '2024-03-15',
    time: '10:00',
    duration: 30,
    type: 'consultation',
    status: 'scheduled',
    notes: 'Regular checkup',
    cost: 300000,
    isPaid: false,
    createdAt: '2024-03-01T00:00:00Z'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '3',
    clinicId: '1',
    date: '2024-03-15',
    time: '11:00',
    duration: 45,
    type: 'treatment',
    status: 'confirmed',
    notes: 'Asthma follow-up',
    diagnosis: 'Controlled asthma',
    prescription: 'Continue inhaler, return in 3 months',
    cost: 450000,
    isPaid: true,
    createdAt: '2024-03-01T00:00:00Z'
  }
];

export const useClinicStore = create<ClinicState>((set, get) => ({
  clinics: [],
  patients: [],
  appointments: [],
  stats: null,
  isLoading: false,

  fetchClinics: async () => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    set({ clinics: mockClinics, isLoading: false });
  },

  fetchPatients: async (clinicId?: string) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    const patients = clinicId 
      ? mockPatients.filter(p => p.clinicId === clinicId)
      : mockPatients;
    set({ patients, isLoading: false });
  },

  fetchAppointments: async (clinicId?: string) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    const appointments = clinicId 
      ? mockAppointments.filter(a => a.clinicId === clinicId)
      : mockAppointments;
    set({ appointments, isLoading: false });
  },

  fetchStats: async (clinicId?: string) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const stats: DashboardStats = {
      totalPatients: clinicId ? 1248 : 2104,
      totalAppointments: clinicId ? 156 : 298,
      totalRevenue: clinicId ? 45600000 : 74500000,
      monthlyGrowth: 12.5,
      appointmentsToday: 8,
      pendingPayments: 5,
      activeStaff: clinicId ? 12 : 20,
      ...(clinicId ? {} : { clinicsCount: 2 })
    };
    
    set({ stats, isLoading: false });
  },

  addClinic: async (clinic) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    const newClinic: Clinic = {
      ...clinic,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      totalPatients: 0,
      totalStaff: 0,
      monthlyRevenue: 0
    };
    set(state => ({ 
      clinics: [...state.clinics, newClinic], 
      isLoading: false 
    }));
  },

  updateClinic: async (id, updates) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    set(state => ({
      clinics: state.clinics.map(c => c.id === id ? { ...c, ...updates } : c),
      isLoading: false
    }));
  },

  addPatient: async (patient) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    const newPatient: Patient = {
      ...patient,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      totalVisits: 0,
      totalPaid: 0
    };
    set(state => ({ 
      patients: [...state.patients, newPatient], 
      isLoading: false 
    }));
  },

  updatePatient: async (id, updates) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    set(state => ({
      patients: state.patients.map(p => p.id === id ? { ...p, ...updates } : p),
      isLoading: false
    }));
  },

  addAppointment: async (appointment) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 500));
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    set(state => ({ 
      appointments: [...state.appointments, newAppointment], 
      isLoading: false 
    }));
  },

  updateAppointment: async (id, updates) => {
    set({ isLoading: true });
    await new Promise(resolve => setTimeout(resolve, 300));
    set(state => ({
      appointments: state.appointments.map(a => a.id === id ? { ...a, ...updates } : a),
      isLoading: false
    }));
  },
}));