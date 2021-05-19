This website portfolio application was created using React and Semantic UI React.
The application's source code is stored in `./src`.
The images used in the application are stored in `./src/assets`.

Requirements (make sure these are installed on your device before proceeding):
- Node.js
- npm

Note: Make sure that you are in the react-portfolio-website directory when running the listed commands in the command prompt.

To minimize the size of the folder, I excluded the `node_modules` directory from the `react-portfolio-website` directory.

To be able to use the react app, these modules must be reinstalled. To do this, run:

`npm install`

To run the react app on the development server, run:

`npm start`

Running the react app on the development server tends to be a slow process. If the user only intends to use the react app, it is recommmended to create a production build of this first, then run the build instead.

To create a production build of the react app, run:

`npm run build`

To run the production build of the react app, run the following commands:

```
npm install -g serve
serve -s build
```