import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import {Grid} from '../../lib/style/generalStyles';
import Card from '../../components/Card/Card';

const Home = () => {

    const API_KEY = 'bb5092d242434f589bdb55f592ee2804';
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);


    const getRecipes = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=16`);
        const data = await api.json();
        setRecipes(data.recipes);
    };
    return (
        <Section>
            <Grid>
                {recipes.map(recipe => (
                    <Card key={recipe.id} recipeId={recipe.id} title={recipe.title} imgSrc={recipe.image}/>
                ))}
            </Grid>
        </Section>
    );
};

export default Home;