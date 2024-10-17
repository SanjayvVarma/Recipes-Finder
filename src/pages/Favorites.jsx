import React, { useState, useEffect } from 'react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = (indexToRemove) => {
        const updatedFavorites = favorites.filter((_, index) => index !== indexToRemove);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className='favorite-container'>
            <div>
                <h1>Your Favorite Recipes</h1>
            </div>
            <div>

                {
                    favorites.length > 0 ? (
                        <div>
                            {
                                favorites.map((recipe, index) => (
                                    <div className='favo-list' key={index}>
                                        <div>
                                            <img src={recipe.image} alt={recipe.title} />
                                        </div>
                                        <div>
                                            <button className='save-btn' onClick={() => removeFavorite(index)}>Remove &#x2764;</button>
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
                                ))
                            }
                        </div>
                    ) : (
                        <p>No favorite recipes saved.</p>
                    )
                }
            </div>
        </div>
    );
};

export default Favorites;
