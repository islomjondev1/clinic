import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

// Mock users for demo
const mockUsers: User[] = [
  {
    id: '1',
    email: 'superadmin@clinic.uz',
    firstName: 'Super',
    lastName: 'Admin',
    role: 'superadmin',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    email: 'admin@smartkids.uz',
    firstName: 'Aziza',
    lastName: 'Karimova',
    role: 'admin',
    clinicId: '1',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    phone: '+998901234567',
    avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    email: 'doctor@smartkids.uz',
    firstName: 'Sherzod',
    lastName: 'Rahimov',
    role: 'doctor',
    clinicId: '1',
    specialization: 'Pediatriya',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    phone: '+998901234568',
    avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = mockUsers.find(u => u.email === email);
        
        if (user && password === '123456') {
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          });
          toast.success(`Welcome back, ${user.firstName}!`);
        } else {
          set({ isLoading: false });
          toast.error('Invalid email or password. Please try again.');
          throw new Error('Invalid credentials');
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        toast.success('You have been logged out successfully.');
      },

      updateUser: (updates: Partial<User>) => {
        const { user } = get();
        if (user) {
          set({ user: { ...user, ...updates } });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);