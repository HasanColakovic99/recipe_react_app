import styled from "styled-components";
import {fonts ,breakpoints} from "../../lib/style/theme";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 70px;
`;

export const Input = styled.input`
    all: unset;
    background: linear-gradient(35deg, #b5927f, #8c6b5d);
    padding: 20px 30px;
    border-radius: 15px;
    font-family: ${fonts.primary};
    color: #ffffff;
    width: 70%;
    
    ::placeholder{
        font-family: ${fonts.primary};
        color: #ffffff;
    }
    
    @media (${breakpoints.desktop}) {
        width: 40%;
    }
`;