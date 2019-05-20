import React, { useState } from 'react'
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
`

export const DeleteButton = ({ clickHandler }) => {
    return (
        <Tooltip text="Delete Pattern" placement="left">
            <DeleteButtonContainer onClick={ clickHandler } aria-label="Delete search pattern">
                <DeleteIcon size="28" fill="#fff" />
            </DeleteButtonContainer>
        </Tooltip>
    )
}