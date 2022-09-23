import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";

const Recipe = () => {
    
    let navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    let {id} = useParams();

    const API_KEY = 'bb5092d242434f589bdb55f592ee2804';

    useEffect(() => {
        setTimeout(
            getRecipe(), 2000
        );
    }, [id]);

    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const data = await api.json();
        setRecipe(data);
    };

    const handleButton = () => {
        navigate(-1);
    };

    return (
        <>
            {recipe &&
                <Section title={recipe.title} buttonText={'Back'} handleButton={handleButton}>
                    <SingleRecipe imgSrc={recipe.image} readyInMinutes={recipe.readyInMinutes} servings={recipe.servings} price={recipe.pricePerServing} description={recipe.summary.replace(/<\/?[^>]+(>|$)/g, '')} ingredients={recipe.extendedIngredients}/>
                </Section>
            }
        </>
    );
}

export default Recipe;