const GrowingConditions = ({ sun, water, soilPh, spacing, temperature }) => {
  
  const getIcon = (type) => {
    switch (type) {
      case 'sun':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        );
      case 'water':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        );
      case 'ph':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        );
      case 'spacing':
        return (
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        );
      case 'temp':
        return (
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2 6 6 0 00-6 6h8zm0 0v-6a2 2 0 012-2 6 6 0 016 6h-8zm0-6V4a2 2 0 10-4 0v9h4z" />
        );
      default:
        return null;
    }
  };

  const MetricCard = ({ label, value, iconType, colorClass }) => {
    
    if (!value) return null;

    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4 text-center ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-sm">
        <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ${colorClass}`}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {getIcon(iconType)}
          </svg>
        </div>
        <span className="text-sm font-bold text-slate-800">{value}</span>
        <span className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span>
      </div>
    );
  };

  return (
    <section>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
        Requirements
      </h3>
      
      {/* Grid Layout Logic:
        - Mobile: 2 columns (scannable square tiles)
        - Desktop: 4 columns (linear dashboard)
      */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        
        <MetricCard 
          label="Sun Exposure" 
          value={sun} 
          iconType="sun" 
          colorClass="text-amber-500 ring-amber-100" 
        />
        
        <MetricCard 
          label="Watering" 
          value={water} 
          iconType="water" 
          colorClass="text-blue-500 ring-blue-100" 
        />
        
        <MetricCard 
          label="Soil pH" 
          value={soilPh} 
          iconType="ph" 
          colorClass="text-emerald-500 ring-emerald-100" 
        />
        
        <MetricCard 
          label="Spacing" 
          value={spacing} 
          iconType="spacing" 
          colorClass="text-purple-500 ring-purple-100" 
        />
        
        {/* Optional: Add Temperature if your data supports it */}
         {temperature && (
          <MetricCard 
            label="Temperature" 
            value={temperature} 
            iconType="temp" 
            colorClass="text-rose-500 ring-rose-100" 
          />
         )}

      </div>
    </section>
  );
};

export default GrowingConditions;