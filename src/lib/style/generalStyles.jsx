import styled from "styled-components";
import {fonts, breakpoints} from "./theme";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (${breakpoints.tabletSmall}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }
`;

export const Message = styled.p`
    text-align: center;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 300;
    color: #bf3939;

    @media (${breakpoints.tablet}) {
        font-size: 22px;
    }

    @media (${breakpoints.desktop}) {
        font-size: 26px;
    }
`;

