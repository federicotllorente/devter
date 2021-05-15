import { useState, useEffect } from 'react'
import { onAuthStateChanged, loginWithGitHub } from '../firebase/client'

import HeadDevter from '../components/HeadDevter'
import Logo from '../components/Icons/Logo'
import { ButtonDark, ButtonDarkAlt } from '../components/Buttons'

const Home = () => {
	const [user, setUser] = useState(null)
	useEffect(() => {
		onAuthStateChanged(setUser)
	}, [])

	const handleLoginClick = () => {
		console.log('Go to /login')
	}
	const handleGitHubLoginClick = async () => {
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
					{/* <img className="homepage__logo" src="/logo.png" alt="Devter Logo" /> */}
					<Logo fill="#0049ff" width="120" height="120" />
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
							<ButtonDarkAlt onClick={handleLoginClick}>
								Login with your account
							</ButtonDarkAlt>
							<ButtonDark onClick={handleGitHubLoginClick} GitHub>
								Login with GitHub
							</ButtonDark>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Home