## #MustWatch
This is my second project at General Assembly and the goal was to create a full stack
web application that is hosted live on GH-Pages. The main objectives
were to:
- [ ] Build a single-page application (SPA) with basic user authentication
(sign up, sign in, sign out, change password) that interacts with a custom API that you build
- [ ] Build an app that can create, read, update, and delete data in a database
- [ ] Create user stories, ERDs and wireframes as part of planning out your app.
- [ ] Confidently present your work to a technical audience (5-10 minute presentation)

### Important Links
- Insert link to client repo (only on API README)
- Insert link to API repo (only on client README)
- Insert link to deployed client (on both READMEs)
- Insert link to deployed API (on both READMEs)

### Planning Story
I started off by writing down as many user stories I could think of which then
gave me the inspiration to start drawing out my wireframe. This led me to having
a solid idea of how I wanted to sketch out my HTML and JS files.

Once I built out my foundatation I ran through the the following checklist:

**Application**
- [x] User must be able to sign up
- [x] User must be able to sign in
- [x] Signed in user must be able to change password
- [x] Signed in user must be able to sign out
- [x] Signed in user user must be able to start a tic tac toe game
- [x] When playing game, user must start as X and then rotate between X and O
- [x] When playing game, user must only select available spaces on the board
- [x] When playing game, user must be notified when win, loss or tie occurs
- [x] Once a game is over, user must not be able to add to that board
- [x] Once a game is over, user must be able to play again
- [x] Signed in user must be able to view number of games played

**API**
- [x] Sign up POST /sign-up
- [x] Sign in POST /sign-in
- [x] Change password PATCH /change-password
- [x] Sign out DELETE /sign-out
- [x] New game POST /games
- [x] Update game PATCH /games/:id
- [x] View number of games played GET /games
- [x] Give feedback to the user after each action's success or failure.
- [x] All forms must clear after submit success


### User Stories
- as a user, I want a sign up form so that I can create an account.
- as a user, I want a sign in form so that I can log into my account.
- as a user, I want a change password form so that I can change my account
password.
- as a user, I want a play game button so that I can start a game of tic tac
toe.
- as a user, I want to be able to click directly on the board so that I can
choose where I want to place my game piece.
- as a user, I want a results screen so that I can know the final outcome of
the game.
- as a user, I want a play again button so that I can play as many games as I
would like.
- as a user, I want a view all games button so that I can view my playing
history.
- as a user, I want a sign out button so that I can close out my account.
- as a user, I want a flexible design so that I can play on my lap top, tablet,
or phone.

### Technologies Used
- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- Ajaxgit

### Unsolved Problems
- [x] All requirements met

Would like to eventually:
- [ ] Add AI so a user can play against the computer at different skill levels

##### Wireframe:
[Wireframe Link](https://wireframepro.mockflow.com/view/tictactoe-wireframe-eder#/page/56232057d2ca4ded9e253877b5304c5d)
