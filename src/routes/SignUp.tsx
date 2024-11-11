import logo from "/img/photoSign.png";
import facebookIcon from "/img/faceIcon.png";
import googleIcon from "/img/googleIcon.png";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { validateEmail, validatePassword, validateLast, validateName, validateJob } from "../types/validate";
import { signUp } from "../types/signup";

const Login = () => {

  return (
    <>
      <Header />
      <main className="flex-grow text-sm relative md:text-base flex lg:gap-20 lg:static xl:gap-44" id="signup">
        <section className="flex flex-col w-full lg:flex-row">
          {/* Inverte a ordem da imagem de fundo e do formulário */}
          <div className="signSection column flex-col flex-grow">
            <div className="sec gap-min">
              <div className="group gap-min">
                <h2 className="ttitle">Sign Up Information</h2>
                <div className="group">
                  <p>Already have an account?</p>
                  <span>
                    Let's take you to{" "}
                    <Link to="/Login" className="text-blue-600 font-bold">log in</Link>
                  </span>
                </div>
              </div>

              <form action="">
                {/* Campos adicionais do formulário de Sign Up */}
                <div className="group gap-min flex column">
                  <div className="group columns">
                    div.column
                    <label>First Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your first name"
                      className="h-9 w-full pl-2 border rounded-lg border-opacity-10 border-black"
                      onChange={validateName}
                    />
                    <span className="hidden" id="nameError">
                      The name must be bigger than 2 characters.
                    </span>
                    <label>Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Enter your last name"
                      className="h-9 w-full pl-2 border rounded-lg border-opacity-10 border-black"
                      onChange={validateLast}
                    />
                    <span className="hidden" id="lastError">
                      The last name must be bigger than 2 characters.
                    </span>
                  </div>
                </div>
                <div className="group gap-min flex column">
                  <label>Job Position</label>
                  <input
                    type="text"
                    id="jobPosition"
                    placeholder="Enter your job position (e.g., Project Manager)"
                    onChange={validateJob}
                    className="h-9 w-full pl-2 border rounded-lg border-opacity-10 border-black"
                  />
                  <span className="hidden" id="jobError">
                    The job position must have at least 5 characters, and no numbers.
                  </span>
                </div>
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
                    The password must be bigger than 8 characters, contain at least one capital letter, one number, and special characters.
                  </span>
                </div>
                <button type="submit" onClick={(e) => { e.preventDefault(); signUp() }} className="btn">
                  Create an account
                </button>
                <div className="flex flex-col gap-2 self-center text-center mt-4">
                  <p>or sign up with...</p>
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
              </form>
            </div>
          </div>
          {/* Imagem de fundo à direita para Sign Up */}
          <div className="column-image column w-full mb-0 lg:w-1/2 overflow-hidden">
            <img
              src={logo}
              alt=""
              className="object-cover w-full h-full opacity-30 lg:opacity-100"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
