import CropCard from "./components/CropCard"
import CropModal from "./components/CropModal"
import FilterBar from "./components/FilterBar"
import './App.css'

const App = () => {
  return (
    <div className="p-10">
        <FilterBar />
      <CropModal />
    </div>
  )
}

export default App
