import React, { useState } from 'react';
import { Mic, Square } from 'lucide-react';

export default function VoiceNotes() {
  const [isRecording, setIsRecording] = useState(false);
  const [notes, setNotes] = useState<string[]>([]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic will be implemented here
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Voice Notes</h3>
        <button
          onClick={toggleRecording}
          className={`p-3 rounded-full ${
            isRecording ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
          }`}
        >
          {isRecording ? <Square className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </button>
      </div>
      <div className="space-y-2">
        {notes.map((note, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">{note}</p>
          </div>
        ))}
        {isRecording && (
          <div className="p-3 bg-red-50 rounded-lg animate-pulse">
            <p className="text-sm text-red-600">Recording...</p>
          </div>
        )}
      </div>
    </div>
  );
}