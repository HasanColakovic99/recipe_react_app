import sir from '../../images/sirnica.webp';
import meso from '../../images/burek.jpg';
import krompir from '../../images/krompiruša.webp';
import zelje from '../../images/zeljanica.jpg';
import vrilica from '../../images/vrilica.jpg';
import kupusnjaca from '../../images/kupusnjaca.webp';


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";

const Recipe = () => {
    
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();
    const [recipes, setRecipes] = useState([{id: 1, name: 'Sirnica', imgSrc:sir},{id: 2, name: 'Burek', imgSrc:meso},{id: 3, name: 'Zeljanica', imgSrc:zelje},{id: 4, name: 'Vrilica', imgSrc:vrilica},{id: 5, name: 'Krompiruša', imgSrc:krompir}, {id: 6, name: 'Kupusnjača', imgSrc:kupusnjaca}]);

    useEffect(()=>{
        recipes && setRecipe(...recipes.filter(recipe => recipe.id === parseInt(id)));
    }, [recipes, id]);


    return (
        <Section>
            {recipe && 
                <SingleRecipe imgSrc={recipe.imgSrc}/>
            }
        </Section>
    );
}

export default Recipe;