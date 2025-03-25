export interface Medication {
    name: string;
    dosage: string;
    time: string;
    method?: string;
    notes?: string;
  }
  
  export interface VitalSignRecord {
    time: string;
    temperature?: number;
    pulse?: number;
    respiration?: number;
    bloodPressureSystolic?: number;
    bloodPressureDiastolic?: number;
    bloodSugar?: number;
    oxygenSaturation?: number;
    medications: Medication[];
    notes?: string;
  }
  
  export class VitalSignsForm {
    patientName: string;
    recordDate: string;
    caregiverName: string;
    vitalSignsRecords: VitalSignRecord[];
  }
