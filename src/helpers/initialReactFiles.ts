export const getInitialAppFileContent = () => {
  // Provide the initial content for App.js file
  return `import React from 'react';
  
  const App = () => {
  return (
    <div>
      <h1>Welcome to your GitLab repository!</h1>
      <p>Initial React file.</p>
    </div>
  );
  };
  
  export default App;
  `;
};

export const getIndexFileContent = () => {
  return `import ReactDOM from "react-dom/client";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App />);
  
  reportWebVitals();
  `;
};

export const getIndexHtml = () => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
    `;
};

export const getWebVitals = () => {
  return `import { ReportHandler } from "web-vitals";
  
    const reportWebVitals = (onPerfEntry?: ReportHandler) => {
      if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        });
      }
    };
    
    export default reportWebVitals;
    `;
};

export const getPackageJsonContent = () => {
  return `{
      "name": "my-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.34",
        "@types/react": "^18.2.7",
        "@types/react-dom": "^18.2.4",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "eslintConfig": {
        "extends": [
          "react-app",
          "react-app/jest"
        ]
      },
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }
    `;
};

export const getTsConfigContent = () => {
  return `{
      "compilerOptions": {
        "target": "es5",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }
    `;
};

export const getReadMeContent = () => {
  return `# Getting Started with Create React App
  
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    
    ## Available Scripts
    
    In the project directory, you can run:
    
    ### npm start
    
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    
    The page will reload if you make edits.\
    You will also see any lint errors in the console.
    
    ### npm test
    
    Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
    
    ### npm run build
    
    Builds the app for production to the build folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.
    
    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!
    
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
    
    ### npm run eject
    
    **Note: this is a one-way operation. Once you eject, you can’t go back!**
    
    If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
    
    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
    
    You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
    
    ## Learn More
    
    You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
    
    To learn React, check out the [React documentation](https://reactjs.org/).
    `;
};
