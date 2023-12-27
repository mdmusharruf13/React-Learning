# Time for the test  

### Types of testing:  
+ Manual Testing
+ Automation Testing
  + Selenium Testing
+ E2E Testing 
+ Unit Testing
+ Integrating Testing

  __Search for :__  
  + Headless browsers (kind of actual browser but does not show anything)


### Setup  
```js
// install react testing library
npm install --save-dev @testing-library/react

// install jest
npm i -D jest

// configure jest
npx jest --init

// start test
npm start test

// Validation Error:
// Test environment jest-environment-jsdom cannot be found
npm i -D jest-environment-jsdom

// start test
npx jest directoryName

// jest babel config
npm install --save-dev babel-jest @babel/core @babel/preset-env

// create babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

// .babelrc (alternative for babel.config.js file) accepts only json
{
  "presets": [['@babel/preset-env', {targets: {node: 'current'}}]],
}

// if you get error 'jsx' isn't currently enabled

```


### Jest  
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

### Problems
```js

Error:  could not find react-redux context value; please ensure the component is wrapped in a <Provider>

solution : <Provider> <yourComponent> </Provider>


Error:  TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.

       8 |
       9 |     // Load Header
    > 10 |     const header = render(
         |                          ^
      11 |         <Provider store={store}>
      12 |             <Header />

solution: (<StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>)


issue: when you use fetch it is not understand by jest here we have to create dummy data and pass to it. see below

global.fetch = jest.fn(() => {
  return Promise.resolve({              // you can either reject
    json: () => {
      Promise.resolve(dummyData),
    }
  })                 
})
```