module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{

      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '600px',
      },
      fontFamliy:{
        body:['DM Sans']
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '2.5rem',
         '6xl': '4rem',
        '7xl': '5rem',
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
