import React, { useState } from 'react'
import styled from 'styled-components'
import { FilterButton } from './FilterButton'
import { Tooltip } from '../Tooltip'

const Menu = styled.div`
    background-color: #111;
    display: flex;
    flex-direction: row;
`

export const FilterMenu = ({ items, selection, changeHandler }) => {
    
    return (
        <Menu>
            {
                items.map(item => (
                    <Tooltip text={ item.text }>
                        <FilterButton selected={ item.value === selection } onClick={ changeHandler(item.value) } aria-label={ item.ariaLabel }>
                            { item.icon }
                        </FilterButton>
                    </Tooltip>
                ))
            }
        </Menu>
    )
}