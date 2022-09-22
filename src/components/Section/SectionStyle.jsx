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
    font-family: 'PT Serif', serif;
    font-size: 26px;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 32px;
    }

    @media (min-width: 1024px) {
        font-size: 36px;
    }
`;

export const Button = styled.button`
    all: unset;
    border-radius: 30px;
    border: 2px solid #b5927f;
    color: #a17a69;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 15px 60px;

    &:active {
        transform: scale(0.97);
    }

    &:hover {
        background-color: #b5927f;
        color: #fff;
    }
`;