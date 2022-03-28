module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        22: '5.625rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
