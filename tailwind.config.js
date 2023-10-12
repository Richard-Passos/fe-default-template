const getColor = (cssVar) => `hsl(var(${cssVar}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/patterns/**/*.jsx',
    './src/views/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        base: getColor('--base'),
        content: getColor('--content'),
        muted: {
          DEFAULT: getColor('--muted'),
          content: getColor('--muted-c'),
        },
        primary: {
          DEFAULT: getColor('--primary'),
          content: getColor('--primary-c'),
        },
        secondary: {
          DEFAULT: getColor('--secondary'),
          content: getColor('--secondary-c'),
        },
        accent: {
          DEFAULT: getColor('--accent'),
          content: getColor('--accent-c'),
        },
        info: {
          DEFAULT: getColor('--info'),
          content: getColor('--info-c'),
        },
        warning: {
          DEFAULT: getColor('--warning'),
          content: getColor('--warning-c'),
        },
        danger: {
          DEFAULT: getColor('--danger'),
          content: getColor('--danger-c'),
        },
        current: 'currentColor',
      },
      fontSize: {
        base: '',
        md: ['1rem', '1.5rem'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        inherit: 'inherit',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--muted-c)/.5)',
      },
      keyframes: {
        'slide-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'slide-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      data: {
        checked: 'state=checked',
        closed: 'state=closed',
        open: 'state=open',
        disabled: 'disabled',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
