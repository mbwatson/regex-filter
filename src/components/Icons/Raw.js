import React from 'react'
import PropTypes from 'prop-types'

export const Raw = ({ size, fill }) => (
    <svg width={ 2 * size } height={ size } fill={ fill } viewBox="0 0 32 32" aria-hidden="true" role="presentation">
        <text x="16" y="12" text-anchor="middle" font-size="16" font-weight="bold">RAW</text>
        <text x="16" y="28" text-anchor="middle" font-size="16" font-weight="bold">REGEX</text>
    </svg>
)

Raw.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

Raw.defaultProps = {
    size: 20,
    fill: '#333',
}