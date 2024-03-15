import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./GlobalIndex"; // Import the GlobalContext from the file where it's defined

const NavBar = () => {
  const { search, setsearch, handleSubmit, loading, recipeList } =
    useContext(GlobalContext); // Use useContext hook

  console.log(search);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to="/" className="text-black hover:text-gray-700 duration-300">
          FoodRecipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(event) => setsearch(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white p-3 px-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
        <button type="submit">Search</button> {/* Added a submit button */}
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
