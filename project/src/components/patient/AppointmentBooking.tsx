import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];

export default function AppointmentBooking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Appointment</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3"
            >
              <option value="">Select time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
}