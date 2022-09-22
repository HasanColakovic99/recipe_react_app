import styled from 'styled-components';

export const SingleRecipe = styled.div`
    text-align: justify;
    display: flex;
    justify-content: space-between;
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

export const Text = styled.p`
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 180%;

    @media (min-width: 768px) {
        padding-left: 48px;
    }
`;