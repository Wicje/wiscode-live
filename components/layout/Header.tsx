import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-20 px-grid-margin sticky top-0 z-30 bg-surface border-b-2 border-primary shrink-0 relative">
      <div className="flex items-center gap-8">
        <span className="font-display text-xl font-bold uppercase text-primary tracking-tighter md:hidden">WISCODE</span>
        <nav className="hidden lg:flex gap-6">
          <a className="text-on-surface hover:text-secondary transition-colors font-sans text-xs font-bold tracking-widest uppercase cursor-pointer" href="#">Projects</a>
          <a className="text-on-surface hover:text-secondary transition-colors font-sans text-xs font-bold tracking-widest uppercase cursor-pointer" href="#">Invoices</a>
          <a className="text-on-surface hover:text-secondary transition-colors font-sans text-xs font-bold tracking-widest uppercase cursor-pointer" href="#">Assets</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <button className="text-primary hover:text-secondary transition-colors"><Search size={22} /></button>
          <button className="text-primary hover:text-secondary transition-colors"><Bell size={22} /></button>
        </div>
        <button className="hidden md:flex border-2 border-primary px-4 py-2 font-sans text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-surface transition-colors rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          Create New
        </button>
        <div className="w-10 h-10 border-2 border-primary overflow-hidden bg-primary-fixed-dim shrink-0">
          <img src="https://picsum.photos/seed/user1/100/100" alt="User Profile" className="w-full h-full object-cover grayscale" />
        </div>
      </div>
    </header>
  )
}
