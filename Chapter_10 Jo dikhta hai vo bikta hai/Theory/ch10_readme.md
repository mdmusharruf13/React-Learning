# Jo dikhta hai vo bikta hai

### Ways to write css
+ Normal Native CSS
+ SCSS
+ Component Libraries - Materail UI, Base UI, Ant, Chakra
+ Styled Components

### Tailwind CSS Framework
+ CSS on the go (in the same file)
+ reusability
+ less bundle size
+ Flexible UI (Customization)

## [Check out Tailwind CSS ](https://tailwindcss.com)


### installation for parcel

```
npm install -D tailwindcss postcss
mpx tailwindcss init
```

### create file .postcssrc
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

### Configure your template paths
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### tailwindcss 

```
<div className="w-56">CSS</div>
```  
w-56 is equivaent to width: 14rem   

### Square bracket notation (dynamic tailwind classes)
__Note :__ there can be cases where you want exactly precise value then use []. see below    

```
<div className="w-[200px]">CSS</div>
```

this will give exactly 200px width. Try to use Native tailwind classes.

### Commonly used TailwindCSS Classes   
+ flex-wrap
+ flex-wrap-reverse
+ font-bold
+ bg-green-{100-900}
+ p-{number}
+ m-{number}
+ hover: bg-gray-500
+ focus: bg-green-200
+ shadow-lg
+ sm: bg-red-100(media query for small devices)