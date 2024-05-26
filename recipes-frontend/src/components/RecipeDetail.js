import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/api/recipes/${recipeId}/`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error(error));
    }, [recipeId]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;