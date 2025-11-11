module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFB3D9',
          DEFAULT: '#FF69B4',
          dark: '#C71585',
        },
        // Adaugă alte culori variate aici
      },
      animation: {
        // Definirea animațiilor personalizate
        bounce: 'bounce 1s infinite',
        fade: 'fade 0.5s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}