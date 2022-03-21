import { Navbar } from "../../../components/navbar/navbar"
import '../signUp/signUp.css';


export const SignUp = () => {
  return (
    <div className="signUp-container">
      <Navbar />
      <main className="main-container">
        <div className="form-wrapper">
          <h2 className="form__heading ">Sign Up</h2>
          <div className="form-main-container">
            <div className="form-sub-container">
              <form action="#" id="login" className="form-container">
                <div className="form-data-container">
                  <label htmlFor="userName">Name</label>
                  <input type="text" name="userName" id="userName" className="input-data" placeholder="Name" />
                  <label htmlFor="userEmail">Email address</label>
                  <input type="email" name="userEmail" id="userEmail" placeholder="enter email address" className="input-data" />
                  <label htmlFor="userPassword">Password</label>
                  <input type="password" id="userPassword" className="input-data" placeholder="enter password" />
                  <label htmlFor="userConfirmPassword">Confirm Password</label>
                  <input type="password" id="userConfirmPassword" className="input-data" placeholder="enter password again" />
                </div>
                <div className="form-data-container">
                  <label htmlFor="userContact">Contact Number</label>
                  <input type="number" name="userContact" id="userContact" className="input-data" placeholder="contact number" />
                  <label htmlFor="referenceCode">Referal Code</label>
                  <input type="text" name="referenceCode" id="referenceCode" className="input-data" placeholder="referal code" />
                  <div className="gender-info">
                    <label htmlFor="gender">Gender</label>
                    <br />
                    <input type="radio" name="gender" defaultValue="male" className="input-radio" />Male
                    <input type="radio" name="gender" defaultValue="female" className="input-radio" />Female
                    <input type="radio" name="gender" defaultValue="other" className="input-radio" />Other
                  </div>
                </div>
              </form>
            </div>
            <div className="form-sub-container">
              <div className="user-info-cont">
                <div className="user-remember">
                  <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                  <span className="user-remember__heading"> I accept all terms and conditions</span>
                </div>
              </div>
              <button className="btn-user--login user-create-account">Create New Account</button>
              <a href="/authentication/login_page/login.html" className="link"> <p className="link-center">Already have an account</p> </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}