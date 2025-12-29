
export enum View {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  PATIENT_LIST = 'PATIENT_LIST',
  PATIENT_DETAILS = 'PATIENT_DETAILS',
  NEW_CONSULTATION = 'NEW_CONSULTATION',
  NOTE_EDITOR = 'NOTE_EDITOR',
  SETTINGS = 'SETTINGS',
  SUBSCRIPTION = 'SUBSCRIPTION',
  BILLING_HISTORY = 'BILLING_HISTORY',
  PLAN_SUCCESS = 'PLAN_SUCCESS'
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  mrn: string;
  lastVisit: string;
  lastNoteDate: string;
  status: 'Synced' | 'Draft' | 'Processing AI' | 'Lab Alert';
  condition?: string;
  initials: string;
  avatarUrl?: string;
  reason?: string;
  time?: string;
}

export interface Note {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
}

export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Failed';
  plan: string;
}
