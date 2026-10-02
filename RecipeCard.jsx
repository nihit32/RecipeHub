
function RecipeCard({recipe}) {
  return (
    <div className="flex flex-wrap">
    <div className="w-full bg-gray-100 flex flex-wrap">
        <div className=" h-105 w-74 mt-20 ml-20 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

      {/* Image Section */}
      <div className="relative">
        <img
          src={recipe.img}
          alt="Recipe"
          className="w-full h-52 object-cover"
        />

        {/* Price */}
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full font-semibold text-gray-800 shadow">
          Rs {recipe.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Recipe Name + Rating */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            {recipe.recipe_name}
          </h2>

          <span className="flex items-center gap-1 text-sm font-medium whitespace-nowrap">
            ⭐ 4.8
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {recipe.desc}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">

          {/* Chef */}
          <span className="text-sm text-gray-600">
            <i className="ri-user-fill"></i> {recipe.chef_name}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Edit */}
            <button
              className="w-9 h-9 flex items-center justify-center
                         rounded-full bg-gray-100 hover:bg-gray-200
                         text-gray-600 transition"
              title="Edit"
            >
              <i className="ri-pencil-line"></i>
            </button>

            {/* Delete */}
            <button
              className="w-9 h-9 flex items-center justify-center
                         rounded-full bg-gray-100 hover:bg-red-100
                         text-gray-600 hover:text-red-500 transition"
              title="Delete"
            >
              <i className="ri-delete-bin-line"></i>
            </button>

            {/* Add to Cart */}
            <button
              className="bg-orange-500 hover:bg-orange-600
                         text-white px-4 py-2 rounded-full
                         text-sm font-semibold transition"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>
        </div>
    </div>
    </div>
    
  );
}

export default RecipeCard;
