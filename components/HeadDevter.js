import Head from 'next/head'

const HeadDevter = ({ children }) => (
	<Head>
		{children}
		<meta name="description" content="Devter – Social Media App for Developers" />
		<link rel="icon" href="/favicon.svg" />
	</Head>
)

export default HeadDevter