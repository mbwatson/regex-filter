import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import initialData from './data'
import { SiteWrapper, Header, Main } from './components/Layout'
import { RegexInputContainer, RegexInput } from './components/RegexInput'
import { Results } from './components/Results'

function App() {
    const [regex, setRegex] = useState()
    const [data, setData] = useState(initialData.map(({ first_name, last_name }) => `${ first_name } ${ last_name }` ))
    const [filteredData, setFilteredData] = useState('')
    
    const checkMatch = (name, pattern) => {
        try {
            const regex = new RegExp(pattern);
            return regex.test(name)
        } catch {
            console.log(`Invalid regular expression: "/${pattern}/"`)
        }
    }

    const handleChangeRegex = event => setRegex(event.target.value)

    useEffect(() => {
        if (regex) {
            setFilteredData(data.filter(name => checkMatch(name, regex)))
        } else {
            setFilteredData(data)
        }
    }, [regex])

    return (
        <SiteWrapper>
            <Header>
                <RegexInputContainer>
                    <RegexInput onChange={ handleChangeRegex } placeholder="Search..." />
                </RegexInputContainer>
            </Header>
            <Main>
                <Results>
                    <h1>Names</h1>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                        { filteredData && filteredData.map(name => <li key={ name }>{ name }</li>) }
                    </ul>
                </Results>
            </Main>
        </SiteWrapper>
    )
}

export default App
