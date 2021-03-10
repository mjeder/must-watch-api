# #MustWatch
It's a cold and rainy Sunday... you decide it's a perfect opportunity to lay down on the couch with a blanket, bowl of popcorn, and your favorite beverage and finally turn on a movie or TV show. BUT... you can't remember the name of that TV show all of your co-workers are talking about or the name of the movie your friends always give you a hard time for not seeing yet. 

So, what do you do? 

You pull out your phone and log into your #MustWatch account to view your list of TV shows and movies that you've been told you must watch!
___
**#MustWatch** is an application for users to create an account and log the movies or tv shows that they've been hearing about from friends, family, and social media. Once those shows are on their #MustWatch list they can add more, edit, remove, view their list, or screenshot and share with friends!
___
This is my second project at General Assembly and the goal was to create a full stack
web application hosted live on GH-Pages with an API hosted on Heroku. The main objectives
were to:
- [X] Build a single-page application (SPA) with basic user authentication
(sign up, sign in, sign out, change password) that interacts with a custom API that you build.
- [X] Build an app that can create, read, update, and delete data in a database.
- [X] Create user stories, ERDs and wireframes as part of planning out your app.
- [ ] Confidently present your work to a technical audience (5-10 minute presentation)
___
## Important Links
- [Front End Repo](https://github.com/mjeder/must-watch-client)
- [Deployed Client](https://mjeder.github.io/must-watch-client/)
- [Deployed API](https://must-watch-api.herokuapp.com/)
___
## Planning Story
I started off by writing user stories that would satisfy the requirements of the project and build a solid foundation for v1.0 of my application. Once I was able to document and decide on the user needs, I was able to start building out my wireframe and ERD to visualize how the application would look and operate. This lead to me creating a to-do list so I could stick to a daily schedule and ensure I would deliver my v1.0 by the deadline.
___
### Schedule
#### Planning & Set Up
- [x] Review full-stack-project-practice
- [x] Review full-stack-project-modeling-lab
- [x] Create User Stories
- [x] Create Wire Frames
- [x] Create ERD

*API*
- [X] Download Express API Template
- [X] Create a Github Repository
- [X] Deploy to Heroku

*Client*
- [X] Download Browser Template
- [X] Create a Github Repository
- [X] Deploy to Github Pages
___
#### Back-End
- [X] CRUD your resource
- [X] Test your resource's end points with curl scripts
- [X] Add the relationship to a User
- [X] Add User ownership to resource controller
- [X] Test your resource's end points with curl scripts
___
#### Front-End
- [X] Sign Up (curl then web app)
- [X] Sign In (curl then web app)
- [X] Change Password (curl then web app)
- [X] Sign Out (curl then web page)
- [X] All API calls have success or failure messages
- [X] Review query-ajax-post
- [X] Create resource (curl then web app)
- [X] Get all of their owned resources (curl then web app)
- [X] Delete single resource (curl then web app)
- [X] Update single resource (curl then web app)
___
#### Final Touches
- [X] README
- [X] Troubleshoot/Debug
- [ ] Style
___
## User Stories
- As a user I want to sign up, so I can create an account to store my data. (S/U)

- As a user I want to log in, so I have an account for my saved data. (S/I)

- As a user I want to change password, so I can.. well change my password. (C/P)

- As a user I want to log out, so I know no one is accessing my data. (S/O)

- As a user I want to add tv shows and/or movies to a list, so I can remember
  which shows/movies I want to watch. (C)

- As a user I want to be able to view my lists, so I can keep track of what I added. (R)

- As a user I want to be able to update my lists, so I can make edits if needed. (U)

- As a user I want to be able to delete items off my lists, once I watched them. (D)
___
## Technologies Used
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- Heroku
- jQuery
- Ajax
___
## Unsolved Problems
- [ ] When editing a TV or Movie in the list, the form to update populates for every film on the list instead of just the film you want to edit. The functionality works but in terms of the UI I would prefer that only the one form populates.
- [ ] Edit button only works for the first film listed. For example, if you want to edit the 3rd film down youd have to click edit on the first film then fill in the form that's actually on the 3rd film. (I believe the above issue ties directly in with this.)
- [ ] Build a template for the list so it shows up in a more structured form instead of basic html
- [ ] Style and UI could be much cleaner.
___
## Would like to eventually:
- [ ] Separate lists, so there is a TV list and Movie list. Possibly break those two lists into subcategories by genre.
- [ ] Add a watched list, so instead of just deleting the film you click 'watched' and it goes to a separate list for reference. 
- [ ] Add a randomizer button, so you can have the app randomly pick a movie or show on your list for you to watch. For those nights when you cant make a decision. 
- [ ] The ultimate goal is to have Guidebox API built into the app and allow users to search for shows and movies to add to their list instead of manually typing them in. Could also be used for strictly a database if you wanted to check if a specific movie or tv show is on a streaming service you subscribe to.
___
## ERD
![#MustWatch - ERD](https://i.imgur.com/9HHBOQX.png)
