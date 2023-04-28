import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './RecipeProduct.scss';


/**
 * Section with the recipe card
 */
const RecipeProduct = ({name}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://antoineperal-server.eddi.cloud/recipe');
                setRecipes(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des recettes : ' , error);
            }
        };
        fetchData();
    }, []);

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredient.some(ingredient => ingredient.label === name)
    );
    

    return (
        <div className='recipe'>
            <h2 className='recipe__title'>Liste des recettes</h2>
            <ul>
                {filteredRecipes.map((recipe, index) => (
                    <li key={index}>
                        <img src={`http://antoineperal-server.eddi.cloud${recipe.picture}`}></img>
                        <h3>{recipe.label}</h3>
                        <p>Difficulté: {recipe.difficulty}</p>
                        <p>Temps de préparation: {recipe.time}</p>
                        <a href='/'></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Props validation
RecipeProduct.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RecipeProduct;
