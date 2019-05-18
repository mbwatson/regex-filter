import React from 'react'
import PropTypes from 'prop-types'

export const Delete = ({ size, fill }) => (
    <svg width={ size } height={ size } fill={ fill } viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
)

Delete.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

Delete.defaultProps = {
    size: 20,
    fill: '#333',
}