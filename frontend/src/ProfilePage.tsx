import NavbarComponent from "./NavbarComponent";
import { useEffect, useState } from "react";
import userIcon from "/siteimages/user.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal } from 'react-responsive-modal';
import React from "react";
import 'react-responsive-modal/styles.css';

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
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [note, setNote] = useState('');

  const myRef = React.useRef(null);


  const loadProfileAlbums = async () => { //get albums 
    try {
      const res = await fetch("http://localhost:8080/api/profile/albums");
      const data = await res.json();
      setProfileAlbums(data); // update with albums added to profile
    } 
    catch (err) {
      console.error(err);
    }
  };

  const deleteAlbum = async (id: number) => { // delete album from profile with 
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

  const rateAlbum = async (id: number) => {
  const answer = window.prompt("Rate the Album: 1, 2, 3, 4, or 5");
  const nanswer = Number(answer);

  if (!nanswer || nanswer < 1 || nanswer > 5) return;

  let theRating = "";
  for (let i = 0; i < nanswer; i++) {
    theRating += "📀";
  }

  const answerReview = window.prompt("Would you like to also add a review?");
  if(answerReview == null){
    return;
  } 

  // save to backend
  await fetch("http://localhost:8080/api/profile/albums/" + id + "/rating", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rating: theRating , review: answerReview}),
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
};









  useEffect(() => { //load albumns on page load
    loadProfileAlbums();
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
        <h1 className='text-6xl font-bold text-white'>Welcome Jane Doe</h1>
    </div>
      <p className='text-desc font-bold text-center mt-8 text-white'> Your Saved Albums </p>

      
      
      <div className='px-32'>
        <div className='flex flex-row flex-wrap justify-center gap-4 py-8'>
          {profileAlbums.map(album => (
            <div key={album.albumid} className='w-1/4 bg-white flex justify-center flex-col items-center p-4'>
              <img src={`http://localhost:8080${album.Image}`} alt={album.album} className="w-full h-full object-cover" />
              <br></br>
              <h3 className='font-bold text-2xl text-center'> {album.album} </h3>
              <br></br>
              <h3 className='font-bold text-1xl'> {album.artist}  </h3>
              <br></br>
              <h2 className='font-bold text-2xl'> {album.rating} </h2>
              <h2 className='font-bold text-1xl text-sm text-yellow-500'> {album.review} </h2>

        
      <div>
      <button onClick={onOpenModal} className="w-50 p-4 font-bold mt-4 text-white border border-white bg-pink-400 hover:scale-105 transition duration-300 ease-in-out">Rate Album</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-85 h-55 text-center ">
          
                  <h2> How many Golden CDs do you rate it?</h2>
                  <br></br>
                  <div className="text-4xl">
                  <button onClick={() => star1(album.albumid)}> 📀 </button>
                  <button onClick={() => star2(album.albumid)}> 📀 </button>
                  <button onClick={() => star3(album.albumid)}> 📀 </button>
                  <button onClick={() => star4(album.albumid)}> 📀 </button>
                  <button onClick={() => star5(album.albumid)}> 📀 </button>
                  </div>
                  <br></br>
                  <h2> Would you like to also add a review?</h2>
                  <br></br>
                    <form onSubmit={(e) => {e.preventDefault(); myReview(album.albumid);}}>
          
          <input 
            type="text" 
            placeholder="My Review" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required 
          />
          <button type="submit">Enter</button>
        </form>
         </div>
      </Modal>
      </div>

    <button onClick={() => deleteAlbum(album.albumid)} className="w-50 p-4 font-bold mt-4 text-white border border-white bg-gray-400 hover:scale-105 transition duration-300 ease-in-out">Remove Album</button>


            </div>
          ))}
        </div>

      
  
      </div>

    </div>
  );
}
export default ProfilePage;