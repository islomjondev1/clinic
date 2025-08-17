import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { name: 'Jan', revenue: 65000000, appointments: 120 },
  { name: 'Feb', revenue: 59000000, appointments: 132 },
  { name: 'Mar', revenue: 80000000, appointments: 145 },
  { name: 'Apr', revenue: 81000000, appointments: 156 },
  { name: 'May', revenue: 56000000, appointments: 134 },
  { name: 'Jun', revenue: 55000000, appointments: 142 },
  { name: 'Jul', revenue: 40000000, appointments: 128 }
];

export const RevenueChart: React.FC = () => {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Revenue & Appointments</h3>
        <p className="text-sm text-gray-600">Monthly performance overview</p>
      </div>
      
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis 
              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
              className="text-xs"
            />
            <Tooltip 
              formatter={(value: number, name: string) => [
                name === 'revenue' ? `${(value / 1000000).toFixed(1)}M UZS` : value,
                name === 'revenue' ? 'Revenue' : 'Appointments'
              ]}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              fillOpacity={1} 
              fill="url(#colorRevenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};