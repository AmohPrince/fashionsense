import React from "react";
import "./Signup.css";
import images from "../../constants/images";

const Signup = () => {
  return (
    <div className="Signup__container">
      <div className="Signup__left">
        <p className="p__frankruhl">Get Started</p>
        <p className="p__frankruhl">
          Already have an account?
          <span className="Signup__left-st">Log In</span>
        </p>
        <div className="Signup__left-ortab">
          <div />
          <p className="p__frankruhl">OR</p>
          <div />
        </div>
        <div className="Signup__options">
          <div className="Signup-google">
            <img src={images.google} alt="Google Icon" />
            <p className="p__frankruhl">Sign Up With Google</p>
          </div>
          <div className="Signup__fb">
            <img src={images.facebook} alt="Facebook icon" />
            <p className="p__frankruhl">Sign Up With FaceBook</p>
          </div>
        </div>
        <div className="Signup__forms">
          <div className="Signup-form">
            <label htmlFor="name" className="p__frankruhl">
              Full Name
            </label>
            <input type="text" name="name" id="inputname" />
          </div>
          <div className="Signup-form">
            <label htmlFor="email" className="p__frankruhl">
              Email Address
            </label>
            <input type="email" name="email" id="inputemail" />
          </div>
          <div className="Signup-form">
            <label htmlFor="name" className="p__frankruhl">
              Password
            </label>
            <input type="password" name="password" id="inputpassword" />
          </div>
          <div className="Signup-form">
            <input type="checkbox" name="checkbox" id="inputcheckbox" />
            <label htmlFor="name" className="p__frankruhl">
              <p className="p__frankruhl">
                I agree to all the{" "}
                <span className="Signup__left-st">Terms</span>, and{" "}
                <span className="Signup__left-st">Privacy Policy</span> and{" "}
                <span className="Signup__left-st">Fees</span>
              </p>
            </label>
          </div>
        </div>
        <button className="app__bg">Create Account</button>
      </div>
      <div className="Signup__right">
        <p className="p__poppins">Fresh</p>
        <img
          src={images.cold}
          alt="holy shit this chick is hot"
          className="Signup__right-img"
        />
      </div>
    </div>
  );
};

export default Signup;
