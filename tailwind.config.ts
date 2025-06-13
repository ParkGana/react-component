export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)'
      },
      fontSize: {
        title: ['40px', { lineHeight: '48px', fontWeight: '700' }],
        body: ['16px', { lineHeight: '20px', fontWeight: '500' }],
        label: ['20px', { lineHeight: '28px', fontWeight: '700' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }]
      }
    }
  },
  plugins: []
};
