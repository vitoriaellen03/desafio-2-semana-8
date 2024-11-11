import logo from "/img/loginPhoto.png";
import googleIcon from "/img/googleIcon.png";
import facebookIcon from "/img/faceIcon.png";

import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { validateEmail, validatePassword } from "../types/validate";
import { validateUser } from "../types/login";

const Login = () => {

  return (
    <>
      <Header />
      <main className="flex-grow text-sm relative md:text-base flex lg:gap-20 lg:static xl:gap-44" id="login">
        <section className="flex flex-col w-full lg:flex-row ">
          <div className="column-image column w-full  mb-0 lg:w-1/2 overflow-hidden">
            <img
              src={logo}
              alt=""
              className="object-cover w-full h-full opacity-30 lg:opacity-100"
            />
          </div>
          <div className="loginSection column flex-col flex-grow" >
            <div className="sec gap-min">
              <div className="group gap-min">
                <h2 className="ttitle">Login information</h2>
                <div className="group">
                  <p className="">Enter your credentials</p>
                  <span>
                    New here? Let's take you to{" "}
                    <Link to="/SignUp" className="text-blue-600 font-bold">sign up</Link>
                  </span>
                </div>
              </div>

              <form action="">
                <div className="goup gap-min flex column">
                  <div className="group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      onChange={validateEmail}
                      className="h-9 w-full pl-2 border rounded-lg border-opacity-10 border-black"
                    />
                  </div>
                  <div className="group">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={validatePassword}
                      className="h-9 w-full pl-2 border rounded-lg border-opacity-10 border-black"
                    />
                    <span className="hidden" id="spanError">
                      The password must be bigger than 8 characters, contain at least one capital letter, one number and special characters
                    </span></div>
                  <button className="btn" data-type="login" onClick={validateUser} >Login</button>
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
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
