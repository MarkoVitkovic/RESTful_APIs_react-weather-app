# Weather App
> RESTful API made with react. Weather application

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This app is made with react and node.js. For this app I use [OpenWeather](https://openweathermap.org/api)

## Screenshots
![](https://github.com/MarkoVitkovic/RESTful_APIs_react-weather-app/blob/master/web.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - version 4
* [React-dom](https://github.com/facebook/react) - version 16.13.1

## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>
`if(city && country){`</br>
      `const api_call= await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key})`</br>
      `const res = await api_call.json();`</br>
      `console.log(res);`</br>
      `this.setState({`</br>
        `city: ${res.name}, ${res.sys.country},`</br>
        `celsius:this.calcCels(res.main.temp)`</br>

## Features
List of features ready and TODOs for future development
* Awesome feature 1
* Awesome feature 2
* Awesome feature 3

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration
Add here credits. Project inspired by..., based on...

## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


