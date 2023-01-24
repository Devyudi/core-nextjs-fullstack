import React from 'react'
import PropTypes from 'prop-types'
import StyledChildren from "@moonlay/components/shared-layout/styles.children";
import NavbarLayout from "@moonlay/components/shared-layout/navbar.layout";

const WrapperLayout = (props)=> {
    return(
        <div className="w-full border border-red-500 min-h-screen">
            <div className="w-full fixed top-0 left-0 h-20 bg-white">
                <StyledChildren children={props?.navbar}/>
            </div>
            <div className="border border-red-500 mt-20 min-h-screen">
                <StyledChildren children={props?.children}/>
            </div>
        </div>
    )
}

WrapperLayout.propTypes = {
    navbar: PropTypes.element.isRequired,
    navbarType: PropTypes.string
}
WrapperLayout.defaultProps = {
    navbar: <NavbarLayout/>,
    navbarType: 'default'
}

export default WrapperLayout
