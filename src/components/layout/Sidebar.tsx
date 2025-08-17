import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Bell,
  MessageSquare,
  Stethoscope,
  UserCheck,
  Baby
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const sidebarItems = {
  superadmin: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Building2, label: 'Clinics', path: '/clinics' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ],
  admin: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Baby, label: 'Patients', path: '/patients' },
    { icon: Stethoscope, label: 'Doctors', path: '/doctors' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ],
  doctor: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Baby, label: 'My Patients', path: '/patients' },
    { icon: Calendar, label: 'Schedule', path: '/appointments' },
    { icon: UserCheck, label: 'Visits', path: '/visits' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' }
  ]
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuthStore();
  
  const items = sidebarItems[user?.role as keyof typeof sidebarItems] || sidebarItems.admin;

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-40 border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ClinicCRM</h1>
            <p className="text-sm text-gray-500 capitalize">
              {user?.role === 'admin' ? 'Administrator' : 
               user?.role === 'doctor' ? 'Shifokor' : 
               user?.role === 'nurse' ? 'Hamshira' : 
               user?.role === 'receptionist' ? 'Qabulxonachi' : user?.role}
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                isActive 
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};