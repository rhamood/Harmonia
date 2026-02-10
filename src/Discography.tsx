import { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";

// album type def for typescript used to define structure for backend api
type Album = {
  albumid: number;
  hasImage: boolean;
  album: string;
  artist: string;
};

function DiscographyPage() {
  const [albums, setAlbums] = useState<Album[]>([]); // creates empty array for albums

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

  return (
    <>
      <div className='bg-[#D496BB] min-h-screen'>
        <NavbarComponent />
        <h1 className='text-6xl font-bold text-center mt-8 text-white'> Discogrpahy</h1>
        <p className='text-desc font-bold text-center mt-8 text-white'> Find Your Next Fav at the Disco! </p>

        <div className='px-32'>
          <div className='flex flex-row flex-wrap justify-center gap-4 py-8'>
            {albums.map(album => (
              <div key={album.albumid} className='w-1/5 bg-white flex justify-center flex-col items-center p-4'>
                <div className='w-4/5 aspect-square bg-black flex justify-center'> </div>
                <br></br>
                <h3 className='font-bold text-2xl'> {album.album} </h3>
                <br></br>
                <h3 className='font-bold text-1xl'> {album.artist} </h3>
                <button className='p-4 font-bold mt-4 text-white border border-white bg-[#EFBFE9]'> + Add Album </button>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </>
  )
}
export default DiscographyPage;