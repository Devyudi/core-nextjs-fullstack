import React from 'react'
import {WrapperLayout} from "@moonlay/components/shared-layout";
import nc from "next-connect";

export default function Index(props){
    return (
        <WrapperLayout>
            <p>testing</p>
        </WrapperLayout>
    )
}


export async function getServerSideProps ({req,res}){
    const handler = nc()
        .get(async (req, res, next) => {
        // await logPostRequest(req);

        // next(new Error("Error Gaes")); // <- make sure next() is called
            next()
    });
    try {
        await handler.run(req, res);
    } catch (e) {

    }

    return {
        props: {
            data: 'test'
        }
    }
}