import { useState } from 'react'
import HeadDevter from '../components/HeadDevter'
import { loginWithGitHub } from '../firebase/client'

const Home = () => {
	const [user, setUser] = useState(null)

	const handleLoginClick = e => {
		console.log('Go to /login')
	}
	const handleGitHubLoginClick = async e => {
		const gitHubUser = await loginWithGitHub()
		setUser(gitHubUser)
	}

	return (
		<>
			<HeadDevter>
				<title>Devter 👩‍💻👨‍💻</title>
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

export default Home