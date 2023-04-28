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
            <ul className='recipe__list'>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe, index) => (
                        <li className='recipe__list-card' key={index}>
                            <img className='recipe__list-card-img' src={`http://antoineperal-server.eddi.cloud${recipe.picture}`}></img>
                            <h3 className='recipe__list-card-title' >{recipe.label}</h3>
                            <p className='recipe__list-card-difficulty' >Difficulté: {recipe.difficulty}</p>
                            <p className='recipe__list-card-time' >Temps de préparation: {recipe.time}</p>
                            <a className='recipe__list-card-link' href='/'>La recette c&apos;est par ici</a>
                        </li>
                    ))
                ) : (
                    <p className='recipe__not-exist' >Il n&apos;y a pas encore de recettes pour ce produit !</p>
                    
                )}
            </ul>
        </div>
    );
};

// Props validation
RecipeProduct.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RecipeProduct;
