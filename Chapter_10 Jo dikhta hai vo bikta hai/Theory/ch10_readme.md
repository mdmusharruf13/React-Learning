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