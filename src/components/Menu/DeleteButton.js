import React from 'react'
import styled from 'styled-components'
import { Delete as DeleteIcon } from '../Icons'
import { Tooltip } from '../Tooltip'

const DeleteButtonContainer = styled.button`
    border: 0;
    width: 4rem;
    outline: none;
    cursor: pointer;
    height: 100%;
    transition: background-color 150ms;
    background-color: #933;
    &:hover {
        background-color: #a33;
    }
    ${
        props => props.active ? `
            opacity: 1.0;
            pointer-events: auto;
        ` : `
            opacity: 0.5;
            pointer-events: none;
        `
    }
`

export const DeleteButton = ({ clickHandler, active = true }) => {
    return (
        <Tooltip text="Clear Pattern" placement="left">
            <DeleteButtonContainer onClick={ clickHandler } aria-label="Clear search pattern" active={ active }>
                <DeleteIcon size="28" fill="#fff" />
            </DeleteButtonContainer>
        </Tooltip>
    )
}