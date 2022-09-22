import {Section as SectionWrapper, SectionInner, Heading, Title, Button} from './SectionStyle';

const Section = ({
    title,
    buttonText,
    handleButton,
    children,
}) => {
    return (
        <SectionWrapper>
            <SectionInner>
                <Heading>
                    <Title>{title}</Title>
                    {buttonText && <Button onClick={handleButton}>{buttonText}</Button>}
                </Heading>
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;