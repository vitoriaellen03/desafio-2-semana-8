import { useUser } from "@clerk/clerk-react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import user1 from "/img/userImgProfile.png";
import user2 from "/img/user2.png";
import db from "../data/db.json";

const Profile = () => {
  const { user } = useUser();

  const userData = db.users.find((dbUser) => dbUser.email === user?.primaryEmailAddress?.emailAddress);
  const usermail = userData?.jobPosition;
  console.log(usermail);

  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto my-8 flex flex-col md:flex-row bg-light-blue p-8 rounded-md justify-center">
        <div className="flex flex-col w-full md:w-[45%] pr-8">
          <div className="flex items-center mb-6">
            <div>
              <img src={user?.hasImage ? user.imageUrl : user1} alt="Profile picture of the user" className="w-48 h-46 rounded-6 mb-4" />
            </div>
            <div className="ml-3">
              <h1 className="text-4xl font-medium">{userData?.firstName} {userData?.lastName}</h1>
              <p className="text-gray-500">{userData?.user}</p>
            </div>
          </div>

          <div className="mb-8 border-b border-b-gray-300">
            <h1 className="text-3xl font-medium">Profile data</h1>
            <p className="text-base font-normal text-gray-500 mb-8">
              {userData?.firstName} {userData?.lastName}'s information
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-medium">Contact</h1>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2 mt-2">
              <h3 className="font-semibold text-gray-500">E-mail</h3>
              <p className="text-gray-500">{userData?.email}</p>
              <h3 className="font-semibold text-gray-500">Twitter/X</h3>
              <p className="text-gray-500">{userData?.socialNetworks?.twitter}</p>
              <h3 className="font-semibold text-gray-500">Instagram</h3>
              <p className="text-gray-500">{userData?.socialNetworks?.instagram}</p>
              <h3 className="font-semibold text-gray-500">LinkedIn</h3>
              <p className="text-gray-500">{userData?.socialNetworks?.linkedin}</p>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-medium">Details</h1>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2 mt-2">
              <h3 className="font-semibold text-gray-500">User ID</h3>
              <p className="text-gray-500">{userData?.id}</p>
              <h3 className="font-semibold text-gray-500">Creation date</h3>
              <p className="text-gray-500">{userData?.createdAt}</p>
              <h3 className="font-semibold text-gray-500">Title</h3>
              <p className="text-gray-500">{userData?.jobPosition}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 pl-0 md:pl-8 border-t md:border-t-0 md:border-l-2 border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-medium">Latest activity</h1>
            <p className="text-base font-normal text-gray-500">
              {db.users[0].firstName} {db.users[0].lastName}'s last interactions
            </p>
            <div className="mt-6 mb-10 space-y-4">
            <div className="flex items-center">
              <img src={user1} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-900">John Doe</span> marked a task as done <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user2} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">Jane Doe</span> added John Doe in a task <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user1} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">John Doe</span> marked a task as done <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user1} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">John Doe</span> marked a task as done <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user2} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">Jane Doe</span> added John Doe in a task <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user1} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">John Doe</span> marked a task as done <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            <div className="flex items-center">
              <img src={user1} alt="profile picture" className="w-10 h-10 rounded-full" />
              <p className="text-base font-medium text-gray-500 ml-2"><span className="text-slate-950">John Doe</span> marked a task as done <span className="text-slate-950">on Set 25, 2024</span></p>
            </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-medium">Weekly report</h1>
            <p className="text-base font-normal text-gray-500">Tasks estimate</p>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2 mt-2">
              <h2 className="font-semibold mt-4">Total tasks assigned</h2>
              <p className="text-xl font-bold content-end text-[#4F46E5] mt-3">
                {db.tasks[0].numberOfTasksCompleted}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2 mt-2">
              <h2 className="font-semibold mt-4">Average work time</h2>
              <p className="text-xl font-bold content-end text-[#4F46E5] mt-3">
                {db.tasks[0].estimatedTimeOfCompletion}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
