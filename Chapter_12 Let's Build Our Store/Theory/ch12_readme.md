# Let's Build Our Store

### Why do we use useContext and context in previous chapter?  
To avoid prop drilling.

constext is centeral place. any conponent can access your context and change.

### Two types of layers in web-application
+ Data Layer 
+ UI Layer 

These 2 layer work together.  

### Redux. Why do we need ?
+ to manage data layer of your application.

### why do we use Redux ?
it is used for data management.

### what is problem in redux?
+ it is complex to setup.

### Libraries for working with redux
```js
npm i @reduxjs/toolkit // core of redux
npm i react-redux // bridge b/w react and redux
```

### Configuration   
```js

Create Store
 - configureStore() // redux-toolkit

provide my store to app
 - <Provider store={store} />  // import from react-redux

Slice
 - RTK - createSlice({
    name: "",
    initialState:
    reducers: {
        addItem: (state, action) => {},
        removeItem: (state) => {},
        clearCart: () => {},
    }
 })
 export const { addItem, removeItem, clearCart } = cartSlice.actions;
 export default cartSlice.reducer;

Put that slice into store
    - {
        reducer: {
            cart: cartSlice,
        }
    }
```


__Note :__ useSelector is used to subscribe to the store. if you subscribe to whole store then after every update our component changes. to increase performance subscribe to specific required slice of the store.
