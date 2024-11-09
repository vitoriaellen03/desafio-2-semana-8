import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import userImg from "/img/userImg.png";
import uploadImg from "/img/uploadImg.png";
import uploadBin from "/img/uploadBin.png";

interface Preferences {
  tasks: boolean;
  members: boolean;
  reports: boolean;
}

const User = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    socialNetworks: {
      twitter: '',
      instagram: '',
      linkedin: '',
    }
  });
  const [imagePreview, setImagePreview] = useState(user?.imageUrl || '');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preferences, setPreferences] = useState<Preferences>({
    tasks: false,
    members: false,
    reports: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File size exceeds 5GB');
        return;
      }

      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleClearImage = () => {
    setImagePreview('');
    setSelectedImage(null);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const newPreferences = { ...preferences, [id]: checked };
    setPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
  };

  const handleSocialNetworkChange = (e: React.ChangeEvent<HTMLInputElement>, platform: string) => {
    setUserData(prevData => ({
      ...prevData,
      socialNetworks: {
        ...prevData.socialNetworks,
        [platform]: e.target.value,
      }
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const updatedFields = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        socialNetworks: userData.socialNetworks,
      };
  
      const response = await fetch('http://localhost:3000/users/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
  
      alert('User information updated successfully!');
      
      const updatedResponse = await fetch('http://localhost:3000/users/1');
      const updatedData = await updatedResponse.json();
      setUserData(updatedData);
      
    } catch (error) {
      console.error("Failed to update user data", error);
      alert('Failed to update user information!');
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    navigate('/kanban');
  };


  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center ml-4 md:ml-10 mt-8 md:mt-16">
        <img 
        src={user?.imageUrl || userImg}
        alt="user's profile photo" 
        className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full" 
        />
        <div className="flex flex-col md:ml-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-medium">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-sm md:text-lg font-normal text-slate-600">
            {user?.primaryEmailAddress?.emailAddress}
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
                name='firstName'
                value={userData.firstName}
                placeholder="New first name"
                onChange={handleInputChange}
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
                name='lastName'
                value={userData.lastName}
                placeholder="New last name"
                onChange={handleInputChange}
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
              name='email'
              value={userData.email}
              placeholder="New e-mail"
              onChange={handleInputChange}
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
            <img src={imagePreview || user?.imageUrl} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col space-y-2 mt-4 md:mt-0">
            <label className="text-sm font-medium text-gray-700">
              Add new profile picture
            </label>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 w-full md:w-80">
              <input
                type="text"
                value={selectedImage ? selectedImage.name : 'No file chosen'}
                readOnly
                className="bg-gray-100 text-gray-700 text-sm w-full p-1 rounded-md"
              />
              <button onClick={handleClearImage} className="text-gray-500 hover:text-gray-700">
                <img src={uploadBin} alt="bin icon" className="w-4 h-4" />
              </button>
            </div>
            <div className="border-dashed border-2 border-gray-300 rounded-md p-6 flex flex-col justify-center items-center text-center text-gray-500 w-full md:w-80">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
              <img src={uploadImg} alt="arrow icon" className="w-6 h-6" />
              <p className="text-sm mt-2">Drop here to attach or <span className="text-blue-500 cursor-pointer">upload</span></p>
              <p className="text-xs mt-1 text-gray-400">Max size: 5GB</p>
            </label>
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
              id="tasks"
              checked={preferences.tasks}
              onChange={handleCheckboxChange}
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="tasks-checkbox" className="text-sm font-medium text-gray-700 ml-2">New tasks</label>
          </div>
          <small className="text-gray-500">Receive an e-mail alert each time a new task is assigned to me in a project.</small>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="members"
              checked={preferences.members}
              onChange={handleCheckboxChange}
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="members-checkbox" className="text-sm font-medium text-gray-700 ml-2">New team members</label>
          </div>
          <small className="text-gray-500">Receive an e-mail alert each time a team member enters a project I’m assigned to.</small>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="reports"
              checked={preferences.reports}
              onChange={handleCheckboxChange}
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
            value={userData.socialNetworks.twitter}
            onChange={(e) => handleSocialNetworkChange(e, 'twitter')}
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder={userData.socialNetworks.twitter}
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
            value={userData.socialNetworks.instagram}
            onChange={(e) => handleSocialNetworkChange(e, 'instagram')}
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder={userData.socialNetworks.instagram}
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
            value={userData.socialNetworks.linkedin}
            onChange={(e) => handleSocialNetworkChange(e, 'linkedin')}
          />
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder={userData.socialNetworks.linkedin}
          />
        </div>
      </div>
      </div>
      </div>

      <div className="flex flex-col items-center space-y-2 pt-16 pb-16 ml-5 mr-5 md:ml-10 md:mr-10">
        <button
          className="bg-primary text-white w-full md:w-1/3 h-12 p-4 rounded-md flex items-center justify-center"
          onClick={handleSubmit}
          disabled={loading}
        >
          Update Information
        </button>
        <small className="text-center text-gray-500">
          Never mind, take me  
          <span
          onClick={handleRedirect}
          className="text-blue-600 underline cursor-pointer ml-1"
          >
            back to my project.
          </span>
        </small>
      </div>
      <Footer />
    </div>
  );
};

export default User;
