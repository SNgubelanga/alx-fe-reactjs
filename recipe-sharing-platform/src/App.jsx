import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './components/HomePage';
import { RecipeDetail } from './components/RecipeDetail';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { AddRecipeForm } from './components/AddRecipeForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='mb-3 uppercase'>Recipe Sharing Platform</h2>
    <hr className='mb-3'/>
    <div>
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/new-recipe"}>New Recipe</Link> */}
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-recipe" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
