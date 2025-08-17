import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatTime } from '../../utils/date';

const appointments = [
  {
    id: '1',
    patientName: 'Amir Karimov',
    doctorName: 'Dr. Sherzod Rahimov',
    time: '10:00',
    status: 'scheduled',
    type: 'Consultation'
  },
  {
    id: '2',
    patientName: 'Zarina Abdullayeva',
    time: '11:00',
    doctorName: 'Dr. Sherzod Rahimov',
    status: 'confirmed',
    type: 'Treatment'
  },
  {
    id: '3',
    patientName: 'Jasur Toshmatov',
    time: '14:00',
    doctorName: 'Dr. Malika Nazarova',
    status: 'completed',
    type: 'Follow-up'
  }
];

export const RecentAppointments: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'blue';
      case 'confirmed': return 'green';
      case 'completed': return 'gray';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
        <p className="text-sm text-gray-600">Upcoming and recent appointments</p>
      </div>
      
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">
                    {appointment.patientName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{appointment.patientName}</p>
                  <p className="text-sm text-gray-600">{appointment.doctorName}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                <p className="text-xs text-gray-500">{appointment.type}</p>
              </div>
              <Badge variant={getStatusColor(appointment.status)} className="capitalize">
                {appointment.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};