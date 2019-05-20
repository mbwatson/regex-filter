import React from 'react'
import styled from 'styled-components'

const TooltipWrapper = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    &:hover > .tooltip {
        opacity: 1.0;
    }
`

const adjustForPlacement = placement => {
    switch (placement) {
        case 'below':
            return `
                clip-path: polygon(0% 6px, 0% 100%, 100% 100%, 100% 6px, calc(50% + 5px) 6px, 50% 0%, calc(50% - 5px) 6px);
                padding-top: calc(0.5rem + 6px);
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
            `
        case 'left':
            return `
                clip-path: polygon(0% 0%, 0% 100%, calc(100% - 5px) 100%, calc(100% - 5px) calc(50% - 5px), 100% 50%, calc(100% - 5px) calc(50% + 5px), calc(100% - 5px) 0%, 0% 0%);
                padding-right: calc(0.5rem + 6px);
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
            `
        default:
            return
    }
}

const Popup = styled.div`
    background-color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 75%;
    padding: 0.5rem;
    position: absolute;
    vertical-align: middle;
    white-space: nowrap;
    pointer-events: none;
    ${ props => adjustForPlacement(props.placement) };
    opacity: 0;
    transition: opacity 250ms;
`

export const Tooltip = ({ children, text, placement = 'below' }) => {
    return (
        <TooltipWrapper>
            { children }
            <Popup className="tooltip" placement={ placement }>
                { text }
            </Popup>
        </TooltipWrapper>
    )
}