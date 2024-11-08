import logo from "/img/photoSign.png";
import facebookIcon from "/img/faceIcon.png";
import googleIcon from "/img/googleIcon.png";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

  const validateName = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const nameRegex = /^[A-ZÁ-Úa-zá-ú]+$/i;
    const span = document.getElementById("nameError") as HTMLSpanElement;

    if (name.value.length < 2 && nameRegex.test(name.value)) {
      span.classList.add("erro-message")
      span.classList.remove("hidden");
      name.classList.add("erro");
    } else {
      name.classList.remove("erro");
      span.classList.remove("erro-message");
      span.classList.add("hidden");
    }
  }

  const validateLast = () => {
    const lastname = document.getElementById("lastname") as HTMLInputElement;
    const lastRegex = /^[A-ZÁ-Úa-zá-ú]+$/i;
    const lastspan = document.getElementById("lastError") as HTMLSpanElement;

    if (lastname.value.length < 2 && lastRegex.test(lastname.value)) {
      lastspan.classList.add("erro-message")
      lastspan.classList.remove("hidden");
      lastname.classList.add("erro");
    } else {
      lastname.classList.remove("erro");
      lastspan.classList.remove("erro-message");
      lastspan.classList.add("hidden");
    }
  }

  const validateJob = () => {
    const job = document.getElementById("job") as HTMLInputElement;
    const jobRegex = /^[A-ZÁ-Úa-zá-ú]+$/i;
    const jobspan = document.getElementById("jobError") as HTMLSpanElement;

    if (job.value.length > 4 && jobRegex.test(job.value)) {
      jobspan.classList.add("erro-message")
      jobspan.classList.remove("hidden");
      job.classList.add("erro");
    } else {
      job.classList.remove("erro");
      jobspan.classList.remove("erro-message");
      jobspan.classList.add("hidden");
    }
  }

  return (
    <>
    <Header />
    <div className="text-sm relative md:text-base lg:flex lg:flex-row-reverse lg:gap-20 lg:static xl:gap-44">
      <img
        src={logo}
        alt=""
        className="object-cover w-full h-800 md:h-1000 relative z-0 opacity-30 lg:w-400 xl:w-625 lg:h-auto lg:opacity-100 lg:static"
      />
      <div className="signSection pt-2 pb-2">
        <section className="text-center md:text-start md:ml-16 md:self-start lg:ml-0">
          <h1 className="font-bold mb-6 text-base md:text-5xl">
            Sign up Information
          </h1>
          <p>
            Already have an account? <Link to="/Login" className="text-blue-600 font-bold">Log in.</Link>
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <div className="md:flex flex-col md:flex-row w-60">
            <div className="input">
              <label>First name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your first name"
                className="h-9 w-80 md:w-251 lg:w-48 xl:w-251 pl-2 border rounded-lg border-opacity-10 border-black"
                onChange={validateName}
              />
              <span className="hidden" id="nameError">
                The name must be bigger than 2 characters.
              </span>
            </div>
            <div className=" md:flex flex-col md:flex-row w-60 mt-5 md:mt-0 md:ml-5">
              <div className="input">
                <label>Last name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="h-9 w-80 md:w-251 lg:w-48 xl:w-251 pl-2 border rounded-lg border-opacity-10 border-black"
                  onChange={validateLast}
                />
                <span className="hidden" id="lastError">
                The last name must be bigger than 2 characters.
              </span>
              </div>
            </div>
          </div>
          <div className="inputs">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="h-9 w-80 md:w-520 lg:w-400 xl:w-520 pl-2 border rounded-lg border-opacity-10 border-black"
              onChange={validateEmail}
            />
          </div>
          <div className="inputs">
            <label>Job position</label>
            <input
              type="text"
              id="jobPosition"
              placeholder="Enter your job position (example: Project Manager)"
              onChange={validateJob}
              className="h-9 w-80 md:w-520 lg:w-400 xl:w-520 pl-2 border rounded-lg border-opacity-10 border-black"
            />
            <span className="hidden" id="jobError">
              The job position must be at least bigger than 4 characters, and no numbers.
            </span>
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="h-9 w-80 md:w-520 lg:w-400 xl:w-520 pl-2 border rounded-lg border-opacity-10 border-black"
              onChange={validatePassword}
            />
            <span className="hidden" id="spanError">
              The password must be bigger than 8 characters, contain at least
              one capital letter, one number and special characters
            </span>
          </div>
          <button className="buttonDark self-center mt-6">
            Create an account
          </button>
          <div className="flex flex-col gap-2 self-center text-center">
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
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
