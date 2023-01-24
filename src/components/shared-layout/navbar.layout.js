import React from 'react'
import PropTypes from 'prop-types'

import {ConfigMenu} from "@moonlay/config";
import {useRouter} from "next/router";

const NavbarLayout = (props)=>{

    const router = useRouter();

    console.log(ConfigMenu,router)
    return (
        <div className="w-full flex items-center border border-red-500 h-full">
            <div className="container mx-auto">
                <h1>test</h1>
            </div>
        </div>
    )
}

NavbarLayout.propTypes = {}
NavbarLayout.defaultProps = {}

export default NavbarLayout