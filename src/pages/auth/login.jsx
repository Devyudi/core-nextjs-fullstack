import React from 'react'
import { signIn, getCsrfToken, getSession } from 'next-auth/react';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login(){

    return (
        <div className="w-full border border-red-500">
            <button
                onClick={()=> signIn('google')}
                type={'button'} className="w-full text-white h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-400 tracking-wide">
                OK
            </button>
        </div>
    )
}


export async function getServerSideProps(context) {

    const sessions = await getSession(context)
    const csrfToken = await getCsrfToken(context)
    if (sessions === null){
        return {
            props: {
                csrfToken: csrfToken ? csrfToken : null,
            },
        };
    }
    return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props: {
            // sessions,
            csrfToken: csrfToken ? csrfToken : null,
        },
    };

}
