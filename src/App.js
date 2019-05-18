import React, { useEffect, useState } from 'react'
import initialData from './data'
import { SiteWrapper, Header, Main } from './components/Layout'
import { FilterMenu } from './components/Menu/FilterMenu'
import { RegexInputContainer, RegexInput } from './components/RegexInput'
import { Results } from './components/Results'
import {
    Raw as RawIcon,
    Contains as ContainsIcon,
    DoesNotContain as DoesNotContainIcon,
    StartsWith as StartsWithIcon,
    EndsWith as EndsWithIcon,
    Equals as EqualsIcon,
    DoesNotEqual as DoesNotEqualIcon,
} from './components/Icons'
import { DeleteButton } from './components/Menu/DeleteButton'

const RAW = 'RAW'
const CONTAINS = 'CONTAINS'
const DOES_NOT_CONTAIN = 'DOES_NOT_CONTAIN'
const STARTS_WITH = 'STARTS_WITH'
const ENDS_WITH = 'ENDS_WITH'
const EQUALS = 'EQUALS'
const DOES_NOT_EQUAL = 'DOES_NOT_EQUAL'

const filterOptions = [
    { text: 'RAW', icon: <RawIcon />, value: RAW },
    { text: 'Contains', icon: <ContainsIcon />, value: CONTAINS },
    { text: 'Does Not Contain', icon: <DoesNotContainIcon />, value: DOES_NOT_CONTAIN },
    { text: 'Starts With', icon: <StartsWithIcon />, value: STARTS_WITH },
    { text: 'Ends With', icon: <EndsWithIcon />, value: ENDS_WITH },
    { text: 'Equals', icon: <EqualsIcon />, value: EQUALS },
    { text: 'Does not Equal', icon: <DoesNotEqualIcon />, value: DOES_NOT_EQUAL },
]

function App() {
    const data = initialData.map(({ first_name, last_name }) => `${ first_name } ${ last_name }`)
    const [pattern, setPattern] = useState()
    const [matchType, setMatchType] = useState(RAW)
    const [filteredData, setFilteredData] = useState('')
    
    const checkRegexMatch = (text, pattern) => {
        try {
            const regex = new RegExp(pattern);
            return regex.test(text)
        } catch {
            console.log(`Invalid regular expression: "/${pattern}/"`)
        }
    }

    const handleChangePattern = event => setPattern(event.target.value)
    const handleDeletePattern = event => setPattern('')

    const handleSelection = value => event => {
        setMatchType(value)
    }

    useEffect(() => {
        if (pattern) {
            switch (matchType) {
                case RAW:
                    setFilteredData(data.filter(name => checkRegexMatch(name, pattern)))
                    return
                case CONTAINS:
                    setFilteredData(data.filter(name => name.includes(pattern)))
                    return
                case DOES_NOT_CONTAIN:
                    setFilteredData(data.filter(name => !name.includes(pattern)))
                    return
                case STARTS_WITH:
                    setFilteredData(data.filter(name => name.startsWith(pattern)))
                    return
                case ENDS_WITH:
                    setFilteredData(data.filter(name => name.endsWith(pattern)))
                    return
                case EQUALS:
                    setFilteredData(data.filter(name => name === pattern))
                    return
                case DOES_NOT_EQUAL:
                    setFilteredData(data.filter(name => name !== pattern))
                    return
                default:
                    setFilteredData(data)
                    return
            }
        } else {
            setFilteredData(data)
        }
    }, [pattern, matchType])

    return (
        <SiteWrapper>
            <Header>
                <FilterMenu items={ filterOptions } selection={ matchType } changeHandler={ handleSelection } />
                <RegexInputContainer>
                    <RegexInput onChange={ handleChangePattern } placeholder="Search..." value={ pattern } />
                    <DeleteButton clickHandler={ handleDeletePattern } />
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
