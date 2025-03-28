import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export const HomePage = () => {
    const [recipes, setData] = useState([])

    useEffect(()=>{
        const dataUrl = "/src/data.json";

        fetch(dataUrl)
        .then(response=>response.json())
        .then(data=>setData(data))
    ;}, []);

    

    return(
        
        <>
        <div className="grid grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-3 rounded-sm">
        {recipes.map(recipe =>  
        <div key={recipe.id} className="bg-stone-300 border-2 hover:border-fuchsia-300 hover:shadow-xl sm:p-5 sm:my-6 md:p-10 md:my-4">
            <img src={recipe.image} alt={recipe.title} className="w-40 hover:scale-110 transition ease-in-out h-40 mx-auto mb-6 rounded-full border-2 border-fuchsia-300" />
            <h2 className="uppercase sm:text-sm text-center">{recipe.title}</h2>
            <p className="text-center md:text-base sm:text-lg">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`}>Details</Link>
        </div>)}
        </div>
        </>
    )
}