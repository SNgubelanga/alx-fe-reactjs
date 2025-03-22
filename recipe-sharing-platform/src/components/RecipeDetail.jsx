import { useParams, Link } from "react-router-dom";
import Data from "../data.json";

export const RecipeDetail = () =>{
    const {id} = useParams();
    const recipeData = Data.find(recipe => recipe.id == id);

    return (
        <>
           <h4>{recipeData.title}</h4>
           <div className="flex items-center flex-col">
            <img src={recipeData.image} alt="" className="rounded-full my-4 w-40 h-40" />
            <div className="bg-slate-100 p-10">
                <p className="text-lg text-center">{recipeData.summary}</p>
            </div>
            <hr />
            <p className="mt-2">Go Back <Link to={"/"}>Home</Link></p>
           </div>
        </>
    )
}