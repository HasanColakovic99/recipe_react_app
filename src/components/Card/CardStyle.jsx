import styled from "styled-components";
import {Link} from "react-router-dom";

export const Recipe = styled(Link)`
    position: relative;

    &:hover {
        figure {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.3);
        }

        img {
            transform: scale(1.07);
        }
    }
`;

export const Figure = styled.figure`
    width: 100%;
    height: 245px;
    border-radius: 16px;
    overflow: hidden;
    margin: 0;
    transition: all 0.3s;

    @media (min-width: 1024px) {
        height: 330px;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background-color: #000000ad;
    opacity: 0.57;
    z-index: 1;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-out;
`;

export const Title = styled.h3`
    position: absolute;
    bottom: 0;
    left: 5%;
    color: #fff;
    z-index: 1;
    font-family: 'Manrope', sans-serif;
    font-weight: 300;
    font-size: 18px;
`;