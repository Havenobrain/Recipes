import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';

const RecipeList = () => {
    const { categoryId } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/categories/${categoryId}/`)
            .then(response => setRecipes(response.data.recipes))
            .catch(error => console.error(error));
    }, [categoryId]);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;