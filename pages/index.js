import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Devter</title>
				<meta name="description" content="Devter – Social Media App for Developers" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<div className="wrapper">
				<div className="homepage">
					<img className="homepage__logo" src="/logo.png" alt="Devter Logo" />
					<h2>Devter</h2>
					<p>Talk about development with other developers 👩‍💻👨‍💻</p>
					<button className="button--dark">
						<img src="/GitHub_white.png" alt="GitHub Logo" />
						Login with GitHub
					</button>
				</div>
			</div>
		</>
	)
}
