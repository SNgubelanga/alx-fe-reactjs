import { useParams, Link } from "react-router-dom";
import Data from "../data.json";
import { useEffect, useState } from "react";

export const RecipeDetail = () => {
  const { id } = useParams();

  const [recipes, setData] = useState([]);

  useEffect(() => {
    const dataUrl = "/src/data.json";

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const recipeData = recipes.find((recipe) => recipe.id == id);

  console.log(recipeData);

  return (
    <>
      {recipeData != null ? (
        <div className="flex items-center flex-col">
          <h4>{recipeData.title}</h4>
          <img
            src={recipeData.image}
            alt=""
            className="rounded-full my-4 w-40 h-40"
          />
          <div className="bg-slate-100 p-10 w-full">
            <p className="text-lg text-center">{recipeData.summary}</p>
          </div>
          <hr />
          <h4 className="uppercase my-4">Cooking Details</h4>
          <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
            <div className="bg-slate-100 p-10 text-center">
              <h3 className="uppercase">Ingredients</h3>
              <p>{recipeData.ingredients}</p>
            </div>
            <div className="bg-slate-100 p-10 text-center">
            <h3 className="uppercase">Instructions</h3>
              <p>{recipeData.instructions}</p>
            </div>
          </div>
          <hr />
          <p className="mt-2">
            Go Back <Link to={"/"}>Home</Link>
          </p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};
