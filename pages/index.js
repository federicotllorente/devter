import { useState, useEffect } from 'react'
import { onAuthStateChanged, loginWithGitHub } from '../firebase/client'

import HeadDevter from '../components/HeadDevter'
import Logo from '../components/Icons/Logo'
import { ButtonDark, ButtonDarkAlt } from '../components/Buttons'
import Avatar from '../components/Avatar'

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
				<div className="index">
					{/* <img className="homepage__logo" src="/logo.png" alt="Devter Logo" /> */}
					<Logo fill="#0049ff" width="120" height="120" />
					<h2>Devter</h2>
					<p>Talk about development with other developers 👩‍💻👨‍💻</p>
					{user == null ? (
						<>
							<ButtonDarkAlt onClick={handleLoginClick}>
								Login with your account
							</ButtonDarkAlt>
							<ButtonDark onClick={handleGitHubLoginClick} GitHub>
								Login with GitHub
							</ButtonDark>
						</>
					) : (
						<Avatar
							userName={user.name} avatarURL={user.avatar}
							avatarWidth="50" avatarHeight="50"
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default Home