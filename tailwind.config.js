/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind procure classes em todos os seus componentes
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define 'Inter' como a fonte principal (sans)
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Você pode centralizar suas cores de marca aqui
        brand: {
          blue: '#3b82f6',   // O azul do badge (blue-500)
          yellow: '#facc15', // O amarelo do botão (yellow-400)
          green: '#16a34a',  // O verde do preço (green-600)
        },
      },
    },
  },
  plugins: [],
}

