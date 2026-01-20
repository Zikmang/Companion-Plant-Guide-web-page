const Header = ({ appName, tagLine, logoImg }) => {
  return (
    <header className="relative overflow-hidden bg-emerald-900 text-white shadow-lg">
      
      {/* Decorative background pattern (Optional subtle texture) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          
          {/* Logo Container */}
          <div className="shrink-0">
            {logoImg ? (
              <img 
                src={logoImg} 
                alt={`${appName} Logo`} 
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-emerald-400/50 sm:h-14 sm:w-14"
              />
            ) : (
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-emerald-100 ring-2 ring-emerald-400/50 sm:h-14 sm:w-14">
                <span className="text-2xl font-bold">🌱</span>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {appName}
            </h1>
            {tagLine && (
              <p className="mt-1 text-sm font-medium text-emerald-100/90 sm:text-base">
                {tagLine}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;