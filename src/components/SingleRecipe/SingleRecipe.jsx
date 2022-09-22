import {SingleRecipe as SingleRecipeWrapper, Figure, Image, Data, Icon, Content, Text, Description, Ingredients, List, ListItem} from './SingleRecipeStyle';
import {faStopwatch, faUser, faSackDollar} from '@fortawesome/free-solid-svg-icons';

const SingleRecipe = ({
    imgSrc,
    readyInMinutes,
    servings,
    price,
    description
}) => {
    return(
        <SingleRecipeWrapper>
            <Figure>
                <Image src={imgSrc} />
            </Figure>

            <Data>
                <Content>
                    <Icon icon={faStopwatch}/>
                    <Text>{readyInMinutes} minutes</Text>
                </Content>

                <Content>
                    <Icon icon={faUser}/>
                    <Text>{servings} osobe</Text>
                </Content>


                <Content>
                    <Icon icon={faSackDollar}/>
                    <Text>{price} dolara</Text>  
                </Content>

                <Description>{description}</Description>
            </Data>
            
        </SingleRecipeWrapper>
    );
}

export default SingleRecipe;