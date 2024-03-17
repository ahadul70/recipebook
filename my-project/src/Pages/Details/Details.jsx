import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalIndex, { GlobalContext } from "../../components/GlobalIndex";

const Details = () => {
  const params = useParams();
  console.log(params);
  const { recipeDetailsData, setrecipeDetailsData } = useContext(GlobalContext);
  return <div>Details</div>;
};

export default Details;
