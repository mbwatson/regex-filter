import React from 'react'
import PropTypes from 'prop-types'
import GitHubLogo from './GitHub.svg'

export const GitHub = ({ size, fill }) => (
    <GitHubLogo />
)

GitHub.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

GitHub.defaultProps = {
    size: 20,
    fill: '#333',
}
