import styled from 'styled-components'

export const FloatingLink = styled.a`
    background-color: transparent;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 250ms;
    &:hover {
        opacity: 1;
    }
`