import React, { useEffect, useState } from 'react';
import { Plus, Search, Calendar, Clock, User, DollarSign } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useClinicStore } from '../store/clinicStore';
import { useAuthStore } from '../store/authStore';
import { formatDate, formatCurrency } from '../utils/date';

export const Appointments: React.FC = () => {
  const { appointments, patients, fetchAppointments, fetchPatients, isLoading } = useClinicStore();
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchAppointments(user?.clinicId);
    fetchPatients(user?.clinicId);
  }, [user]);

  const getPatientName = (patientId: string) => {
    const patient = patients.find(p => p.id === patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient';
  };

  const getDoctorName = (doctorId: string) => {
    // In a real app, you'd fetch doctor data
    return 'Dr. Sherzod Rahimov';
  };

  const filteredAppointments = appointments.filter(appointment => {
    const patientName = getPatientName(appointment.patientId).toLowerCase();
    const doctorName = getDoctorName(appointment.doctorId).toLowerCase();
    const matchesSearch = patientName.includes(searchTerm.toLowerCase()) ||
                          doctorName.includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'blue';
      case 'confirmed': return 'green';
      case 'inprogress': return 'yellow';
      case 'completed': return 'gray';
      case 'cancelled': return 'red';
      case 'noshow': return 'red';
      default: return 'gray';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'consultation': return 'blue';
      case 'treatment': return 'green';
      case 'followup': return 'yellow';
      case 'emergency': return 'red';
      default: return 'gray';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">Manage patient appointments and schedules</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="scheduled">Scheduled</option>
          <option value="confirmed">Confirmed</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="noshow">No Show</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{appointments.length}</p>
            <p className="text-sm text-gray-600">Total Appointments</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {appointments.filter(a => a.status === 'confirmed').length}
            </p>
            <p className="text-sm text-gray-600">Confirmed</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {appointments.filter(a => a.status === 'scheduled').length}
            </p>
            <p className="text-sm text-gray-600">Scheduled</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">
              {formatCurrency(appointments.reduce((sum, a) => sum + a.cost, 0))}
            </p>
            <p className="text-sm text-gray-600">Total Value</p>
          </div>
        </Card>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {getPatientName(appointment.patientId)}
                    </h3>
                    <Badge variant={getTypeColor(appointment.type)} className="capitalize">
                      {appointment.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {getDoctorName(appointment.doctorId)}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(appointment.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {appointment.time} ({appointment.duration} min)
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {formatCurrency(appointment.cost)}
                    </div>
                  </div>
                  
                  {appointment.notes && (
                    <p className="text-sm text-gray-600 mt-1 italic">
                      Note: {appointment.notes}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge variant={appointment.isPaid ? 'green' : 'yellow'}>
                  {appointment.isPaid ? 'Paid' : 'Unpaid'}
                </Badge>
                <Badge variant={getStatusColor(appointment.status)} className="capitalize">
                  {appointment.status.replace('inprogress', 'In Progress').replace('noshow', 'No Show')}
                </Badge>
              </div>
            </div>
            
            {appointment.diagnosis && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Diagnosis:</span>
                    <p className="text-gray-600">{appointment.diagnosis}</p>
                  </div>
                  {appointment.prescription && (
                    <div>
                      <span className="font-medium text-gray-900">Prescription:</span>
                      <p className="text-gray-600">{appointment.prescription}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No appointments found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};