import React, {useState, useEffect} from 'react';
import image from '../../assets/john.avif'
import axios from 'axios';

const ProfilePage = () => {
  
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
      const fetchUserInfo = async () => {
          try {
              const response = await axios.get('http://localhost:4000/api/users/me',
              {withCredentials: true});
              console.log(response.data);
              setUserInfo(response.data);    
          } catch (error) {
              console.error(error);
          }
      };
      fetchUserInfo();
  }, []);
  

  return (
<div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
  <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
    <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
      <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
      <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
        Pubic Profile
      </a>
      <a href="#" className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full">
        Account Settings
      </a>
      <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
        Notifications
      </a>
      <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
        PRO Account
      </a>
    </div>
  </aside>
  <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
    <div className="p-2 md:p-4">
      <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
        <div className="grid max-w-2xl mx-auto mt-8">
          <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-black" src={image} alt="Bordered avatar" />
            <div className="flex flex-col space-y-5 sm:ml-8">
              <button type="button" className="py-3.5 px-7 text-base font-medium text-black focus:outline-none bg-customOrange rounded-lg border border-black hover:bg-customHov focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                Change picture
              </button>
              <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-customOre rounded-lg border border-black hover:bg-white hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                Delete picture
              </button>
            </div>
          </div>
          <div className="items-center mt-8 sm:mt-14 text">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <p>First Name</p>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                  first name</label>
                <input type="text" id="first_name" className="bg-zinc-50 border border-black text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your first name" defaultValue={userInfo.firstName} required />
              </div>
              <div className="w-full">
              <p>Last Name</p>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                  last name</label>
                <input type="text" id="last_name" className="bg-zinc-50 border border-black text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="Your last name" defaultValue={userInfo.lastName} required />
              </div>
            </div>
            <div className="mb-2 sm:mb-6">
            <p>Email</p>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                email</label>
              <input type="email" id="email" className="bg-zinc-50 border border-black text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="your.username" defaultValue={userInfo.email}required />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="text-white bg-black  hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

  );
};

export default ProfilePage;