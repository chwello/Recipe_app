import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeData = () => {
  const APP_ID = "5f4c08bf";
  const APP_KEY = "a5df062c274c994dcd3f60a5a36a9376";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("assorted");
  

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={getSearch}>
      
    <p className=''>cate</p>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      
        
        
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <Recipe
            key={`${recipe.recipe.label}-${index}`}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            description={recipe.recipe.description}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeData;
