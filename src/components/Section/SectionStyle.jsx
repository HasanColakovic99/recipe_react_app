import styled from 'styled-components';

export const Section = styled.section`
    padding: 60px 24px;

    @media (min-width: 1024px) {
        padding: 120px 0;
    }
`;

export const SectionInner = styled.div`
    @media (min-width: 1024px) {
        width: 960px;
        margin: 0 auto;
    }

    @media (min-width: 1300px) {
        width: 1260px;
    }
`;

export const Heading = styled.div`
    margin-bottom: 60px;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 0;
    }

    @media (min-width: 1024px) {
        font-size: 36px;
    }
`;