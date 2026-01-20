const FilterBar = ({ filters, onFilterChange, onClearAll, hasActiveFilters }) => {
  return (
    <aside className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-all">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col space-y-4">

          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Filter Crops
            </h2>
            
            {hasActiveFilters && (
              <button 
                onClick={onClearAll}
                className="text-xs font-medium text-rose-600 hover:text-rose-700 hover:underline transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="space-y-4">
            {filters.map((filter) => (
              <div key={filter.id} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">

                <span className="min-w-20 text-xs font-semibold text-slate-500">
                  {filter.label}:
                </span>

                <div className="flex flex-wrap gap-2">
                  {filter.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => onFilterChange(filter.id, option.value)}
                      type="button"
                      aria-pressed={option.isActive}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 active:scale-95
                        ${option.isActive
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-200'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700'
                        }
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterBar;