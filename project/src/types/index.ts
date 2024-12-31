export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  priority: 'low' | 'medium' | 'high';
  admissionDate: string;
  status: 'waiting' | 'in-treatment' | 'discharged';
}

export interface HealthMetric {
  id: string;
  patientId: string;
  type: 'heart-rate' | 'blood-pressure' | 'temperature' | 'oxygen';
  value: number;
  timestamp: string;
}