# CPS630 Assignment 1 - Harmonia


## What is Harmonia
We created a web application that allows users’ to organize their album collections. Inspired by Goodreads and Letterboxd, music lovers can log albums they have listened to allowing users to reflect on their listening habits and build a personal music diary. We wanted it to have a homepage that briefly tells users what the web application is about and how they can use it, along with a profile that acts as a library for the user to see their collection. And finally, a discography page that gives users some suggested albums that they could add to their profile.

## Future Extensions
We do not have album scores or ratings implemented at the moment, but over the next few weeks, we would like to have an album’s overall rating listed when users search for it so they can see its average score as given by other music lovers on the site. Once an album is added to one’s profile, we would also like to add a feature that would allow the user to give their very own rating of the album that would be visible on their profile page. A feature we have not committed to yet would be a login/create account page for users so when they go to their profile, it would say “Welcome [user name]” of the person who has logged in. Additionally, we would like to add a feature that allows users to change their profile photos to keep their accounts personalized. Another feature we are potentially considering is a ‘Search’ button in the discography page so users can actively look for albums they want instead of scrolling through the suggestions as we have right now.

## How to run
1. install all dependencies in node project packages `npm i`
2. run dev `npm run dev`
3. in a new terminal, and  run `node server.js`


## How to use
When you open the local host, it will immediately open on the homepage with a navigation bar at the top. You can read about our website and scroll down to see how the project works. At the bottom of the page you will see our team members, the developers of the project.

 By clicking on the ‘Profile’ header, you will be taken to the ‘Profile’ page where you can view the albums you have added to your own library. Note: it will be empty originally, and you will be able to remove albums only after you add them from the Discography page.

 If you would like to remove one of the albums, simply click on the ‘Delete Album’ button. If you would like to add an album to your profile, go back to the navigation bar and click on the ‘Discography’ header this time to be taken to the ‘Discography’ page. From here, you can browse through some of the suggested albums and when you find one you would like to add to your profile, click the ‘Add Album’ button.

## Overview of Submitted Content
We will be submitting a zip file that includes App.tsx that does the routing for our application. Then we have a NavBar.tsx that is used across all pages to help users go to the different pages of the website. Finally, we have Discography.tsx, ProfilePage.tsx, and HomePage.tsx that includes all code for each page. The zip file also includes a recording of our overall web application including the used images. To move between them, you can click on the desired html page by using the navigation bar. The profile page lets you delete albums from it that you no longer want in your library and the discography page lets you add new albums to your profile from its suggested section.

## Challenges
We think the biggest challenge for us was learning how to use Typescript with our programs because the examples we discussed in class did not use them so it was tricky working with the different syntax. We have not really worked with APIs before so learning about those while beginning typescript posed a bigger challenge than we initially thought. Similarly with the CSS styling, even though we were familiar with that, it took a little bit of time to learn the slightly different commands for what we wanted to do; we decided to use Tailwind after speaking with the professor as it made styling the website more straightforward. 

## Successses
One thing we are really proud of is our website design. When we first met for this assignment, we decided it would be best if we created a figma so we knew exactly what features we wanted to implement and how we wanted it to look. From there, we were able to easily split the pages between the four of us and we ended up working really well together. We are also really proud of the API calls we did throughout the project. We were able to accomplish 3 GETs, 1 DELETE and 1 POST  across the site. Originally we aimed for one of each but as the assignment process started we found more uses. Overall, this assignment showed all of us how to successfully implement API calls and create a full-stack application. 

## Contributors
* Rana Hamood-(501173778)
* Theresa Killiam-(501101333)
* Inaya Rajwani-(501037903)
* Golshan Rasoulzadeh Darabad-(501112080) 

