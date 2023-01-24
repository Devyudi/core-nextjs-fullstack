import React from 'react'
import PropTypes from 'prop-types'

const Col = (props)=> {
    return (
        <div className="w-full">

        </div>
    )
}

Col.propTypes = {
    xs: PropTypes.shape({
        span: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
    }),
    sm: PropTypes.shape({
        span: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
    }),
    md: PropTypes.shape({
        span: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
    }),
    lg: PropTypes.shape({
        span: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
    }),
    xl: PropTypes.shape({
        span: PropTypes.number.isRequired,
        order: PropTypes.number.isRequired,
    })
}

Col.defaultProps = {
    xs: {
        span:24,
        order:1,
    }
}

export default Col