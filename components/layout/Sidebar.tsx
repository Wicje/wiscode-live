import { LayoutDashboard, BrainCircuit, Wallet, Lock, Settings, HelpCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar({ activeView, setActiveView }: { activeView: string, setActiveView: (v: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: 'Desk', label: 'Desk', icon: LayoutDashboard },
    { id: 'StudioBrain', label: 'Studio Brain', icon: BrainCircuit },
    { id: 'Ledger', label: 'Ledger', icon: Wallet },
    { id: 'Vault', label: 'Vault', icon: Lock },
  ];

  const handleTabClick = (id: string) => {
    setActiveView(id);
    setIsOpen(false);
  }

  return (
    <>
      <button 
        className="md:hidden fixed top-6 right-6 z-50 text-primary hover:text-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`flex-col fixed left-0 top-0 h-full z-40 bg-surface w-64 border-r-2 border-primary transition-transform duration-300 md:translate-x-0 flex ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-stack-md border-b-2 border-primary flex flex-col gap-1 shrink-0">
          <h1 className="font-display text-3xl font-bold tracking-tighter text-primary uppercase">WISCODE</h1>
          <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-on-surface-variant">Creative Agency OS</span>
        </div>
        
        <div className="flex-grow py-stack-md flex flex-col font-sans text-xs font-bold tracking-widest uppercase overflow-y-auto">
          {tabs.map(tab => {
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-4 py-4 w-full text-left transition-colors duration-200 ${isActive ? 'text-secondary bg-surface-container border-l-4 border-secondary pl-4' : 'text-on-surface-variant hover:text-primary pl-5 hover:bg-surface-container group border-l-4 border-transparent'}`}
              >
                <tab.icon size={20} className={`${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`} />
                <span className={`transition-transform duration-200 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-stack-md shrink-0">
          <button className="w-full py-4 border-2 border-primary bg-surface font-sans text-xs font-bold tracking-widest uppercase text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
            New Project
          </button>
        </div>

        <div className="border-t-2 border-primary p-stack-md flex flex-col gap-4 font-sans text-xs font-bold tracking-widest uppercase shrink-0">
          <button className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors text-left pl-1">
            <Settings size={20} className="opacity-70" /> Settings
          </button>
          <button className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors text-left pl-1">
            <HelpCircle size={20} className="opacity-70" /> Support
          </button>
        </div>
      </nav>
      {isOpen && <div className="fixed inset-0 bg-primary/20 z-30 md:hidden backdrop-blur-sm" onClick={() => setIsOpen(false)} />}
    </>
  )
}
