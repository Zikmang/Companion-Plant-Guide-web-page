const SourceLinks = ({ links }) => {
  // Defensive check: don't render an empty section
  if (!links || links.length === 0) return null;

  return (
    <section className="mt-8 border-t border-slate-100 pt-6">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
        Sources & Further Reading
      </h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <span className="border-b border-transparent group-hover:border-emerald-700">
                {link.title}
              </span>
              {/* External Link Icon: Visual cue that this leaves the app */}
              <svg 
                className="h-3 w-3 text-slate-400 transition-colors group-hover:text-emerald-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SourceLinks;