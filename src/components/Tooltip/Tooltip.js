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

const Popup = styled.div`
    background-color: #999;
    padding: calc(0.5rem + 6px) 1rem 0.5rem 1rem;
    font-size: 75%;
    position: absolute;
    top: 100%;
    left: 50%;
    white-space: nowrap;
    transform: translateX(-50%);
    pointer-events: none;
    clip-path: polygon( /* top left, bottom left, ... */
        0% 6px,
        0% 100%,
        100% 100%,
        100% 6px,
        calc(50% + 5px) 6px,
        50% 0%,
        calc(50% - 5px) 6px
    );
    opacity: 0.0;
    transition: opacity 250ms;

`

export const Tooltip = ({ children, text }) => {
    return (
        <TooltipWrapper>
            { children }
            <Popup className="tooltip">
                { text }
            </Popup>
        </TooltipWrapper>
    )
}