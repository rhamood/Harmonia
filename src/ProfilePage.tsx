import NavbarComponent from "./NavbarComponent";
import { useEffect, useState } from "react";

type Album = {
  albumid: number;
  hasImage: boolean;
  Image: string;
  album: string;
  artist: string;
};


function ProfilePage() {
  const [profileAlbums, setProfileAlbums] = useState<Album[]>([]); //empty array to store albums added to profile

  const loadProfileAlbums = async () => { //get albums 
    try {
      const res = await fetch("http://localhost:3000/api/profile/albums");
      const data = await res.json();
      setProfileAlbums(data); // update with albums added to profile
    } 
    catch (err) {
      console.error(err);
    }
  };

  const deleteAlbum = async (id: number) => { // delete album from profile with 
    try {
      await fetch("http://localhost:3000/api/profile/albums/" + id, {
        method: "DELETE",
      });
      setProfileAlbums(prev => prev.filter(album => album.albumid !== id)); // remove albumn from state to update page
    } 
    catch (err) {
      console.error(err);
    }  
  };

  useEffect(() => { //load albumns on page load
    loadProfileAlbums();
  }, []);

  return (
    <div className='bg-[#D496BB] min-h-screen'>
      <NavbarComponent />
      {/* <link href = 'https://www.flaticon.com/free-icon/woman_6997662?term=profile&page=1&position=13&origin=search&related_id=6997662'></link> */}
      <h1 className='text-6xl font-bold text-center mt-8 text-white'> Welcome Jane Doe</h1>
      <p className='text-desc font-bold text-center mt-8 text-white'> Your Saved Albums </p>
      
      <div className='px-32'>
        <div className='flex flex-row flex-wrap justify-center gap-4 py-8'>
          {profileAlbums.map(album => (
            <div key={album.albumid} className='w-1/5 bg-white flex justify-center flex-col items-center p-4'>
              <img src={`http://localhost:3000${album.Image}`} alt={album.album} className="w-full h-full object-cover" />
              <br></br>
              <h3 className='font-bold text-2xl'> {album.album} </h3>
              <br></br>
              <h3 className='font-bold text-1xl'> {album.artist} </h3>
              <button onClick={() => deleteAlbum(album.albumid)} className="w-40 p-4 font-bold mt-4 text-white border border-white bg-gray-400">Remove Album</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;