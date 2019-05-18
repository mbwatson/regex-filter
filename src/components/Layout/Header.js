import styled from 'styled-components'

export const Header = styled.header`
    background-color: #ccc;
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`