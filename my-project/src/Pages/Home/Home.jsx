import React, { useContext } from "react";
import { GlobalContext } from "../../components/GlobalIndex";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">No recipes found.</div>
      )}
    </div>
  );
};

export default Home;
