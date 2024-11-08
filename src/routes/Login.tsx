import logo from "/img/loginPhoto.png";
import googleIcon from "/img/googleIcon.png";
import facebookIcon from "/img/faceIcon.png";
import { Link } from "react-router-dom";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


import Header from "../components/Header";
import Footer from "../components/Footer";


const Login = () => {

  const validateEmail = () => {

    const email = document.getElementById("email") as HTMLInputElement;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;

    if (!emailRegex.test(email.value)) {
      email.placeholder = "Invalid email";
      email.classList.add("erro");
    } else {
      email.placeholder = "Enter your email";
      email.classList.remove("erro");
    }
  } 

  const validatePassword = () => {
    
    const password = document.getElementById("password") as HTMLInputElement;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/i;
    const span = document.getElementById("spanError") as HTMLSpanElement;

    if (!passwordRegex.test(password.value)) {
      span.classList.add("erro-message")
      span.classList.remove("hidden");
      password.classList.add("erro");
    } else {
      password.classList.remove("erro");
      span.classList.remove("erro-message");
      span.classList.add("hidden");
    }
  }
  

  return (
    <>
    <Header />
    <main className="text-sm relative md:text-base lg:flex lg:gap-20 lg:static xl:gap-44">
      <img src={logo} alt="" className="object-cover w-full h-656 md:h-1000 relative z-0 opacity-30 lg:w-520 xl:w-625 lg:h-656 lg:opacity-100 lg:static" />
      <div className="loginSection">
        <section className="text-center md:text-start md:ml-16 md:self-start lg:ml-0">
          <h1 className="font-bold mb-6 text-base md:text-5xl">Login information</h1>
          <p>Enter your credentials</p>
          <span>
            New here? Let's take you to <Link to="/SignUp" className="text-blue-600 font-bold">sign up</Link>
          </span>
        </section>
        <section className="flex flex-col gap-5">
          <div className="inputs">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={validateEmail}
              className="h-9 w-80 md:w-520 lg:w-400 xl:w-520 pl-2 border rounded-lg border-opacity-10 border-black"
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={validatePassword}
              className="h-9 w-80 md:w-520 lg:w-400 xl:w-520 pl-2 border rounded-lg border-opacity-10 border-black"
            />
            <span className="hidden" id="spanError">The password must be bigger than 8 characters, contain at least one capital letter, one number and special characters</span>
          </div>
          <button type="submit" className="buttonDark self-center mt-6">Login</button>
          <div className="flex flex-col gap-2 self-center text-center">
            <p>or sign in with...</p>
            <div className="flex gap-3">
            <SignInButton forceRedirectUrl="/kanban">
                <button className="buttonIcons">
                  <img src={facebookIcon} alt="Facebook icon" />
                </button>
                </SignInButton>
                <SignInButton forceRedirectUrl="/kanban">
                  <button className="buttonIcons">
                    <img src={googleIcon} alt="Google icon" />
                  </button>
                </SignInButton>
            </div>
          </div>
        </section>
        <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Login;
