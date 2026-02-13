import { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";

// album type def for typescript used to define structure for backend api
type Album = {
  albumid: number;
  hasImage: boolean;
  Image: string;
  album: string;
  artist: string;
};

function DiscographyPage() {
  const [albums, setAlbums] = useState<Album[]>([]); // creates empty array for albums
  const [profileAlbums, setProfileAlbums] = useState<number[]>([]); //  creates rmpty array for albumns already added to profile
  
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/albums") // gets the albums from api
        const data = await res.json()
        setAlbums(data)
      }
      catch (err) {
        console.error(err); // error handling
      }
    };
    fetchAlbums();
  }, []);

  // get albumns already added to the profile page on page load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/profile/albums");
        const data = await res.json();
        setProfileAlbums(data.map((a: Album) => a.albumid)); //store only albumnids 
      }
      catch (err) {
        console.error(err); // error handling
      }
    };
    fetchProfile();
  }, []);

  const addAlbumToProfile = async (albumid: number) => { //adds albumn to profile with POST request 
    try {
      const res = await fetch("http://localhost:3000/api/profile/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ albumid }),
      });
      
      setProfileAlbums(prev => [...prev, albumid]); //add albumnid to profileAlbums array to update button state to ADDED
  
    } 
    catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className='bg-[#D496BB] min-h-screen'>
        <NavbarComponent />
        <h1 className='text-6xl font-bold text-center mt-8 text-white'> Discography</h1>
        <p className='text-desc font-bold text-center mt-8 text-white'> Find Your Next Fave at the Disco! </p>

        <div className='px-32'>
          <div className='flex flex-row flex-wrap justify-center gap-4 py-8'>
            {albums.map(album => (
              <div key={album.albumid} className='w-1/5 bg-white flex justify-center flex-col items-center p-4'>
                <div className='w-4/5 aspect-square bg-black flex justify-center'>
                  <img src={album.Image} alt={album.album} className="w-full h-full object-cover" />
                </div>
                <br></br>
                <h3 className='font-bold text-2xl'> {album.album} </h3>
                <br></br>
                <h3 className='font-bold text-1xl'> {album.artist} </h3>
                {/* on click to add albumn to profile, button changes to ADDED and changed to grey to indicate it was added. fixed width so it stays consistent*/}
                <button
                  onClick={() => addAlbumToProfile(album.albumid)} className={`w-40 p-4 font-bold mt-4 text-white border border-white hover:scale-105 transition duration-300 ease-in-out ${profileAlbums.includes(album.albumid) ? "bg-gray-400" : "bg-[#EFBFE9]"}`}>
                  {profileAlbums.includes(album.albumid) ? "Added" : "+ Add Album"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default DiscographyPage;