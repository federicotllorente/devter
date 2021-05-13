import Link from 'next/link'
import HeadDevter from "../../components/HeadDevter";

export default function Login() {
    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('Submitting Login Form')
    }
    function handleEmailChange(e) {
        console.log('Update email state')
    }
    function handlePasswordChange(e) {
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
                    <img className="login__logo" src="/logo.png" alt="Devter Logo" />
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
                        <Link href="/register">Don't you have an account yet? Create one now!</Link>
                        <a href="mailto:federicotllorente@gmail.com">Contact us</a>
                    </div>
                </div>
            </div>
        </>
    )
}
