import {Section as SectionWrapper, SectionInner, Heading, Title} from './SectionStyle';

const Section = ({
    title,
    children,
}) => {
    return (
        <SectionWrapper>
            <SectionInner>
                <Heading>
                    <Title>Food</Title>
                </Heading>
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;