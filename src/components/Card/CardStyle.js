import styled from "styled-components";


export const Figure = styled.figure`
    width: 100%;
    height: 245px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 16px;
    transition: all 0.3s;

    @media (min-width: 1024px) {
        height: 230px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
`;

export const Title = styled.h3``;