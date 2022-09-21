import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    overflow: hidden;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 48px;
    }
`;

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
`;

