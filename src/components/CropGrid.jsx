export default function CropGrid({ crops, onCropClick, isLoading, isEmpty }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Render loading skeletons - delegated to parent */}
        </div>
      ) : isEmpty ? (
        <div className="flex justify-center">
          {/* Render empty state - delegated to parent */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {crops.map((crop) => (
            <div key={crop.id} onClick={() => onCropClick(crop)}>
              {/* CropCard component will be rendered here by parent */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}