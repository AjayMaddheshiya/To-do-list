import React from 'react';
import { Box, Trending } from 'lucide-react';

const resources = [
  { name: 'Hospital Beds', total: 200, available: 45 },
  { name: 'Ventilators', total: 50, available: 12 },
  { name: 'ICU Rooms', total: 30, available: 8 },
  { name: 'Operating Rooms', total: 10, available: 3 }
];

export default function ResourceManagement() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Resource Management</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource) => (
          <div key={resource.name} className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Box className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  {resource.name}
                </span>
              </div>
              <Trending className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Available</span>
                <span>{resource.available}/{resource.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{
                    width: `${(resource.available / resource.total) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}