export default function Ledger() {
  const data = [
    { date: '2024.10.24', entity: 'Vantage Corp Architecture', amt: '$145,000.00', status: 'PAID' },
    { date: '2024.10.22', entity: 'Studio Form & Space', amt: '$12,500.00', status: 'PENDING' },
    { date: '2024.10.15', entity: 'Apex Dynamics Industrial', amt: '$8,200.00', status: 'OVERDUE' },
    { date: '2024.10.10', entity: 'Lumina LLC Developments', amt: '$250,000.00', status: 'PAID' },
    { date: '2024.10.05', entity: 'Kensington Art Trust', amt: '$45,750.00', status: 'PAID' },
  ];

  return (
    <div className="px-grid-margin py-stack-xl flex flex-col min-h-full max-w-[1400px] mx-auto">
      <div className="mb-stack-lg border-b-2 border-primary pb-8">
        <span className="font-sans text-[11px] font-bold tracking-widest text-on-surface-variant uppercase mb-4 block">
          THE LEDGER
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-[100px] text-primary tracking-tighter uppercase leading-none font-bold">
          CAPITAL FLOW
        </h2>
      </div>

      <div className="w-full border-t-2 border-l-2 border-primary flex flex-col bg-surface mb-stack-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-primary bg-surface-container-low font-sans text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
          <div className="p-stack-md border-r-2 border-primary md:col-span-2 hidden md:block">Date</div>
          <div className="p-stack-md border-r-2 border-primary md:col-span-5">Entity</div>
          <div className="p-stack-md border-r-2 border-primary md:col-span-3 text-right">Amount</div>
          <div className="p-stack-md border-r-2 border-primary md:col-span-2">Status</div>
        </div>

        {data.map((row, i) => {
          const isOverdue = row.status === 'OVERDUE';
          return (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-12 border-b-2 border-primary group hover:bg-surface-container transition-colors relative ${isOverdue ? 'bg-accent-pink/40' : ''}`}>
              <div className="p-stack-md border-r-2 border-primary md:col-span-2 font-display text-[13px] font-bold flex items-center relative z-10 text-primary">
                <span className="md:hidden font-sans text-[10px] font-bold text-on-surface-variant mr-3 tracking-widest">DATE</span> {row.date}
              </div>
              <div className="p-stack-md border-r-2 border-primary md:col-span-5 font-display text-xl md:text-2xl font-bold flex items-center uppercase text-primary tracking-tight transition-transform group-hover:translate-x-2">
                {row.entity}
              </div>
              <div className="p-stack-md border-r-2 border-primary md:col-span-3 font-display text-base md:text-lg font-bold flex items-center justify-end relative z-10 text-primary tracking-wide">
                <span className="md:hidden font-sans text-[10px] font-bold text-on-surface-variant mr-auto tracking-widest">AMT</span> {row.amt}
              </div>
              <div className={`p-stack-md border-r-2 border-primary md:col-span-2 font-sans text-[11px] font-bold tracking-widest flex items-center relative z-10 ${isOverdue ? 'text-secondary' : row.status === 'PENDING' ? 'text-on-surface-variant' : 'text-primary'}`}>
                {isOverdue && <span className="w-2 h-2 bg-secondary rounded-none mr-3 hidden md:block" />}
                <span className="md:hidden font-sans text-[10px] text-on-surface-variant mr-3 tracking-widest">STAT</span> {row.status}
              </div>
            </div>
          )
        })}
      </div>
      <div className="h-20" />
    </div>
  )
}
