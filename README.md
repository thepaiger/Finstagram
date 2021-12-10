# Instagram

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

_The **Instagram** MVP will allow users to share and explore personal images. Upon log in, they will be displayed current posts from all users and have the ability to contribute their own images._

<br>

### Goals

- _User will be able to create account._
- _User will be able to create, update, and delete their user-specific posts._
- _User will be able to scroll through posts from all users._
- _User will be able to view their own profiles and the profiles of others._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end JavaScript library for building UIs based on components. |
| React-Router-Dom | Declarative routing for React. |
|      Axios       | Provides full CRUD capabilites using XMLHttpRequests. |
|   Ruby on Rails  | Server-side web application framework written in Ruby. |
|     Rack-CORS    | Ruby on Rails Cross-Origin Resource Sharing (CORS). |
|     Bcrypt       | Secure hashing algorithm for safely handling passwords. |
|        JWT       | Compact URL-safe means of representing claims to be transferred between two parties. |
|  Awesome Print   | Pretty prints Ruby objects in full color exposing their internal structure with proper indentation. |
<br>

### Client (Front End)

#### Wireframes

![Figma Wireframes](https://www.figma.com/file/da1YKFco0d6Y6jeghcTqt3/Instagram-Wireframes?node-id=0%3A1)

- Main Feed

<img src="https://imgur.com/lC1mOZt" title="Main Feed" />

- User Profile

<img src="https://imgur.com/QWFHG58" title="User Profile" />

- Single User Feed

<img src="https://imgur.com/Xvrwk58" title="Single User Feed" />

- Upload Post

<img src="https://imgur.com/PUzftGX" title="Upload Post" />

- Edit Post

<img src="https://imgur.com/Jtay8X7" title="Edit Post" />

- Sign In

<img src="https://imgur.com/J5Z2dSF" title="Sign In" />

- Sign Up

<img src="https://imgur.com/W9ONiea" title="Sign Up" />

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- _Add comments and likes._
- _Add search for users._
- _Add videos._
- _Add following/relations between users._
- _Add chat feature._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
