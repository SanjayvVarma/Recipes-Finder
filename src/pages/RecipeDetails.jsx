import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    const fetchRecipeDetails = async (id) => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
            );

            const data = await response.json();
            setRecipe(data);
        } catch (error) {
            setError('Failed to load recipe details.', error);
        }
    };

    useEffect(() => {
        fetchRecipeDetails(id);
    }, [id]);

    const saveToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorited = favorites.some((favRecipe) => favRecipe.id === recipe.id);

        if (isAlreadyFavorited) {
            alert('Recipe is already in your favorites.');
        } else {
            favorites.push(recipe);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Recipe added to favorites!');
        }
    };

    return (
        <div className="favorite-container">
            <div>
                <h1>Recipe Details : </h1>
            </div>
            {recipe ? (
                <div className='favo-list'>
                    <div>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div>
                        <button className='save-btn' onClick={saveToFavorites}>Save &#x2764;</button>
                        <h2>{recipe.title}</h2>
                        <h3>Ingredients</h3>
                        <ul>
                            {recipe.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                        <h3>Instructions</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecipeDetails;
