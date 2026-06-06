import Image from 'next/image';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Desk() {
  return (
    <div className="p-grid-margin pt-stack-xl flex flex-col min-h-full relative selection:bg-secondary selection:text-white">
      {/* Background Grid Lines Overlay */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-between px-grid-margin md:ml-64">
        <div className="w-[1px] h-full bg-primary" />
        <div className="w-[1px] h-full bg-primary hidden sm:block" />
        <div className="w-[1px] h-full bg-primary hidden md:block" />
        <div className="w-[1px] h-full bg-primary hidden lg:block" />
        <div className="w-[1px] h-full bg-primary" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <header className="mb-stack-xl border-b-2 border-primary pb-stack-lg flex flex-col items-start justify-end min-h-[250px]">
          <div className="flex items-center space-x-3 mb-stack-md">
            <div className="w-2 h-2 bg-secondary rounded-none" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary">The Desk</span>
          </div>
          <h2 className="font-display text-6xl md:text-[80px] lg:text-[120px] font-bold uppercase text-primary w-full leading-[0.85] tracking-tighter">
            GOOD<br/>MORNING
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-primary border-2 border-primary w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Revenue Pulse */}
          <div className="col-span-1 md:col-span-4 bg-surface p-stack-md flex flex-col min-h-[280px] group relative overflow-hidden transition-all duration-300 hover:bg-surface-container-low border-b-2 md:border-b-0 md:border-r-2 border-primary">
            <div className="flex justify-between items-start mb-auto relative z-10">
              <h3 className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary">Revenue Pulse</h3>
              <TrendingUp size={20} className="text-secondary" />
            </div>
            <div className="mt-stack-lg mb-stack-md relative z-10">
              <p className="font-display text-xs font-bold tracking-widest text-on-surface-variant mb-2 uppercase">CURRENT MRR</p>
              <p className="font-display text-6xl tracking-tighter font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                $124k
              </p>
            </div>
            <div className="w-full flex items-end h-[60%] absolute bottom-0 left-0 space-x-1 opacity-20 group-hover:opacity-10 transition-opacity p-2">
              <div className="flex-1 bg-primary h-[20%]" />
              <div className="flex-1 bg-primary h-[35%]" />
              <div className="flex-1 bg-primary h-[25%]" />
              <div className="flex-1 bg-primary h-[50%]" />
              <div className="flex-1 bg-primary h-[40%]" />
              <div className="flex-1 bg-primary h-[70%]" />
              <div className="flex-1 bg-secondary h-[100%] opacity-100" />
            </div>
          </div>

          {/* Daily Signals */}
          <div className="col-span-1 md:col-span-4 bg-surface flex flex-col min-h-[280px] border-b-2 md:border-b-0 md:border-r-2 border-primary">
            <div className="p-stack-md border-b-2 border-primary bg-primary text-surface flex justify-between items-center h-[72px]">
              <h3 className="font-sans text-[11px] font-bold uppercase tracking-widest">Daily Signals</h3>
              <span className="font-display text-[13px] font-bold">3</span>
            </div>
            <ul className="flex flex-col flex-1 list-none p-0 m-0">
              <li className="flex-1 border-b-2 border-primary p-3 px-stack-md flex items-center hover:bg-surface-container transition-colors group cursor-pointer">
                <span className="font-display text-[13px] font-bold text-on-surface-variant mr-4 w-6">01</span>
                <p className="font-sans text-sm font-medium flex-1 group-hover:pl-2 transition-all">Review Project Alpha wireframes</p>
                <ArrowUpRight size={18} className="text-surface group-hover:text-primary transition-colors" />
              </li>
              <li className="flex-1 border-b-2 border-primary p-3 px-stack-md flex items-center hover:bg-surface-container transition-colors group cursor-pointer">
                <span className="font-display text-[13px] font-bold text-on-surface-variant mr-4 w-6">02</span>
                <p className="font-sans text-sm font-medium flex-1 group-hover:pl-2 transition-all">Approve Q3 budget allocation</p>
                <ArrowUpRight size={18} className="text-surface group-hover:text-primary transition-colors" />
              </li>
              <li className="flex-1 p-3 px-stack-md flex items-center hover:bg-accent-pink transition-colors group cursor-pointer">
                <span className="font-display text-[13px] font-bold text-secondary mr-4 w-6">03</span>
                <p className="font-sans text-sm font-bold flex-1 group-hover:pl-2 transition-all text-primary">Client sync: Omega Redesign</p>
                <div className="w-2 h-2 bg-secondary rounded-none mr-2" />
              </li>
            </ul>
          </div>

          {/* Editorial Image */}
          <div className="col-span-1 md:col-span-4 bg-surface min-h-[280px] relative overflow-hidden group">
            <Image 
              src="https://picsum.photos/seed/editorial1/800/800" 
              alt="Editorial abstract architecture"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[12px] border-surface pointer-events-none mix-blend-exclusion" />
            <div className="absolute bottom-4 right-4 bg-surface border-2 border-primary px-3 py-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="font-display text-[11px] font-bold uppercase tracking-widest text-primary">Insight / 04</span>
            </div>
          </div>
          
          {/* Active Projects List */}
          <div className="col-span-1 md:col-span-12 bg-surface flex flex-col border-t-2 border-primary">
            <div className="p-stack-md flex justify-between items-center border-b-2 border-primary">
              <h3 className="font-display text-2xl font-bold uppercase text-primary">Active Projects</h3>
              <button className="font-sans text-[11px] font-bold uppercase tracking-widest border-2 border-primary px-4 py-3 hover:bg-primary hover:text-surface transition-colors flex items-center rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                View All <ArrowUpRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="hidden md:grid grid-cols-12 gap-4 px-stack-md py-4 border-b-2 border-primary bg-surface-container-low font-sans text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              <div className="col-span-1">ID</div>
              <div className="col-span-5">Project Name</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-3 text-right">Next Milestone</div>
            </div>
            
            <div className="flex flex-col">
              {[{id:'PR-102', n:'Horizon Branding', s:'In Progress', sm:'primary', m:'Oct 24 / Design Review'},
                {id:'PR-098', n:'Vertex Architecture Web', s:'Blocked', sm:'secondary', m:'Pending Client Assets'},
                {id:'PR-105', n:'Silo E-Commerce', s:'Planning', sm:'primary', m:'Nov 02 / Kickoff'}
              ].map((proj, idx) => (
                <div key={proj.id} className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-stack-md py-5 ${idx !== 2 ? 'border-b-2' : ''} border-primary items-center hover:bg-surface-container transition-colors group cursor-pointer ${proj.sm==='secondary' ? 'hover:bg-accent-pink/50' : ''}`}>
                  <div className="col-span-1 font-display text-[13px] font-bold text-on-surface-variant hidden md:block">{proj.id}</div>
                  <div className="col-span-1 md:col-span-5 font-display text-xl font-bold tracking-tight text-primary transition-transform group-hover:translate-x-2">
                    {proj.n}
                  </div>
                  <div className="col-span-1 md:col-span-3 flex items-center">
                    <span className={`border-2 px-2 py-1 font-sans text-[10px] font-bold tracking-widest uppercase inline-block rounded-none shadow-[2px_2px_0px_0px_currentColor]
                      ${proj.sm === 'secondary' ? 'border-secondary text-secondary' : 
                        proj.s === 'In Progress' ? 'border-primary bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]' : 'border-primary text-primary'}`}>
                      {proj.s}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 md:text-right font-display text-[13px] font-bold text-primary">
                    {proj.m}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-stack-xl w-full relative z-0" />
      </div>
    </div>
  );
}
