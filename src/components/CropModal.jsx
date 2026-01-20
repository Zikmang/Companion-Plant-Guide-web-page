

export default function CropModal({ crop, isOpen, onClose }) {
  if (!isOpen || !crop) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* 1. Backdrop (Blur + Darken) */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Modal Panel (Flex Col = Sticky Header + Scrollable Body) */}
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5">
        
        {/* Sticky Header Bar */}
        <header className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
              {crop.name}
            </h2>
             {/* Subtitle logic ensures layout doesn't jump if missing */}
            {crop.scientificName && (
              <span className="text-xs italic text-slate-500 line-clamp-1">
                {crop.scientificName}
              </span>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="ml-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-rose-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Close details"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto bg-white">
          
          {/* Hero Image */}
          <div className="relative h-64 w-full bg-slate-100 sm:h-72">
            <img 
              src={crop.imageUrl || "/api/placeholder/800/600"} 
              alt={`Detail view of ${crop.name}`}
              className="h-full w-full object-cover"
            />
             {/* Gradient Overlay for visual depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-60" />
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            
            {/* Description */}
            <div className="prose prose-slate prose-sm max-w-none mb-8">
               <p className="text-base leading-relaxed text-slate-600">
                {crop.description}
              </p>
            </div>

            <hr className="my-8 border-slate-100" />

            {/* Dynamic Sections */}
            <div className="space-y-10">
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}