import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import user1 from "/img/userImgProfile.png";
import db from "../data/db.json";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto my-8 flex bg-light-blue p-8 rounded-md justify-center">
        <div className="flex flex-col w-[45%] pr-8">
          <div className="flex items-center mb-6">
            <div>
            <img src={user1} alt="Profile picture of the user" className="w-auto rounded-6 mb-4" />
            </div>
            <div className="ml-3">
            <h1 className="text-4xl font-medium">{db.users[0].firstName} {db.users[0].lastName}</h1>
            <p className="text-gray-500">{db.users[0].user}</p>
            </div>
          </div>

          <div className="mb-8 border-b border-b-gray-300">
            <h1 className="text-3xl font-medium">Profile data</h1>
            <p className="text-base font-normal text-gray-500 mb-8">{db.users[0].firstName} {db.users[0].lastName}'s information</p>
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-medium">Contact</h1>
          <div>
          <div className="mt-2 flex justify-between w-full">
            <h3 className="font-semibold">E-mail</h3>
            <p className="text-right">{db.users[0].email}</p>
          </div>
          <div className="mt-2 flex justify-between w-full">
            <h3 className="font-semibold">Twitter/X</h3>
            <p className="text-right">{db.users[0].sociaNetwork[0]}</p>
          </div>
          <div className="mt-2 flex justify-between w-full">
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-right">{db.users[0].sociaNetwork[1]}</p>
          </div>
          <div className="mt-2 flex justify-between w-full">
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-right">{db.users[0].sociaNetwork[2]}</p>
          </div>
          </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-medium">Details</h1>
            <div className="mt-2 flex justify-between w-full">
              <h3 className="font-semibold">User ID</h3>
              <p>{db.users[0].id}</p>
            </div>
            <div className="mt-2 flex justify-between w-full">
              <h3 className="font-semibold">Creation date</h3>
              <p>{db.users[0].creationDate}</p>
            </div>
            <div className="mt-2 flex justify-between w-full">
              <h3 className="font-semibold">Title</h3>
              <p>{db.users[0].role}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 pl-8 border-l-2 border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-medium">Latest activity</h1>
            <p className="text-base font-normal text-gray-500">{db.users[0].firstName} {db.users[0].lastName}'s last interactions</p>
            <div className="mt-4 space-y-4">
              <p>Nothing to see here</p>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-medium">Weekly report</h1>
            <p className="text-base font-normal text-gray-500">Tasks estimate</p>
            <div className="mt-4 flex justify-between w-full">
              <h2 className="font-semibold">Total tasks assigned</h2>
              <p className="text-xl font-bold content-end text-blue-500">{db.tasks[0].numberOfTasksCompleted}</p>
            </div>
            <div className="mt-1 flex justify-between w-full">
              <h2 className="font-semibold mt-4">Average work time</h2>
              <p className="text-xl font-bold content-end text-blue-500">{db.tasks[0].estimatedTimeOfCompletion}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
