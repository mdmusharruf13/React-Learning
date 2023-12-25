# Optimising our App
Readability
Reusability
Maintainability

Hook is nothing but a normal js function.   


### To Optimize your application

Chunking  
Code Splitting  
Dynamic Bundling  
Lazy Loading  
On Demand Loading  
Dynamic Import  

```js
const Instamart = lazy(() => import("./components/Instamart"));
```  
upon On Demand loading -> upon render -> suspend loading  

### Suspense & fallback
use suspense to handle loading page error
when it take time to load use fallback to show shimmer till then.

__Note :__ never load lazy() inside any component