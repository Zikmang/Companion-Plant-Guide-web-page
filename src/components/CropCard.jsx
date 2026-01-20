export default function CropCard({crop, onClick}) {
  return (
    <button
      onClick={onClick}
      className="
        group w-full text-left bg-white rounded-lg border border-gray-200 
        overflow-hidden hover:shadow-lg hover:border-green-500 
        transition-all duration-200 focus:ring-2 focus:ring-green-500
      "
    >
      <div className="aspect-w-4 aspect-h-3 bg-gray-100">
        <img 
          src={crop.imageUrl} 
          alt={`Photo of ${crop.name}`} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1">
          {crop.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          {crop.category}
        </p>
        <p className="text-xs text-green-700 font-meduim">
          {crop.companionCount} companion{crop.companionCount !==1 ? 's' : ''}
        </p>
      </div>
    </button>
  )
}
