# wine-search-app (FrontEnd)

This app is React / Node.js wine search application.


`Clone or Download Backend Server : `\
[wine-search-app-backend](https://github.com/proust01/wine-search-app)

-- Stack Used : 

      Frontend : React, Redux (Actions, Reducers, Store)
      Backend : Node.js, Express, MongoDB, MVC design pattern
      
## FrontEnd App

### `Redux State Management`
For the first task, it started with using React.js and Redux library for State Management. <br>
Basically, It used a Actions / Reducers / Screens / Components design pattern. For Redux, it has a store.js for storing all states.<br>

### `Edit Page with MongoDB`
On top of Task Requirements, I added Edit Page for Edit current Wind data.\
By clicking Edit Icon on top of Wine Info Page, you can open editing page for current wine data.\
All current wine data is already fetched in the input box so you can only change the data you need. However, due to the timeline for task, it only uploads the first component for the wine. Rest is remained to be fixed later on.\
`CAUTION : YOU MUST INSTALL MongoDB AND SEED DATA TO MONGODB FIRST! (See below for more info)`\

### `Auto-Complete Search Box`
For task requirement, I completed the auto-complete search. It starts when you try to input any word in the input box and close once you click outside. It design to search both lot code and Description together. Delete Search Words button will be generated once it has more than 1 search word in the input box.

### `Show More Button`
For task requirement, I implemented Show more Button for long messages. If wine has More than 3 components to show, it creates show more button and it'll show 2 more contents every time you click.
 
# Getting Started with Wine Search App (Frontend)

### `Clone or Download Repository`

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:5000/products) to see the browser.\
It'll open Auto-Complete Serch Box.


### `test with Search input & Pages`

### `CAUTION FOR EDTING PAGE : YOU MUST INSTALL MONGODB AND SEED DATA TO MONGODB FIRST!`

[MongoDB Community Edition Download]()

### `MongoDB Prep : Comment out & Uncomment from VS Code for MongoDB`

Server is currently fetching a data from data.js so in order to use MongoDB, we need to comment out some code.\
`routers/productRouter.js` : Line 12 (comment out), Line 13 (back for MongoDB Command)\
`routers/breakdownRouter.js` : Line 11, 40, 68, 96 (comment out), Line 13, 41, 69, 97 (back for MongoDB Command)

### `Seed Data to MongoDB`

Once installed MongoDB and run nodemon server.js, you can seed the data with this api.\
[http://localhost:5000/products/seed](http://localhost:5000/products/seed)\
This will store data to MongoDB.\

### `Check with Editing Page`

Now it's ready for MongoDB and Editing Page. Go to Editing page and hit Save Button.

## Learn More

You can test MongoDB with BackEnd Web application.\

`Clone or Download Backend App : `\
[https://github.com/proust01/wine-search-app](https://github.com/proust01/wine-search-app)
