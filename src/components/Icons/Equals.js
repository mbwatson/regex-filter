import React from 'react'
import PropTypes from 'prop-types'

export const Equals = ({ size, fill }) => (
    <svg width={ size } height={ size } fill={ fill } focusable="false" viewBox="0 0 32 32" aria-hidden="true" role="presentation"><path d="M29.438 11.797v2.75h-26.922v-2.75h26.922zM29.438 17.406v2.75h-26.922v-2.75h26.922z"></path></svg>
)

Equals.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

Equals.defaultProps = {
    size: 20,
    fill: '#333',
}
