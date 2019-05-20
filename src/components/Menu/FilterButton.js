import styled from 'styled-components'

const NORMAL_COLOR = '#222'
const NORMAL_TEXT_COLOR = '#999'
const ACTIVE_COLOR = '#369'
const ACTIVE_TEXT_COLOR = '#eee'
const HOVER_COLOR = '#111'
const HOVER_TEXT_COLOR = '#ccc'

export const FilterButton = styled.button`
    padding: 1rem;
    flex: 1;
    border: 0;
    height: 100%;
    outline: none;
    cursor: pointer;
    transition: background-color 150ms;
    background-color: ${ props => props.selected ? ACTIVE_COLOR : NORMAL_COLOR };
    & > svg > path, & > svg > text {
        fill: ${ props => props.selected ? ACTIVE_TEXT_COLOR : NORMAL_TEXT_COLOR }
    }
    &:hover {
        background-color: ${ props => props.selected ? ACTIVE_COLOR : HOVER_COLOR };
        & > svg > path, & > svg > text {
            transition: fill 250ms;
            fill: ${ props => props.selected ? ACTIVE_TEXT_COLOR : HOVER_TEXT_COLOR }
        }
    }
`