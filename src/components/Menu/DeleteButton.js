import React, { useState } from 'react'
import styled from 'styled-components'
import { Delete as DeleteIcon } from '../Icons'

const DeleteButtonContainer = styled.button`
    border: 0;
    width: 4rem;
    outline: none;
    cursor: pointer;
    transition: background-color 150ms;
    background-color: #933;
    &:hover {
        background-color: #a33;
    }
`

export const DeleteButton = ({ clickHandler }) => {
    return (
        <DeleteButtonContainer onClick={ clickHandler }>
            <DeleteIcon size="28" fill="#fff" />
        </DeleteButtonContainer>
    )
}