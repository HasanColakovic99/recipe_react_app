import {Figure, Image, Title} from './CardStyle';
import Picture from '../../images/03.jpg';

const Card = () => {
    return (
        <>
            <Figure>
                <Image src={Picture}/>
            </Figure>
        </>
    );
}

export default Card;