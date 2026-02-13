import './App.css'
import { useEffect, useState } from 'react';
import icon from './assets/images/siteIcon.png'
import NavbarComponent from './NavbarComponent';
import code from './assets/images/githubIcon.svg'

type Dev = {
    name: string;
    image: string;
}

function HomePage() {
  const [developer, setDeveloper] = useState<Dev[]>([]); //empty array to store developers

  const loadDevs = async () => { //get developers from api
    try {
      const res = await fetch("http://localhost:3000/api/team");
      const data = await res.json();
      setDeveloper(data); // update with developers
    } 
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { //load developers on page load
    loadDevs();
  }, []);

    return (
        <>
            <div className='bg-[#D496BB] min-h-full'>
                <NavbarComponent />
                <div className='px-32'>
                    <h1 className='text-8xl font-bold text-center mt-8 text-white'> Harmonia </h1>
                    <p className='text-desc font-bold text-center text-white'> Your Personal Music Diary </p>
                    <div className='w-full flex items-center justify-center mt-12'>
                        <div className='w-1/2 bg-white h-128 flex items-center justify-center rounded-l-2xl shadow-md'>
                            <img src={icon} alt="Amber" className="w-80% h-full object-fit"></img>
                        </div>
                        <div className='w-1/2 bg-[#EFBFE9] text-[#934774] h-128 px-12 rounded-r-2xl shadow-md'>
                            <h2 className='text-center my-8 font-bold text-4xl'> What is Harmonia? </h2>
                            <p className='text-lg'>
                                Harmonia is designed to help music lovers to organize their album collections. It is a music album tracking app inspired by Letterboxd. We are the one-stop app for tracking and reflecting on your listening habits.
                                <br /><br />
                                With Harmonia, you can easily add albums to your profile, view your album collection, and keep track of your listening history. Whether you’re a casual listener or a music enthusiast, Harmonia is the perfect app for you to organize your music collection and reflect on your listening habits.
                            </p>
                            <div className="flex-col gap-2 ml-auto py-2 font-bold">
                                <p className='pb-2'> GitHub Page: </p>
                                <a href="https://github.com/rhamood/Audio-Content-Application" className="size-10 flex justify-center items-center transition duration-300 ease-in-out border p-2 rounded bg-[#edc0d3] hover:bg-[#d19fb4]">
                                <img src={code} alt="code icon" className="w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center my-8 font-bold text-6xl text-white'> How Harmonia Works? </h2>
                    <div className='w-full space-x-8 flex justify-center mt-12 pb-12'>
                        <div className='w-1/3 h-96 bg-white flex justify-center pt-8 px-8 shadow-md rounded-2xl transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'>
                            <div className='flex-row justify-center items-center text-[#a95f9f]'>
                                <h3 className='font-bold text-2xl text-center'> View your Profile </h3>
                                <div className='gap-4 flex flex-col mt-4'>
                                    <p>
                                        View your profile to see your album collection, your favorite albums, and your listening history.
                                    </p>
                                    <p>
                                        You can also edit your profile information and customize your profile page to reflect your music taste.
                                    </p>
                                    <p>
                                        Your profile is your personal music diary, where you can keep track of your musical journey and share it with others.
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 h-96 bg-white flex justify-center pt-8 px-8 shadow-md rounded-2xl transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'>
                            <div className='flex-row justify-center items-center text-[#a95f9f]'>
                                <h3 className='font-bold text-2xl text-center '> Add an Album </h3>
                                <div className='gap-4 flex flex-col mt-4'>
                                    <p>
                                        Add albums to your profile to keep track of your music collection and listening history.
                                    </p>
                                    <p>
                                        Visit the discography page to browse albums and add them to your profile with a click of a button.
                                    </p>
                                    <p>
                                        Get access to the top albums in the world and discover new music to add to your collection.
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 h-96 bg-white flex justify-center pt-8 px-8 shadow-md rounded-2xl transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'>
                            <div className='flex-row justify-center items-center text-[#a95f9f]'>
                                <h3 className='font-bold text-2xl text-center'> Delete an Album </h3>
                                <div className='gap-4 flex flex-col mt-4'>
                                    <p>
                                       Change your music taste? No problem! You can easily delete albums from your profile to keep your music collection up to date.
                                    </p>
                                    <p>
                                        Visit your profile page to view your album collection and delete albums with a click of a button.
                                    </p>
                                    <p>
                                        Keep your music diary organized and up to date with Harmonia.
                                    </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center my-8 font-bold text-6xl text-white'>  Meet the Devs </h2>
                    <div className='w-full space-x-8 flex items-center justify-center mt-12 pb-12'>
                    { developer.map(developers => (
                        <div className='group relative flex-col'>
                                <img src={developers.image} alt={developers.name} className="w-80% h-96 object-fit flex justify-center group-hover:opacity-50 transition duration-300 group-hover:brightness-30"></img>
                            <div className='absolute inset-0 left-0 right-0 top-1/2 duration-300 pointer-events-none'>
                                <p className='text-center hidden group-hover:block text-black font-bold text-2xl'> {developers.name} </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
