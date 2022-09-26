import { useEffect, useState } from "react";
import {Grid} from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchRecipe, setSearchRecipe] = useState("");
    const API_KEY = '3b677ad732404c8b80a78b3c8d686422';

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
        getSearchedRecipes(searchRecipe);
    };

    return (
        <>
        {/* <form onSubmit={handleSearch}>
            <input 
                type="text"
                onChange={(e) => setSearchRecipe(e.target.value)}
                value={searchRecipe}
            />        
        </form> */}

        <Section 
            title="Explore some delicious food" 
        >
        <Search onChange={(e) => setSearchRecipe(e.target.value)} value={searchRecipe} onSubmit={handleSearch}/>
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
        {!isLoading && <Footer />}
        </>
    );
};

export default Home;