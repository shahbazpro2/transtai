module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('/image1.jpeg')",
        'image2': "url('/image2.jpeg')",
        'image3': "url('/image3.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
