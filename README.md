# Finstagram

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

This build is an image-based social media platform in the style of Instagram, as an effort to challenge myself with duplicating an existing social media platform with the technologies currently in my tool belt.

Deployed site: https://finstagram-ph.netlify.app/

<br>

## MVP

_The **Finstagram** MVP will allow users to share and explore personal images. Upon log in, they will be displayed current posts from all users and have the ability to contribute their own images._

<br>

### Goals

- _User will be able to create account._
- _User will be able to create, update, and delete their user-specific posts._
- _User will be able to scroll through posts from all users._
- _User will be able to view their own profiles and the profiles of others._

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                         |
| :--------------: | :-------------------------------------------------------------------------------------------------- |
|      React       | Front-end JavaScript library for building UIs based on components.                                  |
| React-Router-Dom | Declarative routing for React.                                                                      |
|      Axios       | Provides full CRUD capabilites using XMLHttpRequests.                                               |
|  Ruby on Rails   | Server-side web application framework written in Ruby.                                              |
|    Rack-CORS     | Ruby on Rails Cross-Origin Resource Sharing (CORS).                                                 |
|      Bcrypt      | Secure hashing algorithm for safely handling passwords.                                             |
|       JWT        | Compact URL-safe means of representing claims to be transferred between two parties.                |
|    Pry Rails     | An alternative Rails Console bringing REPL-driven programming to Ruby.                              |
|  Awesome Print   | Pretty prints Ruby objects in full color exposing their internal structure with proper indentation. |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes](https://www.figma.com/file/da1YKFco0d6Y6jeghcTqt3/Finstagram-Wireframes)

- Main Feed

![Main Feed](https://i.imgur.com/p915BlE.png)

- User Profile

![User Profile](https://i.imgur.com/QWFHG58.png)

#### Component Tree

[Whimsical Component Tree](https://whimsical.com/finstagram-component-tree-NJ1ZJ787D9M3mingenii6N)

![Component Tree](https://i.imgur.com/Vtt4Pjq.png)

#### Component Architecture

```structure

src
|__ assets/
      |__ graphics
|__ components/
      |__ ImageGrid
            |__ ImageGrid.css
            |__ ImageGrid.jsx
      |__ ImageFeed
            |__ ImageFeed.css
            |__ ImageFeed.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layout/
      |__ Layout.css
      |__ Layout.jsx
|__ screens/
      |__ MainFeed/
            |__ MainFeed.css
            |__ MainFeed.jsx
      |__ PostCreate/
            |__ PostCreate.css
            |__ PostCreate.jsx
      |__ PostEdit/
            |__ PostEdit.css
            |__ PostEdit.jsx
      |__ SignIn/
            |__ SignIn.css
            |__ SignIn.jsx
      |__ SignUp/
            |__ SignUp.css
            |__ SignUp.jsx
      |__ SingleUserFeed/
            |__ SingleUserFeed.css
            |__ SingleUserFeed.jsx
      |__ UserProfile/
            |__ UserProfile.css
            |__ UserProfile.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ posts.js
|__ App.css
|__ App.js
|__ index.css
|__ index.js

```

#### Time Estimates

| Task                   | Priority | Estimated Time | Time Invested |
| ---------------------- | :------: | :------------: | :-----------: |
| README & planning      |    H     |     9 HRS      |    10 HRS     |
| Backend Setup          |    H     |     2 HRS      |     2 HRS     |
| Backend Auth           |    H     |     3 HRS      |     1 HR      |
| Seed & Create data     |    H     |     2 HRS      |     2 HRS     |
| Test backend routes    |    H     |      1 HR      |     1 HR      |
| Frontend Auth          |    H     |     3 HRS      |    .25 HRS    |
| Frontend routes & test |    H     |     2 HRS      |   1.25 HRS    |
| Layout/Nav/Footer JS   |    H     |     2 HRS      |     2 HRS     |
| Layout/Nav/Footer CSS  |    H     |     2 HRS      |   2.75 HRS    |
| Main Container JS      |    H     |      1 HR      |    .5 HRS     |
| App JS                 |    H     |     2 HRS      |    1.5 HRS    |
| App CSS                |    H     |      1 HR      |    .25 HRS    |
| SignIn JS              |    H     |     2 HRS      |    1.5 HRS    |
| SignIn CSS             |    H     |     2 HRS      |     1 HR      |
| SignUp JS              |    H     |     2 HRS      |    .75 HRS    |
| SignUp CSS             |    H     |     2 HRS      |    .5 HRS     |
| MainFeed JS            |    H     |     2 HRS      |    .75 HRS    |
| MainFeed CSS           |    H     |     2 HRS      |    .25 HRS    |
| UserProfile JS         |    H     |     2 HRS      |   2.75 HRS    |
| UserProfile CSS        |    H     |     2 HRS      |    1.5 HRS    |
| SingleUserFeed JS      |    H     |     2 HRS      |    .75 HRS    |
| SingleUserFeed CSS     |    H     |     2 HRS      |    .25 HRS    |
| PostEdit JS            |    H     |     2 HRS      |     2 HRS     |
| PostEdit CSS           |    H     |     2 HRS      |   1.25 HRS    |
| PostCreate JS          |    H     |     2 HRS      |    .5 HRS     |
| PostCreate CSS         |    H     |     2 HRS      |    .25 HRS    |
| ImageGrid JS           |    H     |     2 HRS      |     2 HRS     |
| ImageGrid CSS          |    H     |     2 HRS      |    1.5 HRS    |
| ImageFeed JS           |    H     |     2 HRS      |     2 HRS     |
| ImageFeed CSS          |    H     |     2 HRS      |   1.25 HRS    |
| Deployment             |    H     |      1 HR      |     1 HRS     |
| Media Queries          |    H     |     2 HRS      |    2.5 HRS    |
| TOTAL                  |          |     66 HRS     |   45.75 HRS   |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/YTeQ83x.png)
<br>

---

## Post-MVP

- _Add comments and likes._
- _Add search for users._
- _Change link upload to file upload._
- _Add video functionality._
- _Add follower relationships between users._
- _Add chat feature._
- _Add React Native for mobile app usage._

---

## Code Showcase

```
<footer>
        {!currentUser ? (
          <div>
            {location.pathname === "/sign-in" ? (
              <p className="footer-account">
                Don't have an account? <Link to="/sign-up" className="footer-account-link">Sign Up.</Link>
              </p>
            ) : (
              <p className="footer-account">
                Already have an account? <Link to="/sign-in" className="footer-account-link">Sign In.</Link>
              </p>
            )}
          </div>
        ) : (
          <div>
            <Link to="/">
              <img className="home-btn" src={homeIcon} alt="home icon" />
            </Link>
            <Link to={`/profile/${currentUser.id}`}>
              <img className="profile-btn" src={profileIcon} alt="profile icon" />
            </Link>
            {location.pathname === `/profile/${currentUser.id}` ? (
              <img className="logout-btn" onClick={handleLogout} src={logoutIcon} alt="logout icon" />
            ) : null}
          </div>
        )}
      </footer>
```

- _For my footer, I needed to conditionally render content based first on whether there was a current user and within that, the pathname. I used a ternary to check for a user, then useLocation to check the path/screen to render the correct footer content._

## Code Issues & Resolutions

- _My CRUD had been working without issue until the final night of the project, when suddenly create, update, and delete all started throwing errors. The requests would process on a delay, while throwing errors. I believe this is because Imgur was down that night, where my seed images are hosted. To work around the load time, I added '?' to and/or guard operators to my returns in both ImageFeed and ImageGrid to force the return to wait for posts to load before checking for content._
- _I needed to ensure that a user could not access any pages except for SignIn and SignUp without being logged in and viceversa for a user that is logged in. After a bit of research on redirects and working with classmates, I added conditionally rendered redirects on the routes in App.js._
