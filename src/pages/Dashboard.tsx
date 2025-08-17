import React, { useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Building2,
  UserCheck,
  Clock,
  AlertCircle
} from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { AppointmentsChart } from '../components/dashboard/AppointmentsChart';
import { RecentAppointments } from '../components/dashboard/RecentAppointments';
import { useClinicStore } from '../store/clinicStore';
import { useAuthStore } from '../store/authStore';
import { formatCurrency, formatNumber } from '../utils/date';

export const Dashboard: React.FC = () => {
  const { stats, fetchStats, isLoading } = useClinicStore();
  const { user } = useAuthStore();

  useEffect(() => {
    fetchStats(user?.role === 'superadmin' ? undefined : user?.clinicId);
  }, [user]);

  if (isLoading || !stats) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening in your {user?.role === 'superadmin' ? 'system' : 'clinic'} today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {user?.role === 'superadmin' && stats.clinicsCount && (
          <StatsCard
            title="Total Clinics"
            value={formatNumber(stats.clinicsCount)}
            change="8.1%"
            changeType="increase"
            icon={Building2}
            color="purple"
          />
        )}
        
        <StatsCard
          title="Total Patients"
          value={formatNumber(stats.totalPatients)}
          change="12.5%"
          changeType="increase"
          icon={Users}
          color="blue"
        />
        
        <StatsCard
          title="Total Appointments"
          value={formatNumber(stats.totalAppointments)}
          change="5.2%"
          changeType="increase"
          icon={Calendar}
          color="green"
        />
        
        <StatsCard
          title="Monthly Revenue"
          value={formatCurrency(stats.totalRevenue)}
          change="18.7%"
          changeType="increase"
          icon={DollarSign}
          color="yellow"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Today's Appointments"
          value={stats.appointmentsToday}
          icon={Clock}
          color="blue"
        />
        
        <StatsCard
          title="Pending Payments"
          value={stats.pendingPayments}
          icon={AlertCircle}
          color="red"
        />
        
        <StatsCard
          title="Active Staff"
          value={stats.activeStaff}
          icon={UserCheck}
          color="green"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <AppointmentsChart />
        </div>
      </div>

      {/* Recent Appointments */}
      <RecentAppointments />
    </div>
  );
};