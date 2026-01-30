import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/SideBar'; // Check case: 'Sidebar' vs 'SideBar' matches your file structure
import CropCard from './components/CropCard';
import CropModal from './components/CropModal';
import cropsData from './data/crops.json'; 
import './App.css';

const App = () => {
  // State Management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState(null); 
  
  // Filtering Logic
  const filteredCrops = cropsData.filter(crop => {
    const searchString = searchTerm.toLowerCase();
    const matchesSearch = 
      crop.common_name?.toLowerCase().includes(searchString) ||
      crop.scientific_name?.toLowerCase().includes(searchString);
    
    const matchesCategory = selectedCategory === 'all' || crop.crop_type === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="flex max-w-400 mx-auto">
        {/* Sidebar */}
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          clearFilters={clearFilters}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          
          {/* Page Title & Controls */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold mb-2">Crop Explorer</h2>
            <p className="text-gray-500 mb-6">Discover the best crops and their perfect companions for your region.</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm text-gray-500 font-medium">
                Showing <span className="text-gray-900 font-bold">{filteredCrops.length}</span> crops
              </span>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'bg-white text-gray-400 border'}`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'bg-white text-gray-400 border'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Crops Grid */}
          {filteredCrops.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredCrops.map(crop => (
                <div key={crop.plant_id} onClick={() => setSelectedCrop(crop)}>
                  <CropCard crop={crop} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed">
              <p className="text-gray-500">No crops found matching your filters.</p>
              <button onClick={clearFilters} className="text-green-600 font-bold mt-2 hover:underline">Clear Filters</button>
            </div>
          )}

          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-50 disabled:opacity-50">
              &lt;
            </button>
            {[1, 2, 3].map(page => (
               <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors
                  ${currentPage === page ? 'bg-green-500 text-white shadow-lg shadow-green-200' : 'text-gray-600 hover:bg-gray-100'}`}
               >
                 {page}
               </button>
            ))}
            <span className="text-gray-400">...</span>
            <button className="w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium">8</button>
            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-50">
              &gt;
            </button>
          </div>
        </main>
      </div>

      {selectedCrop && (
        <CropModal 
          crop={selectedCrop} 
          onClose={() => setSelectedCrop(null)} 
        />
      )}
    </div>
  );
};

export default App;