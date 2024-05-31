/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/theme.{js,ts}'
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      spacing: {
        px: '0.8px',
        '9/10': '90%',
        xs: 'var(--mantine-spacing-xs)',
        sm: 'var(--mantine-spacing-sm)',
        md: 'var(--mantine-spacing-md)',
        lg: 'var(--mantine-spacing-lg)',
        xl: 'var(--mantine-spacing-xl)'
      },
      fontSize: {
        xs: 'var(--mantine-font-size-xs)',
        sm: 'var(--mantine-font-size-sm)',
        md: 'var(--mantine-font-size-md)',
        lg: 'var(--mantine-font-size-lg)',
        xl: 'var(--mantine-font-size-xl)'
      },
      lineHeight: {
        xs: 'var(--mantine-line-height-xs)',
        sm: 'var(--mantine-line-height-sm)',
        md: 'var(--mantine-line-height-md)',
        lg: 'var(--mantine-line-height-lg)',
        xl: 'var(--mantine-line-height-xl)'
      },
      boxShadow: {
        xs: 'var(--mantine-shadow-xs)',
        sm: 'var(--mantine-shadow-sm)',
        md: 'var(--mantine-shadow-md)',
        lg: 'var(--mantine-shadow-lg)',
        xl: 'var(--mantine-shadow-xl)'
      },
      dropShadow: {
        xs: 'var(--mantine-shadow-xs)',
        sm: 'var(--mantine-shadow-sm)',
        md: 'var(--mantine-shadow-md)',
        lg: 'var(--mantine-shadow-lg)',
        xl: 'var(--mantine-shadow-xl)'
      },
      borderRadius: {
        DEFAULT: 'var(--mantine-radius-default)',
        xs: 'var(--mantine-radius-xs)',
        sm: 'var(--mantine-radius-sm)',
        md: 'var(--mantine-radius-md)',
        lg: 'var(--mantine-radius-lg)',
        xl: 'var(--mantine-radius-xl)'
      },
      zIndex: {
        app: 'var(--mantine-z-index-app)',
        modal: 'var(--mantine-z-index-modal)',
        popover: 'var(--mantine-z-index-popover)',
        overlay: 'var(--mantine-z-index-overlay)'
      },
      minHeight: {
        bounds: 'var(--max-h)'
      },
      minWidth: {
        bounds: 'var(--max-w)'
      },
      maxHeight: {
        bounds: 'var(--max-h)'
      },
      maxWidth: {
        bounds: 'var(--max-w)'
      },
      fontFamily: {
        title: 'var(--mantine-font-family-headings)',
        display: 'var(--mantine-font-family)',
        monospace: 'var(--mantine-font-family-monospace)'
      },
      data: {
        open: 'state=open',
        closed: 'state=closed',
        active: 'state=active',
        inactive: 'state=inactive',
        checked: 'state=checked',
        unchecked: 'state=unchecked',
        valid: 'state=valid',
        invalid: 'state=invalid',
        disabled: 'disabled'
      }
    },
    screens: {
      sm: 'em(640px)',
      md: 'em(768px)',
      lg: 'em(1024px)',
      xl: 'em(1280px)',
      '2xl': 'em(1536px)'
    }
  }
};
