/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mec: {
          blue: "#0099FF",
          'blue-light': "#1099fd",
          'blue-dark': "#0077cc",
          'blue-surface': "rgba(0, 153, 255, 0.08)",
          'blue-tint': "#0099FF14",
          'blue-border': "rgba(0, 153, 255, 0.18)",
          text: "#1A1A1A",
          muted: "#4A4A4A",
          subtle: "#71717A",
          bgLight: "#F8F9FA",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
        'badge': '8px',
        'container': '16px',
      },
      boxShadow: {
        'soft-1': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-2': '0 8px 24px -4px rgba(0, 0, 0, 0.07), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'blue-glow': '0 8px 25px -4px rgba(0, 153, 255, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
