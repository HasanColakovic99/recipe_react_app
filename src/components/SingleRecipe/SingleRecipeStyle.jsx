import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fonts, colors, breakpoints} from "../../lib/style/theme";

export const SingleRecipe = styled.div`
    text-align: justify;

    @media (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Figure = styled.figure`
    width: 100%;
    height: auto;
    border-radius: 16px;
    overflow: hidden;
    margin: 0;
    margin-bottom: 32px;

    @media (${breakpoints.tablet}) {
        width: 350px;
        height: 350px;
        margin-bottom: 0;
        flex-shrink: 0;
    }

    @media (${breakpoints.desktopLarge}) {        
        width: 450px;
        height: 450px;
    }
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

    @media (${breakpoints.tablet}) {
        padding-left: 48px;
    }

    @media (${breakpoints.desktopLarge}) {
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
    color: ${colors.primary};
`;

export const Text = styled.p`
    font-family: ${fonts.primary};
    font-weight: 300;
    margin: 0;
`;

export const Description = styled.p`
    font-family: ${fonts.primary};
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
    font-family: ${fonts.primary};
    font-weight: 300;
    line-height: 180%;
`;