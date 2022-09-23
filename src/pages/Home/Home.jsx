import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import {Grid} from '../../lib/style/generalStyles';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchRecipe, setSearchRecipe] = useState("");
    const API_KEY = '3b677ad732404c8b80a78b3c8d686422';

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

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setSearchRecipe(event.target.value);
    }

    return (
        <>        
        <Section title="Explore some delicious food" placeholder="Search..." onChange={handleSearch}>
            {isLoading ? <Loader /> : (
                <Grid>
                    {recipes.filter(recipe => {
                        if(recipe.title.toLowerCase().includes(searchRecipe.toLowerCase())){
                            return recipe;
                        }
                        else {
                            return recipe;
                        }
                    }).map(recipe => (
                        <Card key={recipe.id} recipeId={recipe.id} title={recipe.title} imgSrc={recipe.image}/>
                    ))}
                </Grid>
            )}
        </Section>
        </>
    );
};

export default Home;