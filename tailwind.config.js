module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      spacing: {
        '72': '18rem',
        '84': '80rem',
        '96': '24rem',
      },

      height: {
        sm: '8px',
        md: '330px',
        lg: '500px',
        xl: '700px',
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
       },
       minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '1.5px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
