import { Navbar } from "../../../components/navbar/navbar"
import '../signUp/signUp.css'
import '../login/login.css'
import { Link } from "react-router-dom"


export const Login = () => {
  return (
    <div className="login-container">
      <Navbar />
      <main className="main-container">
        <div className="form-wrapper">
          <h2 className="form__heading">Login</h2>
          <div className="form-main-container">
            <form action="#" id="login" className="form-container">
              <label htmlFor="userEmail">Email address</label>
              <br />
              <input type="email" name="userEmail" id="userEmail" placeholder="enter email address" className="input-data" />
              <br />
              <label htmlFor="userPassword">Password</label>
              <br />
              <input type="password" id="userPassword" className="input-data" placeholder="enter password" />
              <div className="user-info-cont">
                <div className="user-remember">
                  <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                  <span className="user-remember__heading">Remember me</span>
                </div>
                <Link to="/forgotPassword" ><span className="forgot-pass--link"> Forgot your
                  Password? </span> </Link>
              </div>
              <button className="btn-user--login">Login</button>
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