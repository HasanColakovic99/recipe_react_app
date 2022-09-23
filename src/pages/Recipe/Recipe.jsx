import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe } from "../../api/getRecipe";
import Loader from "../../components/Loader/Loader";
import Section from "../../components/Section/Section";
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";

const Recipe = () => {
    
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRecipe(id)
        .then(res => {
            setRecipe(res);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [id]);


    const handleButton = () => {
        navigate(-1);
    };

    return (
        <>
            {recipe &&
                <Section title={recipe.title} buttonText={'Back'} handleButton={handleButton}>
                    {isLoading ? <Loader /> : 
                        <SingleRecipe imgSrc={recipe.image} readyInMinutes={recipe.readyInMinutes} servings={recipe.servings} price={recipe.pricePerServing} description={recipe.summary.replace(/<\/?[^>]+(>|$)/g, '')} ingredients={recipe.extendedIngredients}/>
                    }
                </Section>
            }
        </>
    );
}

export default Recipe;