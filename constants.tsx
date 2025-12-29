
import { Patient, Invoice } from './types';

export const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    age: 34,
    gender: 'Female',
    mrn: '#839201',
    lastVisit: 'Oct 24',
    lastNoteDate: 'Oct 24',
    status: 'Synced',
    condition: 'Hypertension',
    initials: 'SJ',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnlooIjZF5OHFtsumgX9DrMf1xe9ycJYRdlkeA9nqnglu2NUsMn6ad55wdCUQa9HUByDDyrv24wonBeMjsarJFKhX2v9FB_11ZWxQhBpSY2Na3XkbUYHgfwKSholQtZ7-WqAXkr0gx-EA3Bj8SV_tSEskjWsWASatawLB5_vCjlb_tlLRTVeN_xAoPb36szatrX-jowJNJ8T504rQ6PL6rg5hD06dvt9BeTBFTJo0aw-n3sJv2y53KazANauow2Q9zd4jZoZU_uqdB'
  },
  {
    id: '2',
    name: 'Michael Ross',
    age: 52,
    gender: 'Male',
    mrn: '#192834',
    lastVisit: 'Today',
    lastNoteDate: 'Today',
    status: 'Draft',
    reason: 'Chest Pain, radiating to left arm',
    initials: 'MR',
    time: '10:30 AM'
  },
  {
    id: '3',
    name: 'James Wilson',
    age: 68,
    gender: 'Male',
    mrn: '#440291',
    lastVisit: 'Yesterday',
    lastNoteDate: 'Yesterday',
    status: 'Lab Alert',
    initials: 'JW',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUhJi3iigS-Oete2_RA6ZloIkI6chjdClH2TE4I6Sf5-zzxFwrMQTGgDXDZ5CSpzm9a4MW5-SVABIpk0jItSaHx8Z1v-kZ0JZcDj5tEW8aFqPV-ie9pWMJxzOjR3xUalmGbqe_9lWJvKlMSMC85s-3iqF-NsgRBBlz6P1Ag0BLbxachF7_oCpP4Ye-KmuMea9eiiMOV9cpL2XBKKsZr97w3mTK_2EVPkRB5bfzcxkgJSjh8mYgcDk2ZFzHbGNOV9C-aOBtN5nhPfaC'
  },
  {
    id: '4',
    name: 'Emily Chen',
    age: 29,
    gender: 'Female',
    mrn: '#992011',
    lastVisit: 'Oct 12',
    lastNoteDate: 'Oct 12',
    status: 'Synced',
    initials: 'EC',
    reason: 'Routine Checkup'
  }
];

export const MOCK_INVOICES: Invoice[] = [
  { id: '#INV-2023-010', date: 'Oct 01, 2023', amount: '$49.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: '#INV-2023-009', date: 'Sep 01, 2023', amount: '$49.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: '#INV-2023-008-B', date: 'Aug 15, 2023', amount: '$49.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: '#INV-2023-008-A', date: 'Aug 01, 2023', amount: '$49.00', status: 'Failed', plan: 'Pro Plan - Monthly' },
];
