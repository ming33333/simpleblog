## Notes 
github pages should auto launch when running npm run deploy since we are on main branch

## Reference

https://www.julesacree.com/all

## Lesson Learned

# Documentation of code and writing comments
Documentation best practice: JSDoc, a widely used standard for documenting JavaScript code

Explanation of JSDoc Tags
/** ... */:

The comment block starts with /** and ends with */.
@param:

Describes a parameter of the function.
Syntax: @param {type} name - Description
Example: @param {string} file - The name of the JSON file to fetch.
@returns:

Describes the return value of the function.
Syntax: @returns {type} - Description
Example: @returns {Promise<void>} - A promise that resolves when the content is fetched.
@throws:

Describes errors that the function might throw.
Syntax: @throws {Error} - Description
Example: @throws {Error} - Throws an error if the fetch fails.

Tools for Generating Documentation

JSDoc CLI: npm install -g jsdoc
JSDoc CLI: jsdoc -c jsdoc.json
VS Code Extensions: Install extensions like "Document This" or "JSDoc Comments" to auto-generate JSDoc comments.

# CSS

Global CSS: Good for small projects, easy to manage and centralize
CSS for each page or component: Best for medium to large projects, Modular and independent

Best Practice: Use both, global for shared styles and css modules for component specific

Use .module.css for component-specific styles.
Use global.css for shared styles.

# Component and Page Naming Conventions
Use PascalCase for naming React components and pages.
Each word in the name starts with an uppercase letter.
Example:
Header.js
BlogCard.js
Footer.js

The file name should match the component name exactly.
Example:
Component: Header
File: Header.js

# React src folder setup

- App.py root component of your React application. It acts as the entry point for your app's logic and structure.
Rendering the ContentRenderer component.
Using React Router (Routes and Route) to define paths and render content dynamically.
Fetching JSON files based on the current route.
- index.js The true entry point of the React app.
Renders the App component into the DOM using ReactDOM.render() or createRoot().

# React common subfolders in src
1. assets/

Stores static files like images, fonts, and videos.
Example: logo.png, banner.jpg.
2. components/

Contains reusable UI components shared across the app.
Example: Header.js, Footer.js, Button.js.
3. pages/

Contains components that represent entire pages, used in routing.
Example: Home.js, About.js, BlogWriting.js.
4. hooks/

Stores custom React hooks for reusable logic.
Example: useFetch.js, useAuth.js.
5. context/

Manages global state using React Context.
Example: AuthContext.js, ThemeContext.js.
6. services/

Contains API calls or external service logic.
Example: api.js, authService.js.
7. utils/

Stores helper functions and utilities.
Example: formatDate.js, validateInput.js.
8. styles/

Contains global or shared CSS/SCSS files.
Example: global.css, variables.scss.
# Software Stack

react, firestore

# GitHub Pages Deployment Instructions
This project is deployed using GitHub Pages. Follow these steps to deploy:

Install the gh-pages package:

Add the following to package.json:

"homepage": "https://<your-username>.github.io/<repository-name>"
Scripts:
Deploy the app:

Enable GitHub Pages in the repository settings under Settings > Pages.

Your app will be live at:
https://<your-username>.github.io/<repository-name>

# SimpleBlog

SimpleBlog is a React-based blogging platform that dynamically renders content from JSON files.

---

## GitHub Pages Deployment Instructions

1. Install the gh-pages package:
Run the following command:
npm install gh-pages --save-dev

2. Update package.json:

Add the following line to specify the homepage:
"homepage": "https://<your-username>.github.io/<repository-name>"
Add the following scripts:
3. Deploy the app:
Add to package json in "scripts"
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"

predeploy: Automatically runs npm run build before deploying.
deploy: Deploys the build folder to the gh-pages branch using the gh-pages package.

Run the following command:
npm run deploy

4. Enable GitHub Pages:

Go to your repository on GitHub.
Navigate to Settings > Pages.
Under "Source," select the gh-pages branch and click Save.
5. Access your app:
Your app will be live at:
https://<your-username>.github.io/<repository-name>
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Tasks
- Ads
  - ~~all required pages~~
  - app performance
  - routes work independently 
  - 10 pages with 500-1000 words content
  - ...etc?
  - ssl certification
  - X-Content-Type-Options
  - Content Security Policy (CSP)
  - addsense id searchable in code
  - whatever issue addsense returned in my submission
  - Proper Robots.txt Setup
- test 
 - test to ensure crawlers can find pages, could for SEO
 - generate-sitemaps.js need to be run every time for new pages,  create script auto update with deployment