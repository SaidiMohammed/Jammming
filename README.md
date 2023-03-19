# Jammming - The Spotify Playlist Creator
###### Please note that this app is still under development

Jammming is a React web application that allows users to build and add Spotify playlists. It accomplishes this by connecting and authenticating to a user's account and searching for Tracks, Artists, or Albums through the Spotify API. The results are then displayed in a list, from which music may be simply added or removed from a new playlist. After the playlist is all set and done, it may be named and saved to the user's Spotify account.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and a part of the CodeCademy FullStack Engineering Carreer path Certification.

## Features
* Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account.
* Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library.
* Populate Results List — Jammming displays the list of returned tracks from the user's query.
* Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
* Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
* Change Playlist Title — users can change the title of their custom playlist.
* Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

## Quick Preview



https://user-images.githubusercontent.com/99802472/226211327-541e5eae-7df0-4715-91ae-09b98545811f.mp4



## Technologies

* React Front-End library
* API
* CSS
* JavaScript

## Instructions

Before you start running the App, you need to register your application using the [Spotify Application Registration Flow](https://developer.spotify.com/dashboard/).

Give your application a relevant name and description. Also, add the following Redirect URI in your spotify : http://localhost:3000/

After creating your app on spotify the top of Spotify.js :
* Set the client ID variable to the value provided on your application page.
* Set the redirect URI to "http://localhost:3000/".

<p align="center">
<strong>
### All data in the video below have already been deleted for security purposes
<strong>
</p>

https://user-images.githubusercontent.com/99802472/226210440-865e1343-e606-4e46-9943-f82f1a32bbe3.mp4


You can run the app throught pwsh or cmd by doing the following :

**Don't forget to put the App's directory after "cd"!**

```
cd APP_DIRECTORY
npm start 
```
You can write copy/paste that code in a text file and save it with a .bat extention so you wont have to write the same thing everytime
For more information check below

## Available Scripts

```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```npm test```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```npm run build```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```npm run eject```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
