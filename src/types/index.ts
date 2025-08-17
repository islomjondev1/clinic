export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  clinicId?: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
  phone?: string;
  specialization?: string;
}

export type UserRole = 'superadmin' | 'admin' | 'doctor' | 'staff' | 'parent';

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  isActive: boolean;
  subscription: SubscriptionType;
  createdAt: string;
  totalPatients: number;
  totalStaff: number;
  monthlyRevenue: number;
}

export type SubscriptionType = 'basic' | 'premium' | 'enterprise';

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email?: string;
  address: string;
  guardianName?: string;
  guardianPhone?: string;
  medicalHistory: string;
  allergies: string;
  clinicId: string;
  isActive: boolean;
  createdAt: string;
  lastVisit?: string;
  totalVisits: number;
  totalPaid: number;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  clinicId: string;
  date: string;
  time: string;
  duration: number;
  type: AppointmentType;
  status: AppointmentStatus;
  notes?: string;
  diagnosis?: string;
  prescription?: string;
  cost: number;
  isPaid: boolean;
  createdAt: string;
}

export type AppointmentType = 'consultation' | 'treatment' | 'followup' | 'emergency';
export type AppointmentStatus = 'scheduled' | 'confirmed' | 'inprogress' | 'completed' | 'cancelled' | 'noshow';

export interface Payment {
  id: string;
  appointmentId: string;
  patientId: string;
  clinicId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  createdAt: string;
  paidAt?: string;
}

export type PaymentMethod = 'cash' | 'card' | 'payme' | 'click' | 'apelsin';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}

export type NotificationType = 'appointment' | 'payment' | 'reminder' | 'system' | 'chat';

export interface DashboardStats {
  totalPatients: number;
  totalAppointments: number;
  totalRevenue: number;
  monthlyGrowth: number;
  appointmentsToday: number;
  pendingPayments: number;
  activeStaff: number;
  clinicsCount?: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}