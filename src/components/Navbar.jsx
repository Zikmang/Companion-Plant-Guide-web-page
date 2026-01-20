const Navbar = ({ links }) => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          
          {links.map((link) => {
            const isActive = link.isActive;
            
            return (
              <a 
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  relative flex h-full items-center whitespace-nowrap border-b-2 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? 'border-emerald-600 text-emerald-700' 
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  } 
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;