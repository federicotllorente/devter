import Head from 'next/head'

const HeadDevter = ({ children }) => (
	<Head>
		{children}
		<meta name="description" content="Devter – Social Media App for Developers" />
		<link rel="icon" href="/logo.png" />
	</Head>
)

export default HeadDevter