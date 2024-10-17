import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const searchRecipes = async (query) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`);

            const data = await response.json();
            if (data.results.length === 0) {
                setError('No recipes found.');
                setRecipes([]);
            } else {
                setError(null);
                setRecipes(data.results);
            }
        } catch (error) {
            setError('Failed to fetch recipes. Please try again.');
        }
    };

    const fetchDefaultRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`);

            const data = await response.json();
            console.log(data);


            if (data.recipes.length === 0) {
                setRecipes([]);
            } else {
                setRecipes(data.recipes);
            }

        } catch (error) {
            setError('Failed to load default recipes.');
        }
    };

    useEffect(() => {
        // fetchDefaultRecipes();
    }, []);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            searchRecipes(e.target.value);
        }
    };

    return (
        <div className='main-container'>
            <div className='header'>
                <h1>RecipeFinder</h1>
                <div><Link className='link' to="/favorites">&#x2764;</Link></div>
            </div>
            <div className='input-box'>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for recipes..."
                />
            </div>
            <div className='error-container'>
                {
                    query && <strong>Recipe List For '{query}'</strong>
                }
                {
                    error && <strong>{error}</strong>
                }
            </div>
            <div className="recipe-list">
                {
                    recipes.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default RecipeSearch;

