import styled from "styled-components";
import {colors, fonts, breakpoints} from "../../lib/style/theme";

export const Section = styled.section`
    padding: 60px 24px;

    @media (${breakpoints.desktop}) {
        padding: 80px 0;
    }
`;

export const SectionInner = styled.div`
    @media (${breakpoints.desktop}) {
        width: 960px;
        margin: 0 auto;
    }

    @media (${breakpoints.desktopLarge}) {
        width: 1260px;
    }
`;

export const Heading = styled.div`
    margin-bottom: 60px;

    @media (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-family: ${fonts.secondary};
    font-size: 26px;
    margin: 0;
    margin-bottom: 32px;

    @media (${breakpoints.tablet}) {
        font-size: 32px;
        margin-bottom: 0;
    }

    @media (${breakpoints.desktop}) {
        font-size: 36px;
    }
`;

export const Button = styled.button`
    all: unset;
    border-radius: 30px;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    font-family: ${fonts.primary};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 15px 60px;

    &:active {
        transform: scale(0.97);
    }

    &:hover {
        background-color: ${colors.primary};
        color: #ffffff;
    }
`;