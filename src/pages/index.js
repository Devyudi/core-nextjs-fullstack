import React from 'react'
import Head from 'next/head'
import nc from 'next-connect'
import {WrapperLayout} from "@moonlay/components/shared-layout";
import { PrismaClient } from '@prisma/client'


export default function Index(){
    return (
        <WrapperLayout>
            <Head>
                <title>Home | testing</title>
            </Head>
            <p>Lorem ipsum dolor sit amet</p>
        </WrapperLayout>
    )
}

export async function getServerSideProps(ctx){
    let { req} = ctx

    const handler = nc()
        // .use(passport.initialize())
        .post(async (req, res, next) => {
            // await logPostRequest(req);
            const prisma = new PrismaClient()

            console.log(req?.body,'BODY')
            // const newUser = await prisma.Posts.create({
            //     data: {
            //         name: 'Alice',
            //         email: 'alice@prisma.io',
            //     },
            // })
            next(); // <- make sure next() is called
        });
    try {
        await handler.run(req, res);
    } catch (e) {
        // handle the error
    }
    return {
        props: { user: req?.user ?? null },
    };
}