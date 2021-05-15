import Link from 'next/link'

import HeadDevter from '../../components/HeadDevter'
import Logo from '../../components/Icons/Logo'

const Login = () => {
	const handleFormSubmit = e => {
		e.preventDefault()
		console.log('Submitting Login Form')
	}
	const handleEmailChange = () => {
		console.log('Update email state')
	}
	const handlePasswordChange = () => {
		console.log('Update password state')
	}

	return (
		<>
			<HeadDevter>
				<title>Login – Devter</title>
			</HeadDevter>
			<div className="wrapper">
				<div className="login">
					<Link href="/">Return to Home</Link>
					<Logo fill="#0049ff" width="70" height="70" />
					<h2>Devter</h2>
					<p>Login to Devter with your account</p>
					<form className="login__form" onSubmit={handleFormSubmit}>
						<input
							type="email" name="email"
							id="login_email" placeholder="Your email"
							required onChange={handleEmailChange}
						/>
						<input
							type="password" name="password"
							id="login_password" placeholder="Your password"
							required onChange={handlePasswordChange}
						/>
						<button className="button--dark">Sign in</button>
					</form>
					<div className="login__help_links">
						<Link href="/register">Don&apos;t you have an account yet? Create one now!</Link>
						<a href="mailto:federicotllorente@gmail.com">Contact us</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login