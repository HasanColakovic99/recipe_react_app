import {Recipe, Overlay, Figure, Image, Title} from './CardStyle';

const Card = ({
    recipeId,
    title,
    imgSrc
}) => {
    return (
        <Recipe to={`/recipe/${recipeId}`}>
            <Figure>
                <Overlay />
                <Image src={imgSrc}/>
            </Figure>
            <Title>{title}</Title>
        </Recipe>
    );
}

export default Card;