// Profile Page - shows user's albums added to profile, delete albums, write and delete reviews and ratings

import NavbarComponent from "./NavbarComponent";
import { useEffect, useState } from "react";
import userIcon from "/siteimages/user.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal } from 'react-responsive-modal';
import React from "react";
import 'react-responsive-modal/styles.css';
import trashIcon from "./assets/images/trash.png";

//define structure of album data from backend API
type Album = {
  albumid: number;
  hasImage: boolean;
  Image: string;
  album: string;
  artist: string;
  rating: string;
  review: string;
};

function ProfilePage() {
  const [profileAlbums, setProfileAlbums] = useState<Album[]>([]); //empty array to store albums added to profile
  const [open, setOpen] = useState<number | null>(null); // control which modal is open based on albumn id
  const [note, setNote] = useState('');// stores review note
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const myRef = React.useRef(null);


  const loadProfileAlbums = async () => { //get albums from backend
    try {
      const res = await fetch("http://localhost:8080/api/profile/albums");
      const data = await res.json();
      setProfileAlbums(data); // update with albums added to profile
    }
    catch (err) {
      console.error(err);
    }
  };

  const deleteAlbum = async (id: number) => { // delete album from profile  
    try {
      await fetch("http://localhost:8080/api/profile/albums/" + id, {
        method: "DELETE",
      });
      setProfileAlbums(prev => prev.filter(album => album.albumid !== id)); // remove albumn from state to update page
    }
    catch (err) {
      console.error(err);
    }
  };

  //Rate albumn functions for user rating and reviews
  const rateAlbum = async (id: number) => {
    const answer = window.prompt("Rate the Album: 1, 2, 3, 4, or 5");
    const nanswer = Number(answer);

    if (!nanswer || nanswer < 1 || nanswer > 5) return;

    let theRating = "";
    for (let i = 0; i < nanswer; i++) {
      theRating += "📀";
    }

    const answerReview = window.prompt("Would you like to also add a review?");
    if (answerReview == null) {
      return;
    }

    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: theRating, review: answerReview }),
    });

    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = theRating;
    album.review = answerReview;
    setProfileAlbums([...profileAlbums]);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ratings
  const star1 = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '📀' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '📀';
    setProfileAlbums([...profileAlbums]);
  };
  const star2 = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '📀📀' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '📀📀';
    setProfileAlbums([...profileAlbums]);
  };
  const star3 = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '📀📀📀' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '📀📀📀';
    setProfileAlbums([...profileAlbums]);
  };
  const star4 = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '📀📀📀📀' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '📀📀📀📀';
    setProfileAlbums([...profileAlbums]);
  };
  const star5 = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '📀📀📀📀📀' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '📀📀📀📀📀';
    setProfileAlbums([...profileAlbums]);
  };
  // interactive UI - stars are highlighted based on user selectection
  const getRatingClass = (num: number) => {
    if (selectedRating === 0) return "text-gray-400";
    if (num <= selectedRating) return "text-yellow-400 scale-110";
    return "text-gray-400 opacity-50";
  };


  const removeRating = async (id: number) => {
    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: '', review: '' }),
    });
    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    album.rating = '';
    album.review = '';
    setProfileAlbums([...profileAlbums]);
  };


  //////////////////////////////////////////////////////////////////////////////////////////////////////////// review
  const myReview = async (id: number) => {

    // update UI
    const album = profileAlbums.find(a => a.albumid === id);
    if (!album) return;

    if (note) {
      album.review = note;
    }

    // save to backend
    await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review: album.review }),
    });

    setProfileAlbums([...profileAlbums]);
    setNote("");

    setOpen(null); // close modal after submitting review
  };

  const [username, setUsername] = useState("");


  useEffect(() => { //load albumns on page load
    loadProfileAlbums();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const name = parsedUser.name.split("@")[0]; // Extract the part before '@'
      setUsername(name);
    }
  }, []);

  return (
    <div className='bg-[#D496BB] min-h-screen'>
      <NavbarComponent />
      <div className='flex items-center justify-center mt-8 gap-4'>
        <img
          src={userIcon}
          alt="Profile Icon"
          className='w-24 h-24'
        />
        <h1 className='text-xl md:text-4xl lg:text-6xl font-bold text-white text-center'>Welcome {username || "Guest"} </h1>
      </div>
      <p className='text-desc font-bold text-center text-white'> Your Saved Albums </p>
      <div className='px-32'>
        {/* grid columns change based on screen size to avoid overlap */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
          {profileAlbums.map(album => (
            <div key={album.albumid} className='w-full bg-white flex justify-center flex-col p-4'>
              <div className="text-right">
                <button> <img src={trashIcon} alt="my image" onClick={() => deleteAlbum(album.albumid)} className="w-4 hover:scale-105 transition duration-300 ease-in-out " /></button>
              </div>
              <img src={`http://localhost:8080${album.Image}`} alt={album.album} className="w-full h-full text-center object-cover" />
              <br></br>
              <h3 className='font-bold text-xl lg:text-2xl text-center'> {album.album} </h3>
              <br></br>
              <h3 className='font-bold text-md lg:text-xl text-center'> {album.artist}  </h3>
              <br></br>
              <h2 className='font-bold text-2xl text-center'> {album.rating} </h2>
              <h2 className='font-bold text-md lg:text-xl text-sm text-center text-yellow-500'> {album.review} </h2>


              <div className="flex flex-wrap items-center justify-center">
                {/* rate album that pops a modal when clicked */}
                <div className="text-center">
                  <button onClick={() => {setSelectedRating(0); setOpen(album.albumid)}} className="w-40 p-4 font-bold mt-4 text-white border border-white bg-pink-400 hover:scale-105 transition duration-300 ease-in-out text-center">Rate Album</button>
                </div>
                <Modal open={open === album.albumid} onClose={() => setOpen(null)} center>
                  <div className="w-85 h-55 text-center ">
                    <h2> How many Golden CDs do you rate it?</h2>
                    <br></br>
                    <div className="text-4xl">
                      {[1, 2, 3, 4, 5].map((num) => (
                      <button key={num} onClick={() => {
                          setSelectedRating(num);
                          if (num === 1) star1(album.albumid);
                          if (num === 2) star2(album.albumid);
                          if (num === 3) star3(album.albumid);
                          if (num === 4) star4(album.albumid);
                          if (num === 5) star5(album.albumid);
                        }}
                        className={`transition ${getRatingClass(num)}`}>📀
                      </button> 
                    ))}
                    </div>
                    <br></br>
                    <h2> Would you like to also add a review?</h2>
                    <br></br>
                    <form onSubmit={(e) => { e.preventDefault(); myReview(album.albumid); }}>

                      <input
                        type="text"
                        placeholder="My Review"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        // so user can submit review by pressing 'Enter' on keyboard as well as the Enter button on form 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            myReview(album.albumid);
                          }
                        }}
                        required
                      />
                      <button className="pl-4" type="submit"> Enter</button>
                    </form>
                  </div>
                </Modal>
                <div className="text-center">
                  <button onClick={() => removeRating(album.albumid)} className="w-40 p-4 font-bold mt-4 text-white border border-white bg-gray-400 hover:scale-105 transition duration-300 ease-in-out text-center">Remove Rating</button>
                </div>
              </div>

            </div>
          ))}
        </div>



      </div>

    </div>
  );
}
export default ProfilePage;