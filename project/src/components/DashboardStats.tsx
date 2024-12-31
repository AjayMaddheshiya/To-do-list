import React from 'react';
import { Users, Activity, Clock, Bed } from 'lucide-react';

const stats = [
  {
    name: 'Active Patients',
    value: '234',
    icon: Users,
    change: '+4.75%',
    changeType: 'positive'
  },
  {
    name: 'Bed Occupancy',
    value: '85%',
    icon: Bed,
    change: '-2.3%',
    changeType: 'negative'
  },
  {
    name: 'Avg. Wait Time',
    value: '14min',
    icon: Clock,
    change: '-12%',
    changeType: 'positive'
  },
  {
    name: 'Critical Cases',
    value: '12',
    icon: Activity,
    change: '+2',
    changeType: 'neutral'
  }
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm ${
              stat.changeType === 'positive' ? 'text-green-600' :
              stat.changeType === 'negative' ? 'text-red-600' :
              'text-gray-600'
            }`}>
              {stat.change} from last week
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}