# Rick and Morty Project

![Rick and Morty project image](https://imgur.com/HdHbUe6.png)

This is a basic project created using create-react-app from [React](https://react.dev/). It was developed following the [Henry](https://soyhenry.com) Bootcamp's schedule and it is now discontinued. Feel free to use it and improve it as you want.

## Live Deploy

You can try the app with every feature up-to-date in [https://rickandmorty.dantu.me/](https://rickandmorty.dantu.me/).

## Roadmap

- Create project using create-react-app
- Componentization of initial elements
- Routing using react-router-dom and 404 error page
- Rick and Morty's API fetching using axios
- Adding characters by ID and random adding
- Styling using moduled CSS, cards customization, and close button
- About page
- Usage of States
- New state "Access" that simulates a session and Logout button
- Integration of Login Form (testing predefined credentials, no database)
- Live form validation
- Integration of Redux and Middleware. New 'Favorites' system
- Custom hooks implementation. New filter and order system
- Cleaning of App.js with more custom hooks. Move of constants such as API urls or creds to 'utils' folder. Creation of index file for components
- Creation of Backend in NodeJS and Express
- Modularization of backend, new routes and controllers
- Migration of API calls to the backend
- Login with backend requests (no database yet)
- Deploy backend to Railway and frontend to Vercel
- Eslint up-to-date

## How to start?

If you want to work with this project, you need to follow these steps:

First you need to clone the repo using the following command:

```bash
  git clone https://github.com/dantedenicolo/rickandmorty.git
```

Then, you need to make sure you are working in the correct project folder. You can access directly the route by using the following command in the same console in which you cloned the repo:

```bash
  cd rickandmorty
```

Now you need to install the dependencies using the following commands:

```bash
  cd Client
  npm install
  cd ../
  cd Server
  npm install
  cd ../
```

Finally, you need to start both Front and Back ends. First start with the backend. If you want to use nodemon, remember to edit the package.json file and add the following line in the scripts section:

```bash
"start": "nodemon ./src/index.js"
```

Then, you can start the backend using the following command inside the backend folder:

```bash
  npm start
```

Then, you need to start the frontend. Remember to change the URL_BASE in the src/utils/api.js file to your own backend's URL. Then, you can start the frontend using the following command inside the frontend folder (note that you need to do this in a different console than the backend's one, without closing it):

```bash
  npm start
```

Once you have done that, you can now review, inspect, and edit the code as you want. Feel free to do wathever you want and to give feedback if needed. Please note that this is my first project in react, so many things need to be improved.

## Support

For support, email denicolodante@gmail.com or DM [@dantedenicolo](https://instagram.com/dantedenicolo) on Instagram.

## Connect with me:

- [Twitter](https://twitter.com/dantutu_)
- [Instagram](https://instagram.com/dantedenicolo)
- [LinkedIn](https://www.linkedin.com/in/dantedenicolo/)
