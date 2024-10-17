import './App.css'
import { Route, Routes } from 'react-router-dom'
import RecipeSearch from './pages/RecipeSearch'
import RecipeDetails from './pages/RecipeDetails'
import Favorites from './pages/Favorites'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RecipeSearch />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </>
  )
}

export default App
