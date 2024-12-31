import React from 'react';
import { Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-8 py-6 border-t">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Code className="w-4 h-4" />
          <p>Created by Ajay Maddheshiya</p>
        </div>
      </div>
    </footer>
  );
}