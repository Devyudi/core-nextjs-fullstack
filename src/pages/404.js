import React from 'react'
import Head from 'next/head'
import {WrapperLayout} from "@moonlay/components/shared-layout";
export default function Index(){
    return (
        <WrapperLayout>
            <Head>
                <title>404 | Not Found</title>
            </Head>
            <p>Not Found</p>
        </WrapperLayout>
    )
}