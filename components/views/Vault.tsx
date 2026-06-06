import { Film, FileText, FileArchive, Image as ImageIcon, Shield, Link as LinkIcon, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Vault() {
  const [useWatermark, setUseWatermark] = useState(true);

  const assets = [
    { id: '01', icon: Film, name: 'FW24_Campaign_Master', vol: '1.2 GB', fmt: 'MP4', dl: '0 DL' },
    { id: '02', icon: FileText, name: 'Lookbook_Digital_Final', vol: '45 MB', fmt: 'PDF', dl: '12 DL', highlight: true },
    { id: '03', icon: FileArchive, name: 'Raw_Stills_Archive_V2', vol: '4.8 GB', fmt: 'ZIP', dl: '0 DL' },
    { id: '04', icon: ImageIcon, name: 'Hero_Image_Retouched', vol: '18 MB', fmt: 'JPG', dl: '4 DL' },
  ];

  return (
    <div className="flex flex-col h-full bg-surface">
      <header className="w-full border-b-2 border-primary p-grid-margin md:px-grid-margin md:py-stack-xl flex flex-col justify-end min-h-[250px] shrink-0">
        <p className="font-display text-[11px] font-bold text-secondary uppercase mb-6 tracking-widest flex items-center gap-3">
          <span className="w-2 h-2 bg-secondary block"></span> Protocol Active
        </p>
        <h1 className="font-display text-7xl md:text-[100px] lg:text-[140px] uppercase text-primary font-bold leading-none m-0 p-0 tracking-tighter">
          THE VAULT
        </h1>
      </header>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0">
        
        {/* Left Col: Target Assets */}
        <section className="md:col-span-8 border-b-2 md:border-b-0 md:border-r-2 border-primary bg-surface flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-stack-md border-b-2 border-primary bg-surface-container-low shrink-0 sticky top-0 z-20">
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary">Asset Ledger</h2>
            <span className="font-display text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">04 ITEMS ENTRENCHED</span>
          </div>

          <div className="hidden md:grid grid-cols-12 gap-stack-sm px-grid-margin py-4 border-b-2 border-primary font-display text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface shrink-0 sticky top-[74px] z-20">
            <div className="col-span-1">ID</div>
            <div className="col-span-6">Asset Nomenclature</div>
            <div className="col-span-2 text-right">Volume</div>
            <div className="col-span-1 text-center">FMT</div>
            <div className="col-span-2 text-right">Metrics</div>
          </div>

          <div className="flex flex-col">
            {assets.map((asset) => (
              <div key={asset.id} className={`group grid grid-cols-1 md:grid-cols-12 items-center gap-stack-sm px-grid-margin py-6 border-b-2 border-primary hover:bg-surface-container-low transition-colors cursor-pointer ${asset.highlight ? 'bg-surface-container' : 'bg-surface'}`}>
                <div className="md:col-span-1 font-display text-[13px] font-bold text-primary">{asset.id}</div>
                <div className="md:col-span-6 flex items-center gap-4">
                  <asset.icon size={24} className="text-primary shrink-0 opacity-80" />
                  <span className="font-sans text-base text-primary truncate uppercase font-bold tracking-tight group-hover:translate-x-1 transition-transform">{asset.name}</span>
                </div>
                <div className="md:col-span-2 font-display text-[13px] font-bold text-on-surface-variant md:text-right">{asset.vol}</div>
                <div className="md:col-span-1 flex md:justify-center">
                  <span className="font-display text-[10px] font-bold text-primary border-2 border-primary px-2 py-1 shadow-[2px_2px_0px_0px_currentColor]">{asset.fmt}</span>
                </div>
                <div className="md:col-span-2 font-display text-[11px] font-bold uppercase tracking-widest text-on-surface-variant md:text-right flex justify-between md:justify-end items-center gap-2">
                  <span className="md:hidden">Downloads:</span> {asset.dl}
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Col: Security Control */}
        <aside className="md:col-span-4 bg-surface flex flex-col relative overflow-y-auto">
          <div className="flex items-center p-stack-md border-b-2 border-primary bg-primary text-white shrink-0 sticky top-0 z-20">
            <Shield size={20} className="mr-3" />
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-widest">Security Control</h2>
          </div>
          
          <div className="p-grid-margin flex flex-col gap-stack-xl flex-1">
            <div>
              <p className="font-display text-[11px] font-bold text-on-surface-variant mb-3 uppercase tracking-widest">Target Assets</p>
              <p className="font-display text-3xl font-bold text-primary uppercase border-b-2 border-primary pb-4 tracking-tight">
                4 Assets Selected
              </p>
            </div>

            <div className="flex flex-col gap-10 border-l-4 border-primary pl-6 py-2">
              <div className="flex items-start justify-between flex-col gap-4">
                <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary">Visual Protection</label>
                
                {/* Brutalist Toggle element built custom */}
                <button 
                  onClick={() => setUseWatermark(!useWatermark)}
                  className={`w-full border-2 border-primary flex items-center justify-between px-4 py-4 transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${useWatermark ? 'bg-primary text-white' : 'bg-surface text-primary'}`}
                >
                  <span className="font-display text-[13px] font-bold uppercase tracking-widest">Apply Watermark</span>
                  <div className="w-12 h-6 relative flex items-center">
                    <div className={`w-full h-[2px] absolute ${useWatermark ? 'bg-white' : 'bg-primary'}`} />
                    <div className={`absolute w-5 h-5 border-2 transition-all duration-300 ${useWatermark ? 'border-white bg-primary left-[calc(100%-20px)]' : 'border-primary bg-surface left-0'}`} />
                  </div>
                </button>

                <p className="font-display text-[11px] font-bold uppercase tracking-widest text-on-surface-variant leading-relaxed">Overlays client IP <br/> and timestamp.</p>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary">Access Horizon</label>
                <div className="relative w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-within:shadow-none focus-within:translate-x-1 focus-within:translate-y-1 transition-all">
                  <select className="w-full appearance-none border-2 border-primary bg-surface text-primary font-display text-[13px] font-bold py-4 pl-4 pr-12 uppercase rounded-none focus:outline-none focus:ring-0 cursor-pointer tracking-widest">
                    <option>24 Hours</option>
                    <option>72 Hours</option>
                    <option>1 Week</option>
                    <option>Never Expire</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 w-12 border-l-2 border-primary flex items-center justify-center pointer-events-none bg-primary text-white">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-grid-margin border-t-2 border-primary bg-surface-container-low shrink-0 pb-16 md:pb-grid-margin">
            <button className="w-full bg-primary text-white font-display text-xl md:text-2xl font-bold uppercase py-6 border-2 border-primary hover:bg-surface hover:text-primary transition-colors duration-200 flex justify-center items-center gap-4 rounded-none shadow-[6px_6px_0px_0px_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none tracking-tight">
              <LinkIcon size={28} />
              Generate Secure Link
            </button>
            <p className="font-display text-[10px] font-bold text-center text-on-surface-variant mt-6 uppercase tracking-widest">
              Action logs to agency ledger
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
