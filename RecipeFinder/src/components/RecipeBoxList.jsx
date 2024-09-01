const RecipeBoxList = ({ recipeData = null }) => {
  let data = [];
  if (recipeData !== null) {
    data = recipeData.results;
  }

  if (recipeData === null) {
    return (
      <p className="text-lg text-center font-bold">Search some recipes...</p>
    );
  }

  return (
    <>
      <div className="flex flex-wrap px-4 gap-4 ">
        {recipeData !== null &&
          data.map((item, index) => {
            return (
              <div key={index} className="w-[30%] p-4 bg-gray-200 rounded-xl">
                <img className="w-[80%] mx-auto rounded-xl" src={item.image} />
                <h1 className="my-4  text-center text-lg font-bold">
                  {item.title}
                </h1>
                <ul className="list-disc list-inside">
                  {item.nutrition.ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient.name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RecipeBoxList;
