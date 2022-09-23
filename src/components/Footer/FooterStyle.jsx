import styled from "styled-components";
import { fonts } from "../../lib/style/theme";

export const Footer = styled.footer`
    position: absolute;
    left: 0;
    width: 100vw;
    height: 70px;
    background: linear-gradient(35deg, #b5927f, #8c6b5d);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    font-family: ${fonts.primary};
    font-weight: 400;
    color: #ffffff;
`;
