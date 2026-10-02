import { useState } from "react";

function RecipeForm({recipeData, setRecipeData}) {

  const [recipe,setRecipe] = useState({
      recipe_name: "Panner",
      chef_name: "Nihit",
      price:"320",
      prep_time:"20",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRO9423culvRaDaBBr4Rf0SOpclL3L0s94fC8C-_X5g&s=10",
      desc:"Paneer butter masala is a rich, creamy, and mildly spiced North Indian curry made with soft paneer cubes simmered in a velvety tomato-and-butter sauce"

  })


 const handelSubmit = (e) => {
     e.preventDefault();
     setRecipeData([...recipeData, recipe])
     setRecipe({
       recipe_name: "",
      chef_name: "",
      price:"",
      prep_time:"",
      img:"",
      desc:""
     })
  }
  const handelChange = (e)=>{
    setRecipe({...recipe, [e.target.name]: e.target.value})    
  }
 
  

  return (
    <form onSubmit={handelSubmit} className="h-165 bg-gray-100 flex items-center p-10">

      <div className=" ` bg-white rounded-xl shadow-md p-5">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Add New Recipe
        </h1>

        {/* Recipe Name */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Recipe Name
          </label>

          <input
          onChange={handelChange}
          value={recipe.recipe_name}
          required
          name="recipe_name"
            type="text"
            placeholder="Enter recipe name"
            className="w-full h-9 px-3 bg-gray-300 rounded-lg outline-none"
          />
        </div>

        {/* Chef Name */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Chef Name
          </label>

          <input
            onChange={handelChange}
            required
            value={recipe.chef_name}
            name="chef_name"
            type="text"
            placeholder="Enter chef name"
            className="w-full h-9 px-3 bg-gray-300 rounded-lg outline-none"
          />
        </div>

        {/* Price + Prep Time */}
        <div className="flex gap-4 mb-3">

          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Price
            </label>

            <input
            onChange={handelChange}
            required
             value={recipe.price}
            name="price"
              type="number"
              placeholder="Enter price"
              className="w-full h-9 px-3 bg-gray-300 rounded-lg outline-none"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Prep Time
            </label>

            <input
            onChange={handelChange}
            required
             value={recipe.prep_time}
              name="prep_time"
              type="text"
              placeholder="e.g. 30 minutes"
              className="w-full h-9 px-3 bg-gray-300 rounded-lg outline-none"
            />
          </div>

        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Image
          </label>

          <input
          onChange={handelChange}
           required
            value={recipe.img}
          name="img"
            type="text"
            placeholder="Enter image URL"
            className="w-full h-9 px-3 bg-gray-300 rounded-lg outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Description
          </label>

          <textarea
          required
          onChange={handelChange}
           value={recipe.desc}
          name="desc"
            rows="2"
            placeholder="Enter recipe description"
            className="w-full px-3 py-2 bg-gray-300 rounded-lg outline-none resize-none"
          />
        </div>

        {/* Button */}
        <button type="submit" className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
          Create Recipe
        </button>

      </div>
    </form>
  );
}

export default RecipeForm;