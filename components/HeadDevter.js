import Head from 'next/head'

export default function HeadDevter({ children }) {
    return (
        <Head>
            {children}
            <meta name="description" content="Devter – Social Media App for Developers" />
            <link rel="icon" href="/logo.png" />
        </Head>
    )
}
