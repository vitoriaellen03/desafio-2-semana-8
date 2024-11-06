import Footer from "../components/Footer";
import Header from "../components/Header";
import userImg from "/img/userImg.png"
import db from "../data/db.json"

const User = () => {
  return (
  <div>
    <Header />
    <div className="container flex ml-10">
      <div>
      <img src={userImg} alt="user's profile photo" className="w-174 h-181" />
      </div>
      <div className="flex flex-col justify-center ml-3">
      <h1 className="text-5xl font-medium">{db.users[0].firstName} {db.users[0].lastName}</h1>
      <p className="text-lg font-normal text-slate-600">{db.users[0].email}</p>
      </div>
    </div>
    <div className="mt-5 ml-10 mr-10 border-b border-b-gray-400 pb-4">
      <h1 className="text-2xl font-medium">Project Profile</h1>
      <p className="text-base font-normal text-slate-600">Update your profile information in the sections below</p>
    </div>

    <div className="pt-2 flex border-b border-b-gray-400 pb-4 ml-10 mr-10">
      <div className="mr-12">
        <h2 className="text-base font-medium">Basic Information</h2>
        <p className="text-xs text-slate-600">Update your name and email in this section. Note: this information will be public to all your project colleagues and can be changed anytime.</p>
      </div>
      <div className="flex flex-col ml-1 mr-10 p-4 w-full">
      <div className="flex space-x-4">
      <div className="flex flex-col w-1/2">
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
      <div className="flex flex-col w-1/2">
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
    <div className="mt-4">
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

    <div className="pt-2 flex border-b border-b-gray-400 pb-4 ml-10 mr-10">
      <div className="mr-12">
        <h2 className="text-base font-medium">Profile Picture</h2>
        <p className="text-xs text-slate-600">Update your profile picture. Supported files are JPG, PNG, WebP and JPEG.</p>
      </div>
    <div className="flex items-center space-x-14 ml-11">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={userImg} alt="Profile" className="w-full h-full object-cover" />
      </div>
    <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium text-gray-700">Add new profile picture</label>
    <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 w-80">
      <input
        type="text"
        value="imageattachment.jpg"
        readOnly
        className="bg-gray-100 text-gray-700 text-sm w-full p-1 rounded-md"
      />
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col items-center text-gray-500 w-80">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm10 7v3m-4-3v3m-4 3h8v2m-6 2h4" />
      </svg>
      <p className="text-sm mt-2">Drop here to attach or <span className="text-blue-500 cursor-pointer">upload</span></p>
      <p className="text-xs mt-1 text-gray-400">Max size: 5GB</p>
    </div>
    </div>
    </div>
    </div>

    <div className="pt-2 flex border-b border-b-gray-400 pb-4 ml-10 mr-10">
      <div className="mr-12 w-96">
        <h2 className="text-base font-medium">Communication</h2>
        <p className="text-xs text-slate-600">Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.</p>
    </div>
    <div className="flex flex-col justify-center space-y-4 ml-16">
     <div>
        <div className="flex items-center">
          <input type="checkbox" id="tasks-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
          <label htmlFor="tasks-checkbox" className="text-sm font-medium text-gray-700 ml-2">New tasks</label>
        </div>
        <small className="text-gray-500">Receive an e-mail alert each time a new task is assigned to me in a project.</small>
     </div>
     <div>
        <div className="flex items-center">
          <input type="checkbox" id="members-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
          <label htmlFor="members-checkbox" className="text-sm font-medium text-gray-700 ml-2">New team members</label>
        </div>
        <small className="text-gray-500">Receive an e-mail alert each time a team member enters a project I’m assigned to.</small>
     </div>
     <div>
        <div className="flex items-center">
          <input type="checkbox" id="reports-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
          <label htmlFor="reports-checkbox" className="text-sm font-medium text-gray-700 ml-2">Weekly reports</label>
        </div>
        <small className="text-gray-500">Receive a weekly e-mail with a basic report, including estimated time and most active members.</small>
     </div>
     </div>
     </div>

    <div className="pt-2 ml-10 flex">
      <div className="mr-12 w-96">
        <h2 className="text-base font-medium">Social information</h2>
        <p className="text-xs text-slate-600">Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.</p>
      </div>
    <div className="flex flex-col space-y-4 ml-16">
    <div>
      <label className="text-xs font-normal text-gray-700 mb-1 block">Twitter/X</label>
      <div className="flex space-x-2">
        <input type="text" className="flex-1 p-2 border border-gray-300 rounded-md" placeholder="x.com/" />
        <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="TheJohnDoe" />
      </div>
    </div>
    <div>
      <label className="text-xs font-normal text-gray-700 mb-1 block">Instagram</label>
      <div className="flex space-x-2">
        <input type="text" className="flex-1 p-2 border border-gray-300 rounded-md" placeholder="instagram.com/" />
        <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="TheJohnDoe" />
      </div>
    </div>
    <div>
      <label className="text-xs font-normal text-gray-700 mb-1 block">LinkedIn</label>
      <div className="flex space-x-2">
        <input type="text" className="flex-1 p-2 border border-gray-300 rounded-md" placeholder="linkedin.com/in/" />
        <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="TheJohnDoe" />
      </div>
    </div>
    </div>
    </div>

    <div className="flex flex-col items-center space-y-2 pt-32 pb-32">
      <button className="bg-primary text-white w-1/3 h-12 p-4 rounded-md flex items-center justify-center">Update Information</button>
      <small className="text-center text-gray-500">Never mind, take me <span className="text-blue-600 underline cursor-pointer">back to my project.</span></small>
    </div>
    <Footer />
  </div>
  );
}

export default User;