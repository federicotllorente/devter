import HeadDevter from "../../components/HeadDevter";

export default function Register() {
    return (
        <>
            <HeadDevter>
                <title>Register – Devter</title>
            </HeadDevter>
            <div className="wrapper">
                <div className="register">
                    <img className="register__logo" src="/logo.png" alt="Devter Logo" />
                    <h2>Devter</h2>
                    <p>Create your account in Devter</p>
                    <form>
                        <input
                            type="text" name="username"
                            id="register_username" placeholder="Your username"
                        />
                        <input
                            type="email" name="email"
                            id="register_email" placeholder="Your email"
                        />
                        <input
                            type="password" name="password"
                            id="register_password" placeholder="Your password"
                        />
                        <input
                            type="password" name="password"
                            id="register_password_repeat" placeholder="Repeat the password"
                        />
                        <button className="button--dark">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}
