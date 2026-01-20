export default function CompanionBadge({ name, type, onClick }) {
  const isGood = type === 'good';
  
  const Component = onClick ? 'button' : 'span';
  
  return (
    <Component
      onClick={onClick}
      className={`
        inline-block px-3 py-1.5 rounded-full text-sm font-medium
        ${isGood 
          ? 'bg-green-100 text-green-800 border border-green-200' 
          : 'bg-red-100 text-red-800 border border-red-200'
        }
        ${onClick ? 'hover:opacity-80 cursor-pointer transition-opacity' : ''}
      `}
    >
      {name}
    </Component>
  );
}