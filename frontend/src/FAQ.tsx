import './App.css'
import { useEffect, useState } from 'react';
import icon from './assets/images/siteIcon.png'
import NavbarComponent from './NavbarComponent';
import code from './assets/images/githubIcon.svg'

type Dev = {
    name: string;
    image: string;
}

function FAQPage() {


    return (
        <>
            <div className='bg-[#D496BB] min-h-full'>
                <NavbarComponent />
                <div className='px-32'>
                    <h1 className='text-8xl font-bold text-center mt-8 text-white'> Frequently Asked Questions </h1>
                </div>
                
            </div>
        </>
    )
}

export default FAQPage
