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
      |__ images
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

| Task                    | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| README & planning       |    H     |     8 HRS      |     8 HRS     |             |
| Backend Setup           |    H     |     2 HRS      |               |             |
| Backend Auth            |    H     |     3 HRS      |               |             |
| Backend Database        |    H     |     3 HRS      |               |             |
| Seed & Create data      |    H     |     2 HRS      |               |             |
| Test backend routes     |    H     |      1 HR      |               |             |
| Frontend Auth           |    H     |     3 HRS      |               |             |
| Frontend routes & test  |    H     |     2 HRS      |               |             |
| Get, Edit, Delete posts |    H     |     3 HRS      |               |             |
| Layout/Nav/Footer JS    |    H     |     2 HRS      |               |             |
| Layout/Nav/Footer CSS   |    H     |     2 HRS      |               |             |
| App JS                  |    H     |     2 HRS      |               |             |
| App CSS                 |    H     |      1 HR      |               |             |
| SignIn JS               |    H     |     2 HRS      |               |             |
| SignIn CSS              |    H     |     2 HRS      |               |             |
| SignUp JS               |    H     |     2 HRS      |               |             |
| SignUp CSS              |    H     |     2 HRS      |               |             |
| MainFeed JS             |    H     |     2 HRS      |               |             |
| MainFeed CSS            |    H     |     2 HRS      |               |             |
| UserProfile JS          |    H     |     2 HRS      |               |             |
| UserProfile CSS         |    H     |     2 HRS      |               |             |
| SingleUserFeed JS       |    H     |     2 HRS      |               |             |
| SingleUserFeed CSS      |    H     |     2 HRS      |               |             |
| PostEdit JS             |    H     |     2 HRS      |               |             |
| PostEdit CSS            |    H     |     2 HRS      |               |             |
| PostCreate JS           |    H     |     2 HRS      |               |             |
| PostCreate CSS          |    H     |     2 HRS      |               |             |
| ImageGrid JS            |    H     |     2 HRS      |               |             |
| ImageGrid CSS           |    H     |     2 HRS      |               |             |
| ImageFeed JS            |    H     |     2 HRS      |               |             |
| ImageFeed CSS           |    H     |     2 HRS      |               |             |
| TOTAL                   |          |     67 HRS     |     8 HRS     |             |

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
