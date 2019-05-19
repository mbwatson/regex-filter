import styled from 'styled-components'

export const Results = styled.div`
    margin: 0 auto
    line-height: 1.5
    color: #ccc;
    width: 400px;
    text-align: center;
`

export const  Row = styled.div`
    border: 1px solid #444;
    padding: 0.5rem 1rem;
    background-color: ${ ({ color }) => color };
`