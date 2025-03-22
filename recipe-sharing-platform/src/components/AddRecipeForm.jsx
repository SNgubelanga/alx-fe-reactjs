import { useState } from "react";

export const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");

  // Errors
  const [ingredientsError, setingredientsError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [instructionError, setinstructionError] = useState("");

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (ingredients.trim() === "") {
      setingredientsError("Ingredients field is required.");
    }
    if (steps.trim() === "") {
      setinstructionError("Steps field is required.");
    }
    if (title.trim() === "") {
      setTitleError("Title field is required.");}

    if(title.trim() && ingredients.trim() && steps.trim()){
      alert("Validated.")
    }
  };

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="title">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              onFocus={(e) => setTitleError("")}
              id="title"
              className="shadow appearance-none bg-slate-100 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline focus:shadow-outline"
              placeholder="Pasta"
            />
            <small className="text-red-600">
              <i>{titleError}</i>
            </small>
          </div>
          <div className="mb-5">
            <label htmlFor="image">
              Image <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="shadow appearance-none bg-slate-100 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline focus:shadow-outline"
              placeholder="Pasta"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients">
              Ingredients <span className="text-red-600">*</span>
            </label>
            <textarea
              name="ingredients"
              onChange={(e) => setIngredients(e.target.value)}
              value={ingredients}
              id="ingredients"
              onFocus={(e) => setingredientsError("")}
              placeholder="Write ingredients here.."
              className="shadow appearance-none bg-slate-100 rounded w-full py-2 px-3 text-gray-900"
            ></textarea>
            <small className="text-red-600">
              <i>{ingredientsError}</i>
            </small>
          </div>
          <div className="mb-4">
            <label htmlFor="instructions">
              Steps <span className="text-red-600">*</span>
            </label>
            <textarea
              name="instructions"
              id="instructions"
              value={steps}
              onFocus={(e) => setinstructionError("")}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Write instructions here.."
              className="shadow appearance-none bg-slate-100 rounded w-full py-2 px-3 text-gray-900"
            ></textarea>
            <small className="text-red-600">
              <i>{instructionError}</i>
            </small>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
