/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{css,html,ts}'],
    // use .dark to toggle dark mode - since 'media' (default) does not work in NativeScript
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false, // disables browser-specific resets
    },
  };
  