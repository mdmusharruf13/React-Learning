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
