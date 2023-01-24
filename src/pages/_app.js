import {ThemeProvider} from 'next-themes'
import React from "react";
import {getSession, SessionProvider, useSession} from "next-auth/react"
import '../assets/sass/main.scss'
export const config = {
    amp: "hybrid"
}

function MyApp(props) {
    let {Component, pageProps: {session, ...pageProps}} = props

    return (
        <SessionProvider session={session}>
            <ThemeProvider attribute={'class'}>
                <div
                    className="w-full min-h-screen bg-gray-100"
                    key={'index-component'}>
                    <Component
                        {...props?.pageProps}
                    />
                </div>
            </ThemeProvider>
        </SessionProvider>

    )
}


MyApp.getInitialProps = async ({Component, ctx}) => {

    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    const sessions = await getSession(ctx)


    pageProps = {
        ...pageProps,
        sessions,
    }

    return {pageProps};
}

export default MyApp
