import styled from 'styled-components'

export const RegexInputContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #222;
    &::before, &::after {
        content: "/";
        padding: 1rem;
        top: 0;
        height: 100%;
        color: #666;
        font-size: 200%
        z-index: 2;
        position: absolute;
    }
    &::before {
        left: 0;
    }
    &::after {
        right: 0;
    }
`
