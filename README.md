# Kanoon AI Front-End Engineer Coding Challenge

## Overview

Welcome to the Kanoon AI Front-End Engineer Coding Challenge! This challenge is designed to assess your skills in React, Material-UI (MUI), and your ability to integrate with a backend API. You'll be building a simplified version of a legal document management system.

## Challenge Description

Your task is to create a React application that allows users to manage legal documents. The application should have the following features:

1. Document List: Display a list of legal documents with their titles, creation dates, and document types.
2. Document Search: Implement a search functionality that filters documents based on title or content.
3. Document Creation: Create a form to add new documents with fields for title, content, and document type.
4. Document View: Allow users to view the full content of a selected document.
5. Responsive Design: Ensure the application is responsive and works well on both desktop and mobile devices.

## Technical Requirements

1. Use React for building the user interface.
2. Implement state management using React hooks (useState, useContext, useReducer).
3. Use Material-UI (MUI) for styling and components.
4. Implement proper error handling and loading states.
5. Write clean, well-documented, and maintainable code.
6. Use Git for version control and commit your progress regularly.

## Backend Integration

We've provided a simple Node.js backend API for you to integrate with. The API endpoints are as follows:

- GET /api/documents: Fetch all documents
- GET /api/documents/:id: Fetch a specific document
- POST /api/documents: Create a new document
- GET /api/documents/search?q=:query: Search for documents

You'll need to implement the API calls in your React application using a library like Axios or fetch.

## Bonus Points (We recommend you do at least 1-2 of these!)

- Add a simple animation or transition effect when navigating between views.
- Implement unit tests for your React components using Jest and React Testing Library.
- Add a dark mode toggle using MUI's theming capabilities.
- Implement document categorization and filtering based on document types.
- Login/logout functionality that preserves log in state across different components.

## Evaluation Criteria

We'll be evaluating your submission based on the following criteria:

1. Functionality: Does the application work as expected and meet all requirements?
2. Code Quality: Is the code clean, well-organized, and following best practices?
3. UI/UX Design: Is the interface intuitive, responsive, and visually appealing?
4. Error Handling: How well does the application handle potential errors or edge cases?
5. MUI Proficiency: How effectively are MUI components and features utilized?
6. Backend Integration: How well is the backend API integrated into the application?

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm start` or `yarn start`.
4. The backend server can be started using `npm run server` or `yarn server`.

## Submission Guidelines

1. Create a new GitHub repository for your project.
2. Commit your code regularly to show your progress.
3. Include a README.md file with instructions on how to run your project and any additional notes you'd like to share.
4. Send us the link to your GitHub repository when you're finished.

Good luck, and we look forward to seeing your solution!
