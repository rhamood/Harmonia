# CPS630 Assignment 3 - Harmonia

## What is Harmonia

We created a web application that allows users’ to organize their album collections. Inspired by Goodreads and Letterboxd, music lovers can log albums they have listened to allowing users to reflect on their listening habits and build a personal music diary. We have a login and registration page for users to create and access their accounts. We also have a homepage that briefly tells users what the web application is about and how they can use it, along with a profile that acts as a library for the user to see their collection while also allowing users to rate and review their favourites. There is a discography page as well that gives users some suggested albums that they could add to their profile. We have a Frequently Asked Question page to help users solve issues that others have encountered and for a new question, they can ask at the Help Desk. For some added fun, we also have a game page that tests users on their musical knowledge.

## Future Extensions

In the future, we would love to add a much larger database with various albums and artists. When someone goes to the Discography page, we want for an added album to disappear from the page and a new one to appear from the database that was not there before. Then we could also add a ‘Search’ function that a user could use to find albums that are in the database system but not displayed on the Discography.

## How to run

1. cd frontend
2. install all dependencies in node project packages `npm i`
3. run dev `npm run dev`
4. in a new terminal, cd backend
5. install all dependencies in node project packages `npm i`
6. and run `npm run start`

## How to use

When you open the local host, it will immediately open on the login page. You can create an account and then log in.

After completing the fields, the homepage will be displayed with a navigation bar at the top. Here the user can read information about the website, how the project works, and the developers involved. To logout of the page, navigate to the Logout header at the top right of the navigation bar.

If you would like to review one of the albums, go to the ‘Profile’ page and simply click the ‘Rate Album’ button, but if you want to remove one of the albums, click on the trash icon. If you would like to add an album to your profile, go to the ‘Discography’ page where you can use the ‘Add Album’ button. And if you would like to participate in some music trivia, go to the ‘Game’ page. If the user has any questions, they can refer to the ‘Frequently Asked Questions’ page and scroll through some previous answers or enter a new question on the ‘Help Desk’ page.

## Overview of Submitted Content

We will be submitting a zip file that includes two folders for the frontend and backend with the frontend containing the file App.tsx that does the routing for our application. Then we have a NavBarComponents.tsx that is used across all pages to help users go to the different pages of the website. Finally, we have Discography.tsx, ProfilePage.tsx, Auth.tsx, gamePage.tsx, FAQ.tsx, HelpDesk.tsx, and HomePage.tsx that includes all code for each page. The zip file also includes a recording of our overall web application including the used images. In the backend, we have the server.js file that connects our application to the MongoDB database where we store all the albums and their related information.

## Challenges

We think our biggest challenge in this assignment was using socket.io. We were trying to follow the example provided in class but the professor’s code uses some older Node.js implementations than what our application required. His example has statements like “const express = require('express');” but our system needed to use import statements instead like, “import express from 'express';”. Once we figured that out, our socket.io development went a lot smoother.

## Successses

One thing that went really well was updating the rating system for the ‘Profile’ page. Before we just had a window.alert take in input for the ratings and reviews but once we found some npm dependencies we could download that helped us create a modal, it made the application much more user friendly.

## Contributors

- Rana Hamood-(501173778)
- Theresa Killam-(501101333)
- Inaya Rajwani-(501037903)
- Golshan Rasoulzadeh Darabad-(501112080)

## Video

A3 - https://drive.google.com/file/d/1qb-M9qRnEWPdcYJWdiAgcCxCx5OYpLOt/view
