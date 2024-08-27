# Kanoon AI Front-End Engineer Coding Challenge

## Overview

Welcome to this repository, i have complect project. in this project i use MUI for components, Scss for some styling. In this project 3 routes '/' and second is '/login' and third is a dynamic route which is view/id.
when you come first time then you need to login before access "/" and dynamic page.    

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm start` or `yarn start`.
4. The backend server can be started using `npm run server` or `yarn server`.


## Backend Integration

  We've provided a simple Node.js backend API for you to integrate with. The API endpoints are as follows:

- GET /api/documents: Fetch all documents
- GET /api/documents/:id: Fetch a specific document
- POST /api/documents: Create a new document
- GET /api/document/search?q=:query: Search for documents

You'll need to implement the API calls in your React application using a library like Axios or fetch.

## 2 Bonus Points Added

- Add a simple animation or transition effect when navigating between views.
- Login/logout functionality that preserves log in state across different components.


## About project
  In this project i use sessionStorage to store user data, use can login simply with name and password. after submit user will navigate to "/" page here show user name and logout button and also Search Component. When user search a document using document title or content if available then list show else show data not found.
  if data present then show list and when you click a particular list then it will navigate user to "/view/id" and here user can see complect information about that list.
  and here also a back button with back arrow i user here React icon package for icons. and when user click on back button then user navigate to "/" page.
  here also a list show for all documents and here same functionality like when user click a particular list then it navigate to "/view/id" page.
  User can add new documents with document title, document type, document content and click to Submit button.
  if user try to Submit data without input something then it give a error. ex. "title is required"
