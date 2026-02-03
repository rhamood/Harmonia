import './App.css'
import icon from './assets/images/siteIcon.png'
function App() {


  return (
    <>
      <div className='bg-[#D496BB] min-h-full'>
        <nav className='w-full bg-white p-4 flex justify-start space-x-4 text-[#D496BB]'> 
          <a href=""> Home </a>
          <a href=""> Discography </a>
          <a href=""> Profile </a>
        </nav>
        <div className='px-32'>
          <h1 className='text-8xl font-bold text-center mt-8 text-white'> Harmonia </h1>
          <div className='w-full flex items-center justify-center mt-12'>
            <div className='w-1/2 bg-white h-128 flex items-center justify-center'>
              <img src={icon} alt="Amber" className="w-80% h-full object-fit"></img>
            </div>
            <div className='w-1/2 bg-[#EFBFE9] h-128 px-12'>
              <h2 className='text-center my-8 font-bold text-3xl'> What is Harmonia? </h2>
              <p>
                Harmonia is designed to help music lovers to organize their album collections.
                <br/><br/>
                Harmonia is a music album tracking app inspired by Letterboxd. 
                <br/><br/>
                It allows users to log albums they’ve listened to. 
                <br/><br/>
                The app helps users reflect on their listening habits and build a personal music diary, all in one place.
              </p>
            </div>
          </div>
          <h2 className='text-center my-8 font-bold text-6xl text-white'> How Harmonia Works? </h2>
          <div className='w-full space-x-8 flex items-center justify-center mt-12 pb-12'>
             <div className='w-1/3 h-96 bg-white flex justify-center pt-8'>
             <h3 className='font-bold text-2xl'> View your Profile </h3>
            </div>
             <div className='w-1/3 h-96 bg-white flex justify-center pt-8'>
             <h3 className='font-bold text-2xl'> Add an Album</h3>
             </div>
             <div className='w-1/3 h-96 bg-white flex justify-center pt-8'>
              <h3 className='font-bold text-2xl'> Delete an Album</h3>
            </div>
          </div>
          <h2 className='text-center my-8 font-bold text-6xl text-white'>  Meet the Devs </h2>
          <div className='w-full space-x-8 flex items-center justify-center mt-12 pb-12'>
            <div className='w-1/4 h-96 bg-white flex justify-center pt-8'>
            </div>
             <div className='w-1/4 h-96 bg-white flex justify-center pt-8'>
             </div>
             <div className='w-1/4 h-96 bg-white flex justify-center pt-8'>
            </div>
            <div className='w-1/4 h-96 bg-white flex justify-center pt-8'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
