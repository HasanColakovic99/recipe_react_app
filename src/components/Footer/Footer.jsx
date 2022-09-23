import {Footer as FooterWrapper, Text} from "./FooterStyle";
 
const Footer = () => {
    return (
        <FooterWrapper>
            <Text>&copy; {(new Date().getFullYear())} Hasan Čolaković</Text>
        </FooterWrapper>
    );
};

export default Footer;