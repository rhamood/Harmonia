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
                <div className='px-32 flex justify-center'>
                    <h1 className='text-7xl font-bold text-center mt-8 text-white'> Frequently Asked Questions </h1>
                </div>
                <br></br>
                <div className='p-4'>
                    <div className='bg-white p-2 text-[#934774]'>
                    <h2> Question:<br></br> How do I recover a deleted album? </h2>
                    <h3> Answer: <br></br> Deleting an album will only remove it from your Profile. 
                        You can go back to the Discography page and click the '+ Add' Button once again to recover
                        the album with your original rating and review.
                    </h3>
                    </div>
                    <br></br>
                    
                    <div className='bg-white p-2 text-[#934774]'>
                    <h2> Question:<br></br> How do I see my score on the game page? </h2>
                    <h3> Answer: <br></br> When you finish the game, your score will be displayed at the end. Correct answers will
                         not be given so you can try again ;)
                    </h3>
                    </div>
                    <br></br>

                    <div className='bg-white p-2 text-[#934774]'>
                    <h2> Question:<br></br> Can I change my album rating after my original score? </h2>
                    <h3> Answer: <br></br> Yes you can. All you need to do is click the 'Rate Album' button 
                         on your Profile under the album rating you want to update and you simply change your score.
                    </h3>
                    </div>
                    <br></br>

                    <div className='bg-white p-2 text-[#934774]'>
                    <h2> Question:<br></br> Can I make multiple accounts? </h2>
                    <h3> Answer: <br></br> As long as each account has its own email, you can make as many accounts as you desire. <br></br>
                    </h3>
                    </div>
                    <br></br>

                    <div className='bg-white p-2 text-[#934774]'>
                    <h2> Question:<br></br> Does the remove rating remove the ability to rate an album? </h2>
                    <h3> Answer: <br></br> No do not worry, the remove rating just clears the previous album rating. 
                    You can always add a new one with the Rate Album button. <br></br>
                    </h3>
                    </div>
                    <br></br>
                </div>
                
            </div>
        </>
    )
}

export default FAQPage
