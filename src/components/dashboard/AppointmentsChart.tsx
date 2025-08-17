import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { name: 'Completed', value: 65, color: '#10B981' },
  { name: 'Scheduled', value: 25, color: '#3B82F6' },
  { name: 'Cancelled', value: 7, color: '#EF4444' },
  { name: 'No Show', value: 3, color: '#F59E0B' }
];

export const AppointmentsChart: React.FC = () => {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Appointment Status</h3>
        <p className="text-sm text-gray-600">Current month overview</p>
      </div>
      
      <div style={{ width: '100%', height: '250px' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value}%`, 'Percentage']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};