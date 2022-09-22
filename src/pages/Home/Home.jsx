import sir from '../../images/sirnica.webp';
import meso from '../../images/burek.jpg';
import krompir from '../../images/krompiruša.webp';
import zelje from '../../images/zeljanica.jpg';
import vrilica from '../../images/vrilica.jpg';
import kupusnjaca from '../../images/kupusnjaca.webp';



import Section from "../../components/Section/Section";
import {Grid} from '../../lib/style/generalStyles';
import Card from '../../components/Card/Card';
import { useEffect, useState } from "react";
import SingleRecipe from '../../components/SingleRecipe/SingleRecipe';

const Home = () => {

    const API_KEY = '9ef0af15c34e4ff2b9c193dcd7241a6e';
    const [recipes, setRecipes] = useState([{id: 1, name: 'Sirnica', imgSrc:sir},{id: 2, name: 'Burek', imgSrc:meso},{id: 3, name: 'Zeljanica', imgSrc:zelje},{id: 4, name: 'Vrilica', imgSrc:vrilica},{id: 5, name: 'Krompiruša', imgSrc:krompir}, {id: 6, name: 'Kupusnjača', imgSrc:kupusnjaca}]);

    // useEffect(async () => {
    //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`);
    //     const data = await api.json();
    //     console.log(data);
    // }, []);


    return (
        <Section>
            <Grid>
                {recipes.map(recipe => (
                    <Card key={recipe.id} recipeId={recipe.id} title={recipe.name} imgSrc={recipe.imgSrc}/>
                ))}
            </Grid>
        </Section>
    );
};

export default Home;