import styled from "styled-components";
import {fonts} from "../../lib/style/theme";

export const Form = styled.form``;

export const Input = styled.input`
    all: unset;
    background: linear-gradient(35deg, #b5927f, #8c6b5d);
    padding: 20px 30px;
    border-radius: 15px;
    font-family: ${fonts.primary};
    color: #ffffff;
    
    ::placeholder{
        font-family: ${fonts.primary};
        color: #ffffff;
    }
`;