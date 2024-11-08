import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import userImg from "/img/userImg.png";
import uploadImg from "/img/uploadImg.png";
import uploadBin from "/img/uploadBin.png";
import db from "../data/db.json";

const User = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row ml-4 md:ml-10 mt-8 md:mt-16">
        <img src={userImg} alt="user's profile photo" className="w-32 h-32 md:w-44 md:h-44" />
        <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
          <h1 className="text-3xl md:text-5xl font-medium">
            {db.users[0].firstName} {db.users[0].lastName}
          </h1>
          <p className="text-sm md:text-lg font-normal text-slate-600">
            {db.users[0].email}
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-5 ml-4 md:ml-10 mr-4 md:mr-10 border-b border-b-gray-400 pb-4">
        <h1 className="text-xl md:text-2xl font-medium">Project Profile</h1>
        <p className="text-sm md:text-base font-normal text-slate-600">
          Update your profile information in the sections below
        </p>
      </div>

      <div className="pt-4 flex flex-col md:flex-row justify-between border-b border-b-gray-400 pb-4 ml-4 md:ml-10 mr-4 md:mr-10">
        <div className="mb-4 md:mb-0 md:mr-12 w-full md:w-96">
          <h2 className="text-base font-medium">Basic Information</h2>
          <p className="text-sm md:text-base text-slate-600">
            Update your name and email in this section. Note: this information will be public to all your project colleagues and can be changed anytime.
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-2/4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="p-1 border rounded-md border-gray-300 w-full"
                placeholder="New first name"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="p-1 border rounded-md border-gray-300 w-full"
                placeholder="New last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border rounded-md border-gray-300"
              placeholder="New e-mail"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col md:flex-row justify-between border-b border-b-gray-400 pb-4 ml-4 md:ml-10 mr-4 md:mr-10">
        <div className="mb-4 md:mb-0 md:mr-12 w-full md:w-96">
          <h2 className="text-base font-medium">Profile Picture</h2>
          <p className="text-sm md:text-base text-slate-600">
            Update your profile picture. Supported files are JPG, PNG, WebP and JPEG.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-1/2">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <img src={userImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col space-y-2 mt-4 md:mt-0">
            <label className="text-sm font-medium text-gray-700">
              Add new profile picture
            </label>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 w-full md:w-80">
              <input
                type="text"
                value="imageattachment.jpg"
                readOnly
                className="bg-gray-100 text-gray-700 text-sm w-full p-1 rounded-md"
              />
              <button className="text-gray-500 hover:text-gray-700">
                <img src={uploadBin} alt="bin icon" className="w-4 h-4" />
              </button>
            </div>
            <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col items-center text-gray-500 w-full md:w-80">
              <img src={uploadImg} alt="arrow icon" className="w-6 h-6" />
              <p className="text-sm mt-2">Drop here to attach or <span className="text-blue-500 cursor-pointer">upload</span></p>
              <p className="text-xs mt-1 text-gray-400">Max size: 5GB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col md:flex-row justify-between border-b border-b-gray-400 pb-4 ml-4 md:ml-10 mr-4 md:mr-10">
        <div className="mb-4 md:mb-0 md:mr-12 w-full md:w-96">
          <h2 className="text-base font-medium">Communication</h2>
          <p className="text-sm md:text-base text-slate-600">
            Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="tasks-checkbox"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="tasks-checkbox" className="text-sm font-medium text-gray-700 ml-2">New tasks</label>
          </div>
          <small className="text-gray-500">Receive an e-mail alert each time a new task is assigned to me in a project.</small>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="members-checkbox"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="members-checkbox" className="text-sm font-medium text-gray-700 ml-2">New team members</label>
          </div>
          <small className="text-gray-500">Receive an e-mail alert each time a team member enters a project I’m assigned to.</small>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="reports-checkbox"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="reports-checkbox" className="text-sm font-medium text-gray-700 ml-2">Weekly reports</label>
          </div>
          <small className="text-gray-500">Receive a weekly e-mail with a basic report, including estimated time and most active members.</small>
        </div>
      </div>

      <div className="pt-2 ml-5 md:ml-10 flex flex-col md:flex-row justify-between">
        <div className="mr-0 md:mr-12 w-full md:w-96">
          <h2 className="text-base font-medium">Social information</h2>
          <p className="text-sm md:text-base text-slate-600">
            Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.
          </p>
        </div>
      <div className="flex flex-col space-y-4 w-full md:w-1/2 mt-4 md:mt-0 mr-5 md:mr-10">
        <div>
          <label className="text-xs font-normal text-gray-700 mb-1 block">Twitter/X</label>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-lg"
            placeholder="x.com/"
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="TheJohnDoe"
          />
        </div>
        </div>
      <div>
          <label className="text-xs font-normal text-gray-700 mb-1 block">Instagram</label>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-lg"
            placeholder="instagram.com/"
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="TheJohnDoe"
          />
        </div>
        </div>
      <div>
        <label className="text-xs font-normal text-gray-700 mb-1 block">LinkedIn</label>
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-lg"
            placeholder="linkedin.com/in/"
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="TheJohnDoe"
          />
        </div>
      </div>
      </div>
      </div>

      <div className="flex flex-col items-center space-y-2 pt-16 pb-16 ml-5 mr-5 md:ml-10 md:mr-10">
        <button className="bg-primary text-white w-full md:w-1/3 h-12 p-4 rounded-md flex items-center justify-center">
          Update Information
        </button>
        <small className="text-center text-gray-500">
          Never mind, take me <span className="text-blue-600 underline cursor-pointer">back to my project.</span>
        </small>
      </div>
      <Footer />
    </div>
  );
};

export default User;
