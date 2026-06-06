'use client';
import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Desk from '@/components/views/Desk';
import StudioBrain from '@/components/views/StudioBrain';
import Ledger from '@/components/views/Ledger';
import Vault from '@/components/views/Vault';

export default function AppShell() {
  const [activeView, setActiveView] = useState('Desk');

  const renderView = () => {
    switch (activeView) {
      case 'Desk': return <Desk />;
      case 'StudioBrain': return <StudioBrain />;
      case 'Ledger': return <Ledger />;
      case 'Vault': return <Vault />;
      default: return <Desk />;
    }
  };

  return (
    <div className="flex bg-surface min-h-screen w-full relative selection:bg-secondary selection:text-white">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col md:ml-64 w-full h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto w-full relative">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
