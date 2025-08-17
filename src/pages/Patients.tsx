import React, { useEffect, useState } from 'react';
import { Plus, Search, Baby, Phone, Calendar, DollarSign } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useClinicStore } from '../store/clinicStore';
import { useAuthStore } from '../store/authStore';
import { formatDate, formatCurrency } from '../utils/date';

export const Patients: React.FC = () => {
  const { patients, fetchPatients, isLoading } = useClinicStore();
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPatients(user?.clinicId);
  }, [user]);

  const filteredPatients = patients.filter(patient =>
    patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    (patient.guardianName && patient.guardianName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
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
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600 mt-1">Manage patient records and information</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{patients.length}</p>
            <p className="text-sm text-gray-600">Total Patients</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {patients.filter(p => p.isActive).length}
            </p>
            <p className="text-sm text-gray-600">Active Patients</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">
              {patients.reduce((sum, p) => sum + p.totalVisits, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Visits</p>
          </div>
        </Card>
        <Card padding="sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {formatCurrency(patients.reduce((sum, p) => sum + p.totalPaid, 0))}
            </p>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
        </Card>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} hover className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Baby className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Age: {calculateAge(patient.dateOfBirth)} years
                  </p>
                </div>
              </div>
              <Badge variant={patient.isActive ? 'green' : 'red'}>
                {patient.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{patient.phone}</span>
              </div>
              {patient.guardianName && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Guardian:</span> {patient.guardianName}
                </div>
              )}
              {patient.lastVisit && (
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Last visit: {formatDate(patient.lastVisit)}</span>
                </div>
              )}
            </div>

            {patient.allergies && patient.allergies !== 'None known' && (
              <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs font-medium text-red-800">Allergies:</p>
                <p className="text-xs text-red-700">{patient.allergies}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">
                  {patient.totalVisits}
                </p>
                <p className="text-xs text-gray-600">Total Visits</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(patient.totalPaid)}
                </p>
                <p className="text-xs text-gray-600">Total Paid</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <Baby className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No patients found matching your search.</p>
        </div>
      )}
    </div>
  );
};