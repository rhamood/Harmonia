# CPS630 Assignment 2 - Harmonia


## What is Harmonia
We created a web application that allows users’ to organize their album collections. Inspired by Goodreads and Letterboxd, music lovers can log albums they have listened to allowing users to reflect on their listening habits and build a personal music diary. We have a login and registration page for users to create and access their accounts. We also have a homepage that briefly tells users what the web application is about and how they can use it, along with a profile that acts as a library for the user to see their collection while also allowing users to rate and review their favourites. There is a discography page as well that gives users some suggested albums that they could add to their profile. And for some added fun, we added a game page that tests users on their musical knowledge. 

## Future Extensions
We do not have a search function in our application yet but in the next assignment, we will add one to the discography page to allow users to search for specific albums instead of scrolling. While we have added individual ratings and reviews to the profile page for users to add, we do not have an overall or average score for the albums from other users so we might add that in the future. And to build on this idea of collective ratings, we might even add a feature that would allow users to scroll through others’ reviews of the album. 

## How to run
1. cd frontend
2. install all dependencies in node project packages `npm i` 
3. run dev `npm run dev`
4. in a new terminal, cd backend
5. install mongodb `npm install mongoose`
6. and run `npm run start`


## How to use
When you open the local host, it will immediately open on the login page. Login with the following credentials:

    Email: janedoe@gmail.com
    Password: 12345

**NOTE: You need to use the following credentials to access the actual site** 

Then when you sucessfully login it will take you to the homepage with a navigation bar at the top. You can read about our website and scroll down to see how the project works. At the bottom of the page you will see our team members, the developers of the project. 

By clicking on the ‘Profile’ header, you will be taken to the ‘Profile’ page where you can view the albums you have added to your own library. Note: It will have two albums saved as default, and you will be able to remove albums only after you add them from the Discography page. If you would like to review one of the albums, simply click the ‘Rate Album’ button, but if you want to remove one of the albums, click on the ‘Delete Album’. 

If you would like to add an album to your profile, go back to the navigation bar and click on the ‘Discography’ header this time to be taken to the ‘Discography’ page. From here, you can browse through some of the suggested albums and when you find one you would like to add to your profile, click the ‘Add Album’ button. And if you would like to participate in some music trivia, simply click the ‘Game’ header at the top to be redirected. To play, select the answer you think is correct and find out your score at the end!

## Overview of Submitted Content
We will be submitting a zip file that includes two folders for the frontend and backend with the frontend containing the file App.tsx that does the routing for our application. Then we have a NavBar.tsx that is used across all pages to help users go to the different pages of the website. Finally, we have Discography.tsx, ProfilePage.tsx, Auth.tsx, gamePage.tsx, and HomePage.tsx that includes all code for each page. The zip file also includes a recording of our overall web application including the used images. To move between them, you can click on the desired html page by using the navigation bar. The authentication page allows users to create and access their accounts. The profile page lets you delete albums from it that you no longer want in your library and the discography page lets you add new albums to your profile from its suggested section. And the game page lets you partake in trivia. In the backend, we have the server.js file that connects our application to the MongoDB database where we store all the albums and their related information. 

## Challenges
We think our biggest challenge in this assignment was creating the frontend and backend folders. This assignment is built entirely on top of the first one and because we did not split that one into a separate frontend and backend, we had to then take our code and split it into the two folders. That ended up being a bit more challenging because when we would push our change to GitHub, it did not properly push the backend folder so almost everything was in the frontend. The application would still work when you split the terminals, but it was just all done in the front end. Once we got the backend folder included as well, everything worked smoothly. 

## Successses
One thing we are really proud of is our collaboration with each other. In the lecture about working in group projects, the professor kept referencing how to overcome challenges with other members of the group but through these last two iterations, our project has been running very smoothly. We have a group chat where everyone is able to update each other on what they have done and what they are pushing to the GitHub so multiple people do not end up editing the same file at the same time. We meet regularly to check in on where everyone is and offer suggestions to help those who might be struggling with a part of the project. Overall, this has been a very successful collaborative experience.

## Contributors
* Rana Hamood-(501173778)
* Theresa Killam-(501101333)
* Inaya Rajwani-(501037903)
* Golshan Rasoulzadeh Darabad-(501112080) 

## Video
A1 - https://drive.google.com/file/d/1cpGhhlwSUv6ZUSCgctQkw7rS8zJpdz9a/view?usp=sharing 

