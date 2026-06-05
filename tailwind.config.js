/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#050816',
        ink: '#0B1020',
        muted: '#667085',
        line: '#E6EAF2',
        soft: '#F7F8FC',
        blue: '#3991F0',
        violet: '#7E58DF',
        magenta: '#B926D3',
        teal: '#14B8A6',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Sora', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 60px rgba(15, 23, 42, 0.08)',
        glow: '0 20px 80px rgba(57, 145, 240, 0.24)',
      },
      backgroundImage: {
        brand: 'linear-gradient(135deg, #3991F0 0%, #7E58DF 48%, #B926D3 100%)',
        impact: 'linear-gradient(135deg, #3991F0 0%, #14B8A6 100%)',
      },
    },
  },
  plugins: [],
};
