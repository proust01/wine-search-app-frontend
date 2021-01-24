# wine-search-app (FrontEnd)

This app is React / Node.js wine search application.


`Clon or Download Backend Server : `\
[wine-search-app-backend](https://github.com/proust01/wine-search-app)

-- Stack Used : 

      Frontend : React, Redux
      Backend : Node.js, Express, MongoDB, MVC design pattern
      
## FrontEnd App

### `Redux State Management`
For first task, it started with using React.js and Redux library for State Management. <br>
Basically, It used a Actions / Reducers / Screens / Components design pattern. For Redux, it has a store.js for storing all states.<br>

### `Edit Page with MongoDB`
On top of Task Requirements, I added Edit Page for Edit current Wind data.\
By clicking Edit Icon on top of Wine Info Page, you can open editing page for current wine data.\
All current wine data is already fetched in input box so you can only change the data you need. However, due to time line for task, it only uploads first component for the wine. Rest is remained to be fixed later on.\
`CAUTION : YOU MUST INSTALL MONGODB AND SEED DATA TO MONGODB FIRST! (See below for more info)`\

### `Auto-Complete Search Box`
For task requirement, I completed auto-complete search. It starts when you try to input any word in input box and close once you click outside. It design to search both lotCode and Description together.

# Getting Started with Wine Search App (Frontend)

### `Clon or Download Repository`

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:5000/products) to see the browser.\
It'll open Auto-Complete Serch Box.


### `test with Search input & Pages`

### `CAUTION FOR EDTING PAGE : YOU MUST INSTALL MONGODB AND SEED DATA TO MONGODB FIRST!`

[MongoDB Community Edition Download]()\

### `Comment out Codes & Back from VS Code for MongoDB`

Server is currently fetching a data from data.js so in order to use MongoDB, we need to comment out some code.\
`routers/productRouter.js` : Line 12 (comment out), Line 13 (back for MongoDB Command)\
`routers/breakdownRouter.js` : Line 11, 40, 68, 96 (comment out), Line 13, 41, 69, 97 (back for MongoDB Command)

### `Seed Data to MongoDB`

Before Editing page, You must be installed with MongoDB. [MongoDB Community Edition Download]\
Once installed, you can seed the data with this api.\
[http://localhost:5000/products/seed](http://localhost:5000/products/seed)\
This will store data to MongoDB.\

### `Run nodemon server.js`

Now it's ready for MongoDB and Editing Page. Try API and Check if it stores data properly.

## Learn More

You can test MongoDB with BackEnd Web application.\

`Clon or Download Backend App : `\
[https://github.com/proust01/wine-search-app](https://github.com/proust01/wine-search-app)
