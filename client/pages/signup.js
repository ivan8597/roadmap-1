import Link from "next/link"
const SignupPage = () => {
    return (
        <div className="text-center signinpage">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword-2"
                            placeholder=" Repeat Password"
                        />
                        <label htmlFor="floatingPassword-2">Repeat Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign up
                    </button>
                    <p className="mt-5 mb-3 text-muted">
                        <Link href="/signin"><a className="btn btn-link">Sign in</a></Link>
                    </p>
                </form>
            </main>
        </div>
    )
}

export default SignupPage;