# Data is the new Oil  

Every application has two layer  
+ Data Layer  
+ UI Layer 

Babel convert jsx to js objects that object is used to build virtual dom and that virtual dom is used for reconciliation.

### Props Drilling  
+ passing data from parent component to child components
+ con: changing data will make all the components to re-render.


### Passing data from child component to parent component  
+ custom hooks can be used 

__Note :__ updating localstorage is costly operation.

Context is like useState for your whole application.