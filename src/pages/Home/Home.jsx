import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import {Grid} from '../../lib/style/generalStyles';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

const API_KEY = '3b677ad732404c8b80a78b3c8d686422';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getRecipes();
        }, 2000);
    }, []);

    const getRecipes = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
        const data = await api.json();
        setRecipes(data.recipes);
        setIsLoading(false);
    };

    return (
        <Section>
            {isLoading ? <Loader /> : (
                <Grid>
                    {recipes.map(recipe => (
                        <Card key={recipe.id} recipeId={recipe.id} title={recipe.title} imgSrc={recipe.image}/>
                    ))}
                </Grid>
            )}
        </Section>
    );
};

export default Home;