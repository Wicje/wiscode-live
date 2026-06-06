import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function StudioBrain() {
  return (
    <div className="p-grid-margin pt-stack-xl flex flex-col justify-start items-center w-full min-h-full grid-bg">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-8 gap-0 border-2 border-primary bg-primary relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Area */}
        <div className="md:col-span-8 bg-surface p-stack-lg border-b-2 border-primary relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.02] font-display text-9xl leading-none font-bold -z-10 group-hover:opacity-10 transition-opacity">01</div>
          <div>
            <h2 className="font-sans text-[11px] font-bold tracking-widest text-secondary mb-4 uppercase">Studio Brain</h2>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-2">Strategy & Vision</h1>
          </div>
          <div className="mt-6 md:mt-0 font-display text-[13px] font-bold text-on-surface-variant uppercase tracking-widest">
            Last Updated: 2024.10.24 // Rev. 3
          </div>
        </div>

        {/* Text Block */}
        <div className="md:col-span-6 bg-surface p-stack-lg border-b-2 md:border-b-0 md:border-r-2 border-primary relative z-10 flex flex-col justify-center">
          <div className="max-w-prose">
            <p className="font-sans text-lg md:text-xl leading-relaxed mb-6 text-primary font-medium">
              The architectural approach to spatial design requires an uncompromising adherence to structural honesty. We are shifting focus towards raw materials—concrete, steel, and unpolished glass.
            </p>
            <p className="font-sans text-base leading-relaxed text-on-surface-variant">
              Our primary objective is to strip away the superfluous. <span className="text-secondary font-bold">#Brutalism</span> <span className="text-secondary font-bold">#SpatialDesign</span>
            </p>
          </div>
        </div>

        {/* Meta Sidebar */}
        <div className="md:col-span-2 bg-surface p-stack-md border-primary relative z-10 flex flex-col gap-6">
          <div>
            <div className="font-sans text-[10px] font-bold tracking-widest uppercase text-on-surface-variant border-b-2 border-primary pb-2 mb-3">Status</div>
            <div className="font-display text-sm font-bold text-primary uppercase">Active Phase</div>
          </div>
          <div>
            <div className="font-sans text-[10px] font-bold tracking-widest uppercase text-on-surface-variant border-b-2 border-primary pb-2 mb-3">Contributors</div>
            <ul className="font-display text-sm font-bold space-y-2 text-primary list-none p-0 m-0 uppercase tracking-wide">
              <li>01. E. Tyrell</li>
              <li>02. J. Deckard</li>
            </ul>
          </div>
        </div>

        {/* Notes (Pink) */}
        <div className="md:col-span-8 bg-accent-pink p-stack-lg border-t-2 border-primary relative z-10">
          <div className="flex flex-col md:flex-row gap-stack-lg border-l-4 border-primary pl-4 md:pl-8">
            <div className="w-full md:w-1/4 pr-0 md:pr-stack-md flex flex-col justify-between">
              <h3 className="font-display text-3xl font-bold mb-6 md:mb-0 uppercase tracking-tight">Field Notes</h3>
              <button className="border-2 border-primary bg-surface px-4 py-4 font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-primary hover:text-surface transition-colors w-full text-left flex justify-between items-center rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                Add Note <Plus size={18} />
              </button>
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-surface p-6 border-2 border-primary shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
                  <div className="font-display text-[11px] font-bold tracking-widest text-on-surface-variant mb-4 uppercase">Note 00{i}</div>
                  <p className="font-sans text-sm text-primary mb-6 leading-relaxed font-medium">
                    {i === 1 ? 'Analyze the structural integrity of exposed I-beams in the context of residential living spaces.' : 'Investigate lighting solutions that emphasize the texture of raw concrete without softening the edges.'}
                  </p>
                  <div className="text-secondary font-display text-[11px] font-bold uppercase tracking-widest">#{i === 1 ? 'Structure' : 'Lighting'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="md:col-span-8 bg-surface p-stack-lg border-t-2 border-primary relative z-10">
          <h3 className="font-display text-2xl font-bold mb-8 uppercase border-b-2 border-primary pb-4 tracking-tight">Visual Research</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
            {[1, 2, 3].map(i => (
              <div key={i} className="border-2 border-primary relative group overflow-hidden bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative aspect-square w-full">
                  <Image 
                    src={`https://picsum.photos/seed/research${i}/600/600`}
                    alt={`Research image ${i}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary text-surface p-4 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 font-display text-[11px] font-bold tracking-widest uppercase border-t-2 border-primary">
                  Ref: {i === 1 ? 'Concrete Textures' : i === 2 ? 'Light & Shadow' : 'Steel Joints'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <div className="h-stack-xl w-full" />
    </div>
  )
}
