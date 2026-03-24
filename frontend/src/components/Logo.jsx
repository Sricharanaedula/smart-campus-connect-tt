import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center p-2 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl shadow-soft">
        <GraduationCap className="text-white relative z-10" size={24} />
      </div>
      <span className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">
        Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">X</span>
      </span>
    </div>
  );
}
