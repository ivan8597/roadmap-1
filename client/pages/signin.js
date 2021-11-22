import Link from "next/link"
import { useState } from "react";
import { useUserContext } from "../components/context/User";
import {useRouter} from "next/router"
const SigninPage = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {login,user}= useUserContext()
    const router=useRouter()
    if(user.loading){
        return <div className="text-center signinpage">
        <main className="form-signin">Loading...</main></div>
    }
    if(user.token){
        router.push('/user/profile')
        return <div className="text-center signinpage">
        <main className="form-signin">Loading...</main></div>
    }

    return (
        <div className="text-center signinpage">
            <main className="form-signin">
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    login({ email,password})

                    
                }}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}    
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}                    />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">
                        <Link href="/signup"><a className="btn btn-link">Sign up</a></Link>
                    </p>
                </form>
            </main>
        </div>
    )
}

export default SigninPage;