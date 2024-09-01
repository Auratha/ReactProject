import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeBoxList from "./components/RecipeBoxList";

function App() {
  const [foodName, setFoodName] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  async function getRecipe() {
    const query = foodName;
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodedQuery}&addRecipeInformation=true&addRecipeNutrition=true&number=100`;
    const headers = { "X-Api-Key": "b9c389d820624bf680dd9b38ef09c419" };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setRecipeData(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const handleChange = (event) => {
    setFoodName(event.target.value);
  };

  const searchClick = () => {
    getRecipe();
  };

  return (
    <>
      <SearchBar handleChange={handleChange} searchClick={searchClick} />
      <RecipeBoxList recipeData={recipeData} />
    </>
  );
}

export default App;
