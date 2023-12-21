# Laying the Foundation

### Babel
A babel is just a js node package/library

Modern javascript is converted into older that is known as polyfill


```
"start": "parcel public/index.html",
"build": "parcel build public/index.html",
```

### plugin
babel-plugin-transfrom-remove-console

```
npm install babel-plugin-transform-remove-console --save-dev

```
```
// with options
{
  "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
}
```

### What is JSX ? (JavaScriptXML)
JSX is HTML Like syntax but not HTML inside JavaScript.
JSX uses React.createElement() behind the scene.
babel convert JSX to React.createElement().
it is just a way of writing HTML inside JavaScript.

### babel advantages   
+ Readability
+ secure (sanitization)

### Components 
+ Functional based Components
+ Class based Components

Class based is older way of writing the code. Functional based is new way of writing the code.  
functional component is nothing but a javascript function that return a component or jsx. It can also return react element. 
Functional component or any component the name start with a capital letter (not mandatory but goot practice)

### Functional component example
```
const HeaderComponent = () => {
  return <h1>Heading from functonal component</h1>;
}
```

__Note :__ React elements are rendered direct by when it is functional component we should wrap it with "<name />" angular braces. see below example
```js
// if it is react element
render(react-element)

// if it is functional component
render(<reactComponent/>)
```

