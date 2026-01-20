 export default function CompanionList({companions}) {
    const goodCompanions = companions.filter(c => c.relationship === 'good');
    const badCompanions = companions.filter(c => c.relationship === 'bad');

   return (
     <div className="border-t border-gray-200 pt-6">
       <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Companion Plants
       </h3>
       {goodCompanions.length > 0 && (
        <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Good Companions
            </h4>
             <div className="flex flex-wrap gap-2">
            {goodCompanions.map((companion) => (
              <CompanionBadge 
                key={companion.id} 
                name={companion.name} 
                type="good"
              />
            ))}
          </div>
        </div>
       )}
       
       {badCompanions.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-red-600">✕</span>
            Avoid Planting With
          </h4>
          <div className="flex flex-wrap gap-2">
            {badCompanions.map((companion) => (
              <CompanionBadge 
                key={companion.id} 
                name={companion.name} 
                type="bad"
              />
            ))}
          </div>
        </div>
      )}
     </div>
   )
 }
 