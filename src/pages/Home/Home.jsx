import { useEffect, useState } from "react";
import {Grid, Message} from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchedRecipe, setSearchedRecipe] = useState("");
    const API_KEY = '9ef0af15c34e4ff2b9c193dcd7241a6e';

    useEffect(() => {
        setTimeout(() => {
            getRecipes();
        }, 1000);
    }, []);

    const getRecipes = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
        const data = await api.json();
        setRecipes(data.recipes);
        setIsLoading(false);
    };

    const getSearchedRecipes = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        const data = await api.json();
        setRecipes(data.results);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        setRecipes([]);
        getSearchedRecipes(searchedRecipe);
    };

    return (
        <>
        <Search onChange={(e) => setSearchedRecipe(e.target.value)} value={searchedRecipe} onSubmit={handleSearch}/>
        <Section 
            title="Explore some delicious food" 
        >
        {isLoading ? <Loader /> : (
            <Grid>
                {recipes.map(recipe => (
                    <Card 
                        key={recipe.id} 
                        recipeId={recipe.id} 
                        title={recipe.title} 
                        imgSrc={recipe.image}
                    />
                ))}
            </Grid>
        )}
        </Section>
        {!isLoading && recipes.length === 0 && <Message>Ops, sorry. We can't find a recipe with searched word. Try again!</Message>}
        {!isLoading && recipes.length !== 0 && <Footer />}
        </>
    );
};

export default Home;