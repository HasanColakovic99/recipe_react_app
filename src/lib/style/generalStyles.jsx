import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }
`;

