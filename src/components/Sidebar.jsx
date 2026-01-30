import { LayoutGrid, Carrot, Bean, Wheat, Leaf, Apple } from 'lucide-react';

const Sidebar = ({ selectedCategory, setSelectedCategory, clearFilters }) => {

const categories = [
  { name: 'All Crops', icon: LayoutGrid, id: 'all' },
  { name: 'Tubers', icon: Carrot, id: 'root_tuber' }, 
  { name: 'Legumes', icon: Bean, id: 'legume' },       
  { name: 'Cereals', icon: Wheat, id: 'cereal' },      
  { name: 'Vegetables', icon: Leaf, id: 'vegetable' }, 
  { name: 'Fruits', icon: Apple, id: 'fruit' },        
];

  return (
    <aside className="w-64 shrink-0 bg-white min-h-screen p-6 hidden lg:block border-r">
      
      {/* Category Section */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-900 mb-1">Crop Categories</h3>
        <p className="text-xs text-gray-500 mb-4">Filter by African crop types</p>
        
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                ${selectedCategory === cat.id 
                  ? 'bg-green-50 text-green-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <cat.icon className={`w-4 h-4 ${selectedCategory === cat.id ? 'text-green-600' : 'text-gray-500'}`} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>


      {/* Clear Filters */}
      <button 
        onClick={clearFilters}
        className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span className="rotate-45 text-lg">+</span> Clear All Filters
      </button>
    </aside>
  );
};

export default Sidebar;