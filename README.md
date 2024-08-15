


<!-- <p align="center">
   <img src="../images/sig.png" alt="Bam Signature">
   <img src="../images/logo100.png" alt="Bam Logo" width="200px" height="200px">
</p> -->



## Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Installation](#installation)
   - [Cloning the Repository](#cloning-the-repository)
   - [Setting Up Environment Variables](#setting-up-environment-variables)
6. [Starting the Application](#starting-the-application)
7. [Links](#links)
8. [Project Status](#project-status)
9. [Acknowledgements](#acknowledgements)
10. [Copyright License](#copyright-license)

## Introduction
Embark on a journey through the electrifying world of a rising star. This website is more than just a showcase; it's a vibrant platform designed to connect fans with Gavin Di Fresco, artistically known as Bamvsthewrld. Here, Bamvsthewrld unveils his talents across a spectrum of engaging media, inviting you into his universe of sound and vision. Packed with dynamic content and direct avenues for fan interaction, this site is your exclusive pass to get closer to an artist poised for greatness. Get ready to be part of Bamvsthewrld’s journey – where passion meets rhythm and dreams take flight!

## Tech Stack
* #### React.js
* #### MongoDB
* #### ThreeJS
* #### Firebase
* #### Styled Components
* #### Tailwind CSS
* #### Cloudinary
* #### React-Player
* #### React-Scroll

## Features

* **Vivid Galactic Experience:** Traverse the cosmic expanse of Bam's Wrld through stunning sections rich with a 3D planetary model and celestial imagery. As users navigate the interface, they embark on a virtual tour, immersing themselves in artistic universe curated by Bamvsthewrld. It's a visually rich exploration that captures the essence of the artist's vision, inviting fans on a captivating adventure across a musical galaxy.

* **Firebase Login Integration:** By integrating with Firebase's trusted sign-in technology, users can quickly authenticate with their existing Google accounts, ensuring that access is both secure and convenient.

* **Embedded SoundCloud Playlist:** The app incorporates a sleek, in-built music player that streams Bamvsthewrld’s SoundCloud playlist directly. This integration allows users to indulge in the artist’s tracks seamlessly within the app’s environment, eliminating the need to visit an external SoundCloud page.

* **Integrated Video Player:** React-Player Featuring React-Player, the app provides a window into Bamvsthewrld's visual world with the latest YouTube releases. Fans can watch new videos from the artist without ever leaving the app, ensuring an uninterrupted and engaging multimedia experience.

* **Interactive Audio-Enabled Image Map:** The Thoughts section introduces an innovative way to experience the artist's music through an interactive image map. Clicking on any planet within the visual display triggers the playback of a unique song, providing an immersive auditory journey through Bamvsthewrld's discography. This feature blends visual storytelling with auditory pleasure, creating a memorable exploration of the artist's work.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Before you begin, ensure you have met the following requirements:

* [Node.js]([Node.js](https://nodejs.org/) (LTS version recommended)) (LTS version recommended)

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

* [npm](https://www.npmjs.com/)(Node Package Manager) 

* Chrome/Firefox/Safari/Edge >= Latest 2 major versions

To check if Node.js and npm are installed, run these commands in your terminal:
```bash
node --version
npm --version
```
If Node.js is not installed, download and install it from the [official Node.js website](https://nodejs.org/).

For MongoDB, if you choose to use [MongoDB Atlas](https://www.mongodb.com/atlas/database), set up an account and create a cluster at MongoDB Atlas. Follow the provided instructions to connect to your cloud-based database instance.

## Installation
Follow these steps to get the project up and running on your local machine:

### Cloning the Repository
```
   git clone https://github.com/ePortfolios/wdv349-DiFrescoTisha-FS.git
   cd ePortfolios/wdv349-DiFrescoTisha-FS.git
   cd bamvsthewrld
```
 ### Setting Up Environment Variables
Environment variables are crucial for configuring the backend and frontend separately.

Before running the application, you'll need to set up environment variables for both the server (backend) and client (frontend).

Backend
In the backend directory, create a .env file.

Add necessary variables, e.g., MONGO_URI and JWT_SECRET.

#### Server (backend)
1. In the `server` directory, create a `.env` file.
2. Add necessary variables, e.g., `MONGO_URI` and `JWT_SECRET`.
```plaintext
PORT=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SESSION_SECRET=
MONGO_URI=
NODE_ENV=
REDIRECT_URL=
JWT_SECRET_KEY=
FRONTEND_URL=
```

#### Client (frontend)
In the client directory, create a `.env` file.

Define variables required for the frontend, such as API URLs.

```plaintext
REACT_APP_GOOGLE_CLIENT_ID=
REACT_APP_BACKEND_URL=http://localhost:4000
REACT_APP_REDIRECT_URL=http://localhost:4000/auth/google/callback
```
### Important Notes
- Never commit .env files or sensitive keys to version control. Add these to your `.gitignore`.
- For production, set the environment variables in your hosting environment or CI/CD pipeline.

### Backend (Server) Setup

1. Navigate to the Server (Backend) Directory:
```
cd server
```
2. Install Server (Backend) Dependencies:
```bash
npm install
```
This will install all the dependencies defined in the package.json file located in the backend directory.

### Frontend (Client) Setup
1. Navigate to the Client (Frontend) Directory:

Open a new terminal and navigate to the client directory from the root of the project:
``` 
cd client
```
2. Install Client (Frontend) Dependencies:

Similar to the backend, run the following command to install the client (frontend) dependencies:
```bash
npm install
```
This will install all the dependencies required for the frontend, as defined in its package.json file.

## Starting the Application
1. Run the Backend:

In the backend terminal, start the server:
```
npm start
```
2. Run the Frontend:

In the frontend terminal, start the React application:
```
npm start
```
In your default web browser, visit http://localhost:3000 where you can view the application.

By following these steps, you will have the full application running on your local machine.

## Links
#### Links to the project include the following:

| Route                | Description                                                      |
|----------------------|------------------------------------------------------------------|
| http://localhost:3000 | Link to React.js base URL that Bamvsthewrld application runs on.       |
| /auth/google     | Sign in to Google for authorization.                             |
| /api/comment-rating               | Leave a comment and rating                                                |

## Project Status
Project is: _complete_

## Acknowledgements
The 3d earth model displayed on the homepage was inspired by JavaScript Mastery in this [tutorial](https://www.youtube.com/watch?v=0fYi8SGA20k).

## Copyright License
All original content of this project, including source code, binaries, and documentation, is the property of Tisha Di Fresco and is not currently licensed for use, modification, or distribution. Unauthorized use, replication, or modification of this material without express and written permission from the copyright owner is strictly prohibited.

<img src="../images/bamvsthewrld.png" style="center">

![Sound Cloud](https://img.shields.io/badge/sound%20cloud-FF5500?style=for-the-badge&logo=soundcloud&logoColor=white)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![YouTube Music](https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white)
![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448c5?style=for-the-badge&logo=cloudinary)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

