import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const SingleRecipe = styled.div`
    text-align: justify;
    display: flex;
`;

export const Figure = styled.figure`
    width: 450px;
    height: 450px;
    border-radius: 16px;
    overflow: hidden;
    margin: 0;
    flex-shrink: 0;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
        padding-left: 48px;
    }

    @media (min-width: 1300px) {
        padding-left: 64px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #b5927f;
`;

export const Text = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
    margin: 0;
`;

export const Description = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
    line-height: 180%;
    margin-bottom: 0;
`;

export const Ingredients = styled.div`
    margin-top: 25px;
`;

export const List = styled.ul`
    margin-top: 10px;
`;

export const ListItem = styled.li`
    font-family: 'Manrope', sans-serif;
`;