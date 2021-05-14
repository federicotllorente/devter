import { useState, useEffect } from 'react'
import HeadDevter from '../components/HeadDevter'
import { onAuthStateChanged, loginWithGitHub } from '../firebase/client'

const Home = () => {
	const [user, setUser] = useState(null)
	useEffect(() => {
		onAuthStateChanged(setUser)
	}, [])

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
					{user ? (
						<>
							<img
								src={user.avatar}
								alt={`${user.name}'s profile picture`}
								width="50"
								height="50"
							/>
							<h2>{user.name}</h2>
						</>
					) : (
						<>
							<button className="button--dark_alt" onClick={handleLoginClick}>
								Login with your account
							</button>
							<button className="button--dark" onClick={handleGitHubLoginClick}>
								<img src="/GitHub_white.png" alt="GitHub Logo" />
								Login with GitHub
							</button>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Home