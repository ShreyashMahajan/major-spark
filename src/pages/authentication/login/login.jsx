import { Navbar } from "../../../components/navbar/navbar"
import '../signUp/signUp.css'
import '../login/login.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../../context/authContext"


export const Login = () => {
  const [user, setUser] = useState({ email: 'admin@gmail.com', password: 'admin' });
  const { login } = useAuth();

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submit = e => {
    e.preventDefault();
    console.log('from login page', user);
    login(user);
  }
  return (
    <div className="login-container">
      <Navbar showSearch={false} />
      <main className="main-container">
        <div className="form-wrapper">
          <h2 className="form__heading"> Login </h2>
          <div className="form-main-container">
            <form action="#" id="login" className="form-container form--login" onSubmit={submit} >
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" placeholder="enter email address" value={user.email} className="input-data" required onChange={(e) => inputChangeHandler(e, email)} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="input-data" placeholder="enter password" value={user.password} required onChange={(e) => inputChangeHandler(e, password)} />
              <div className="user-info-cont">
                <div className="user-remember">
                  <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                  <span className="user-remember__heading">Remember me</span>
                </div>
                <Link to="/forgotPassword" ><span className="forgot-pass--link"> Forgot your
                  Password? </span> </Link>
              </div>
              <button className="btn-user--login" type="submit">Login</button>
              <Link to="/signup">
                <p className="user-new-account">Create New Account</p>
              </Link>
            </form>
          </div>
        </div>
      </main>

    </div>
  )
}