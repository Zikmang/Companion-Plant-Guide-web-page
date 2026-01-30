import React from 'react';
import { Carrot, Sprout, Coins, Wheat, Leaf, Apple } from 'lucide-react';
import cropsData from '../data/crops.json'; 

const CropCard = ({ crop }) => {
  
  // Helper to find companion image and name by ID
  const getCompanionDetails = (companionId) => {
    const companion = cropsData.find(c => c.plant_id === companionId);
    return companion ? { 
      name: companion.common_name, 
      image: companion.image.url 
    } : null;
  };

  const categoryIcons = {
    cereal: Wheat,
    root_tuber: Carrot,
    fruit: Apple,
    vegetable: Leaf,
    legume: Sprout,
    cash_crops: Coins, 
    default: Sprout
  }

  const IconComponent = categoryIcons[crop.crop_type] || categoryIcons.default;

  const beneficialCompanions = crop.companions?.beneficial?.slice(0, 3) || [];

  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <img 
        src={crop.image.url} 
        alt={crop.image.alt} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-none"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
    
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 p-6">
        
        <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-start transition-transform duration-500 ease-in-out transla
        te-y-70 group-hover:translate-y-0">
          
          <div>
            <h3 className="text-white text-3xl font-bold leading-tight mb-1 drop-shadow-md">
                {crop.common_name}
            </h3>
            <p className="text-green-400 font-medium italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {crop.scientific_name}
            </p>
          </div>

          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 shrink-0">
             <IconComponent className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
        </div>
          

        <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
          
          <h4 className="text-gray-300 text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b border-white/20 pb-2">
            Good Companions
          </h4>

          <div className="flex items-start gap-4">
            {beneficialCompanions.length > 0 ? (
              beneficialCompanions.map((comp) => {
                const details = getCompanionDetails(comp.plant_id);
                if (!details) return null;

                return (
                  <div key={comp.plant_id} className="flex flex-col items-center gap-2 group/item">
                    
                    <div className="w-14 h-14 rounded-full p-0.5 border border-green-400/50 overflow-hidden bg-black/20">
                      <img 
                        src={details.image} 
                        alt={details.name} 
                        className="w-full h-full object-cover rounded-full group-hover/item:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    {/* Name */}
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider text-center shadow-black drop-shadow-md">
                      {details.name}
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-400 text-sm italic">No specific companions listed.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CropCard;