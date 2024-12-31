import React from 'react';
import { Patient } from '../types';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 45,
    condition: 'Cardiac Monitoring',
    priority: 'high',
    admissionDate: '2024-03-10',
    status: 'in-treatment'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 32,
    condition: 'Post-Surgery Recovery',
    priority: 'medium',
    admissionDate: '2024-03-11',
    status: 'waiting'
  },
  {
    id: '3',
    name: 'Emma Davis',
    age: 28,
    condition: 'General Checkup',
    priority: 'low',
    admissionDate: '2024-03-12',
    status: 'discharged'
  }
];

export default function PatientList() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Patients</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {patients.map((patient) => (
          <div key={patient.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.condition}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${patient.priority === 'high' ? 'bg-red-100 text-red-800' :
                    patient.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'}`}>
                  {patient.priority}
                </span>
                {patient.status === 'waiting' && <Clock className="w-5 h-5 text-gray-400" />}
                {patient.status === 'in-treatment' && <AlertCircle className="w-5 h-5 text-blue-500" />}
                {patient.status === 'discharged' && <CheckCircle className="w-5 h-5 text-green-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}