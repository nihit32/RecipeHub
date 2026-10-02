import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import RecipeForm from './Component/RecipeForm'
import RecipeCard from './Component/RecipeCard'





const App = () => {
    const [recipeData, setRecipeData] = useState([])
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <div className='flex'>
      <RecipeForm recipeData={recipeData} setRecipeData={setRecipeData}/>

      <div className='flex flex-wrap'>
         {recipeData.map((recipe,idx)=>(
           <RecipeCard key={idx} recipe={recipe} />
       ))}
      </div>
      
      </div>
    </div>
  )
}

export default App
