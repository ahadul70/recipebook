import { createContext, useState } from "react";
import React from "react";

export const GlobalContext = createContext(null);
const GlobalIndex = ({ children }) => {
  const [search, setsearch] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setloading] = useState(false);
  const [recipeDetailsData,setrecipeDetailsData]=useState(null)

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setloading(false);
        setsearch("");
      }
    } catch (error) {
      console.log(error);
      setloading(false);
      setsearch("");
    }
  }
  console.log(loading,recipeList);
  return (
    <GlobalContext.Provider
      value={{
        search,
        setsearch,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
     setrecipeDetailsData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalIndex;
