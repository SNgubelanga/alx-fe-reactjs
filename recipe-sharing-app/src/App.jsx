import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import SearchBar from './components/SearchBar.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import RecommendationsList from './components/RecommendationsList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      </div>
      <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
      </div>
      </Router>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
