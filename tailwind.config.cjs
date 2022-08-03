module.exports = {
  content: ['./dist/*.html', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lexend'],
        body: ['Inter'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#3b82f6',
        dark: '#0f172a',
        gray1: '#e2e8f0',
        gray2: '#cbd5e1',
        gray3: '#64748b',
        gray4: '#334155',
        gray5: '#f1f5f9',
      },
      spacing: {
        240: '60rem',
        280: '70rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
