import {Section as SectionWrapper, SectionInner, Heading, Title, Button} from "./SectionStyle";
import Search from "../Search/Search";

const Section = ({
    title,
    buttonText,
    handleButton,
    placeholder,
    onChange,
    children,
}) => {
    return (
        <SectionWrapper>
            <SectionInner>
                <Heading>
                    <Title>{title}</Title>
                    {buttonText && <Button onClick={handleButton}>{buttonText}</Button>}
                    {placeholder && <Search placeholder={placeholder} onChange={onChange}/>}
                </Heading>
                {children}
            </SectionInner>
        </SectionWrapper>
    );
};

export default Section;