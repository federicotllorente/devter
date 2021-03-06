import Link from 'next/link'

import HeadDevter from '../../components/HeadDevter'
import Logo from '../../components/Icons/Logo'

const Register = () => {
	const handleFormSubmit = e => {
		e.preventDefault()
		console.log('Submitting Register Form')
	}
	const handleUsernameChange = () => {
		console.log('Update username state')
	}
	const handleEmailChange = () => {
		console.log('Update email state')
	}
	const handlePasswordChange = () => {
		console.log('Update password state')
	}
	const handlePasswordRepeatChange = () => {
		console.log('Update password repetition state')
	}

	return (
		<>
			<HeadDevter>
				<title>Register – Devter</title>
			</HeadDevter>
			<div className="wrapper">
				<div className="register">
					<Link href="/">Return to Home</Link>
					<Logo fill="#0049ff" width="70" height="70" />
					<h2>Devter</h2>
					<p>Create your account to Devter</p>
					<form className="register__form" onSubmit={handleFormSubmit}>
						<input
							type="text" name="username"
							id="register_username" placeholder="Your username"
							required onChange={handleUsernameChange}
						/>
						<input
							type="email" name="email"
							id="register_email" placeholder="Your email"
							required onChange={handleEmailChange}
						/>
						<input
							type="password" name="password"
							id="register_password" placeholder="Your password"
							required onChange={handlePasswordChange}
						/>
						<input
							type="password" name="password"
							id="register_password_repeat" placeholder="Repeat the password"
							required onChange={handlePasswordRepeatChange}
						/>
						<button className="button--dark">Register</button>
					</form>
					<div className="register__help_links">
						<Link href="/login">Do you already have an account? Sign in now!</Link>
						<a href="mailto:federicotllorente@gmail.com">Contact us</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register