import HeadDevter from '../components/HeadDevter'

export default function Home() {
	function handleLoginClick(e) {
		console.log('Go to /login')
	}
	function handleGitHubLoginClick(e) {
		console.log('Login with GitHub')
	}

	return (
		<>
			<HeadDevter>
				<title>Devter</title>
			</HeadDevter>
			<div className="wrapper">
				<div className="homepage">
					<img className="homepage__logo" src="/logo.png" alt="Devter Logo" />
					<h2>Devter</h2>
					<p>Talk about development with other developers 👩‍💻👨‍💻</p>
					<button className="button--dark_alt" onClick={handleLoginClick}>
						Login with your account
					</button>
					<button className="button--dark" onClick={handleGitHubLoginClick}>
						<img src="/GitHub_white.png" alt="GitHub Logo" />
						Login with GitHub
					</button>
				</div>
			</div>
		</>
	)
}
