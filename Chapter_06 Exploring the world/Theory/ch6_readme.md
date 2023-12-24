# Exploring the world

### Monolith


### Microservices

### useEffect 
It runs when some changes happen in the page. It takes a callback function and an dependency array. There are 3 ways you can use useEffect :
__without dependency array :__ execute useEffect once after initial render.
__with dependency array :__ once after initial render + every time after render (when dependency changes).
__with empty dependnecy array :__ 

__Syntax :__
```js
useEffect(callbackFn, dependencyArray);
```

### when does a component re-renders ?
+ when state changes
+ when props changes

