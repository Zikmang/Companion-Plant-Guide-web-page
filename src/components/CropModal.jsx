import React, { useEffect } from 'react';
import { X, Sprout, ArrowRightLeft, Droplets, Sun, CloudRain } from 'lucide-react';
import cropsData from '../data/crops.json'; // Import data to lookup companion images

const CropModal = ({ crop, onClose }) => {
  if (!crop) return null;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getCompanionDetails = (companionEntry) => {
    const fullData = cropsData.find(c => c.plant_id === companionEntry.plant_id);
    return {
      ...fullData, 
      ...companionEntry
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* --- HEADER IMAGE --- */}
        <div className="relative h-64 shrink-0">
          <img 
            src={crop.image.url} 
            alt={crop.image.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="absolute bottom-6 left-6 text-white">
            <div>
                <h2 className="text-4xl font-bold leading-tight">{crop.common_name}</h2>
                <p className="text-green-300 italic text-lg">{crop.scientific_name}</p>
            </div>
            
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Sprout className="text-green-600 w-5 h-5" />
              <h3 className="text-lg font-bold text-gray-900">Overview & Uses</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-600 text-sm leading-relaxed">
              {crop.overview}
              <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500 italic">
                <strong>Note:</strong> {crop.notes}
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Growing Needs</h3>
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100">
                    <CloudRain className="w-5 h-5 mx-auto text-blue-500 mb-1" />
                    <span className="text-xs text-gray-600 block">{crop.growing_conditions.rainfall}</span>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center border border-yellow-100">
                    <Sun className="w-5 h-5 mx-auto text-yellow-500 mb-1" />
                    <span className="text-xs text-gray-600 block">{crop.growing_conditions.sunlight}</span>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg text-center border border-amber-100">
                    <Droplets className="w-5 h-5 mx-auto text-amber-600 mb-1" />
                    <span className="text-xs text-gray-600 block">Loam/Sandy</span>
                </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-green-500 rounded-full" /> {/* Accent bar */}
              <h3 className="text-lg font-bold text-gray-900">Companion Science</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">Scientific reasons why these pairings boost your yield:</p>
            
            <div className="space-y-3">
              {crop.companions.beneficial && crop.companions.beneficial.length > 0 ? (
                crop.companions.beneficial.map((comp) => {
                  const details = getCompanionDetails(comp);
                  if (!details) return null;

                  return (
                    <div key={comp.plant_id} className="flex gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100 items-start">
                      <img 
                        src={details.image?.url || "https://via.placeholder.com/50"} 
                        alt={details.common_name} 
                        className="w-12 h-12 rounded-lg object-cover shadow-sm shrink-0"
                      />

                      <div>
                        <h4 className="font-bold text-green-800 text-sm mb-1">{details.common_name}</h4>
                        <p className="text-xs text-gray-600 leading-snug">
                          {comp.summary || "Great companion for spatial complementarity."}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-4 rounded-xl bg-gray-50 border border-dashed border-gray-300 text-center text-gray-500 text-sm">
                  No specific companion data available yet.
                </div>
              )}
            </div>
          </section>
        </div>

        {/* --- FOOTER --- */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center justify-between mb-3">
             <span className="text-xs text-gray-500 font-medium">Ready to optimize your patch?</span>
             <span className="text-xs font-bold text-gray-900">Check compatibility</span>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200">
            <ArrowRightLeft className="w-4 h-4" />
            Get Crop
          </button>
        </div>

      </div>
    </div>
  );
};

export default CropModal;