import { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";

function HelpDesk() {


  return (
    <>
      <div className='bg-[#D496BB] min-h-screen'>
        <NavbarComponent />
        <h1 className='text-6xl font-bold text-center mt-8 text-white'> Help Desk </h1>
        <p className='text-desc font-bold text-center mt-8 text-white'> For your non-frequently asked questions. </p>

<br></br>
        <div className='px-32 text-white'>
          <p> - i was thinking this page could be how we incorporate socket.io, where the user can asks questions 
            and maybe we can have some auto responses, idkkkkkkkkkkkkkkk
          </p>
          <p> - or maybe we add a little button in the corner of the FAQ page and it has a place to submit questions</p>
         <p> - the only reason i havent done it yet because i am having trouble setting it up with the server</p>
        </div>
      </div>
    </>
  )
}
export default HelpDesk;