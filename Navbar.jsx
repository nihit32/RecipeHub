const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-white shadow-sm flex justify-between items-center px-6">

      {/* Left - Logo */}
       <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl text-orange-700"><i className="ri-restaurant-2-line"></i></span>

          <h1 className="text-2xl font-bold text-orange-700">
            RecipeHub
          </h1>
        </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">

          <input
           
            type="text"
            placeholder="Search recipes..."
            className=" bg-gray-100 ml-20 w-full h-10 pl-10 pr-4 border border-gray-300 rounded-full 
                       outline-none focus:border-orange-500"
          />

          <span className=" ml-19 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <i className="ri-search-line"></i>
          </span>

        </div>
      </div>

      {/* Right - Cart + Profile */}
      <div className="w-1/4 flex items-center justify-end gap-5">

        {/* Cart */}
        <button className="text-2xl hover:text-orange-500 transition cursor-pointer">
          <i className="ri-shopping-cart-line"></i>
        </button>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover border-2 border-orange-400"
        />

      </div>

    </nav>
  );
};

export default Navbar;