
import React, { useState, useEffect } from 'react';
import { View, Patient } from './types';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PatientList from './views/PatientList';
import NewConsultation from './views/NewConsultation';
import NoteEditor from './views/NoteEditor';
import Settings from './views/Settings';
import Subscription from './views/Subscription';
import BillingHistory from './views/BillingHistory';
import Onboarding from './views/Onboarding';
import PlanSuccess from './views/PlanSuccess';
import PatientDetails from './views/PatientDetails';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.ONBOARDING);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [currentTranscript, setCurrentTranscript] = useState<string>('');
  const [history, setHistory] = useState<View[]>([]);

  const navigateTo = (view: View, patient?: Patient) => {
    setHistory(prev => [...prev, currentView]);
    if (patient) setSelectedPatient(patient);
    setCurrentView(view);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prevView = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentView(prevView);
    }
  };

  const handleStartConsultation = (transcript: string) => {
    setCurrentTranscript(transcript);
    setCurrentView(View.NOTE_EDITOR);
  };

  // Clear scroll on navigate
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case View.ONBOARDING:
        return <Onboarding onNext={() => setCurrentView(View.LOGIN)} onSkip={() => setCurrentView(View.LOGIN)} />;
      case View.LOGIN:
        return <Login onLogin={() => setCurrentView(View.DASHBOARD)} />;
      case View.DASHBOARD:
        return <Dashboard onNavigate={navigateTo} />;
      case View.PATIENT_LIST:
        return <PatientList onNavigate={navigateTo} onBack={goBack} />;
      case View.PATIENT_DETAILS:
        return (
          <PatientDetails 
            patient={selectedPatient} 
            onBack={goBack} 
            onNewConsult={() => navigateTo(View.NEW_CONSULTATION)}
            onViewNote={() => navigateTo(View.NOTE_EDITOR)}
          />
        );
      case View.NEW_CONSULTATION:
        return <NewConsultation onBack={goBack} onStart={handleStartConsultation} />;
      case View.NOTE_EDITOR:
        return (
          <NoteEditor 
            onBack={() => setCurrentView(View.DASHBOARD)} 
            onSync={() => setCurrentView(View.DASHBOARD)} 
            transcript={currentTranscript}
          />
        );
      case View.SETTINGS:
        return <Settings onBack={goBack} onNavigate={navigateTo} onLogout={() => setCurrentView(View.LOGIN)} />;
      case View.SUBSCRIPTION:
        return <Subscription onBack={goBack} onUpgrade={() => setCurrentView(View.PLAN_SUCCESS)} />;
      case View.BILLING_HISTORY:
        return <BillingHistory onBack={goBack} />;
      case View.PLAN_SUCCESS:
        return <PlanSuccess onBackToDashboard={() => setCurrentView(View.DASHBOARD)} onManage={() => setCurrentView(View.SUBSCRIPTION)} />;
      default:
        return <Login onLogin={() => setCurrentView(View.DASHBOARD)} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-md bg-white dark:bg-background-dark shadow-2xl relative flex flex-col min-h-screen">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
