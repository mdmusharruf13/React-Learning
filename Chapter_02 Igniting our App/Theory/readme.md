## Chapter 2

### install node_modules
```
npm install
```

### What Parcel can do ?
+ parcel is a bundler. 
+ It can Minify.
+ It clean our code for production purpose.
+ Create a server.
+ Hot Module Replacement
+ Dev and Production build
+ Super fast build algorithm
+ Image Optimization
+ Caching while development
+ Compersses files
+ Compatible with older version of browsers
+ HTTPS on dev
+ Port Number
+ Consitent Hashing Algorithm
+ Parcel is Zero Config bundler

### install parcel as devDependency
```
npm install -D parcel
```

### install react 
```
npm install react
```

### install react
```
npm install react-dom
```

__Note:__ We can import modules but not scripts.
```
<script type="module" src="index.js"></script>
```

### start your development server
```
npx parcel index.html
npx parcel index.html --https
```
Making index.html as entry point. Here npx means execute using parcel.

### Production build syntax
```
npx parcel build index.html
```
it builds files for production.

__Note:__ Hot Module Reloading(HMR), file watcher algorithm (written in c++). 

### Transitive Dependencies
We have our package manager which handles and takes care of Transitive dependencies of our code.

when you have to build production ready app we need to do lot of things like minification, bundling, caching,differential bundling , image compression and some many things we need to do and we can't do this alone. we need some dependencies on it, when we need dependencies so, those dependencies are also dependent on something.