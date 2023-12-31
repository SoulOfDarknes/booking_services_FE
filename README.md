# Bicycle Booking Services Admin Panel
## Description

This project is an administrative panel for bicycle booking services. 
It allows users to add, view, edit, and delete information about bicycles, as well as view statistics on available bicycles.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone [your repository link]
cd [your project folder name]
npm install
```
## Environment Setup

Before starting the application, ensure you have the .env file set up in your project root with all necessary configurations. 
Refer to the .env.example file for required environment variables.

## Running the Application

To run the application in development mode:
```bash
npm start
```
After starting, the application will be available at http://localhost:3000 in your browser.

## Building for Production

To build the application for production:
```bash
npm run build
```
The build will be optimized for the best performance. The files will be minified, and the filenames will include hashes.

## Features

- Add Bicycle: Allows adding new bicycles with their specifications.
- View Bicycles List: Displays all added bicycles.
- Change Bicycle Status: Enables changing the status of bicycles (available/busy/unavailable).
- Delete Bicycle: Removes a bicycle from the list.
- View Statistics: Shows statistics of bicycles (total count, count of available and busy bicycles, average cost).

## Testing

```bash
npm test
```

## Additional Information

For more detailed information about React and Create React App, visit the Create React App documentation and the React documentation.
