import styled from "styled-components";
import {Link} from "react-router-dom";
import {fonts, colors} from "../../lib/style/theme";

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
    background-color: ${colors.overlay};
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
    color: #ffffff;
    z-index: 1;
    font-family: ${fonts.primary};
    font-weight: 400;
    font-size: 19px;
`;