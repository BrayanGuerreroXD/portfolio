import { createTheme } from '@mui/material/styles'

/**
 * Design tokens extracted from the "Aetheric Terminal" Stitch design system.
 * Exported separately so components can reference the exact palette the
 * MUI theme is built from (e.g. for glow shadows and dashed borders).
 */
export const colors = {
  background: '#101415',
  surface: '#101415',
  surfaceDim: '#101415',
  surfaceBright: '#363a3b',
  surfaceContainerLowest: '#0b0f10',
  surfaceContainerLow: '#191c1e',
  surfaceContainer: '#1d2022',
  surfaceContainerHigh: '#272a2c',
  surfaceContainerHighest: '#323537',
  onSurface: '#e0e3e5',
  onSurfaceVariant: '#ccc3d7',
  outline: '#958da1',
  outlineVariant: '#4a4455',
  primary: '#d3bbff',
  primaryContainer: '#6d28d9',
  onPrimary: '#3f008d',
  onPrimaryContainer: '#dac5ff',
  primaryFixedDim: '#d3bbff',
  secondary: '#5de6ff',
  secondaryContainer: '#00cbe6',
  onSecondaryContainer: '#00515d',
  tertiary: '#c3c6d4',
  onTertiaryContainer: '#cccedd',
  error: '#ffb4ab',
} as const

const HEADLINE = '"Fredoka", "Segoe UI", sans-serif'
const MONO = '"Space Mono", "Roboto Mono", monospace'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.background,
      paper: colors.surfaceContainer,
    },
    primary: {
      main: colors.primary,
      dark: colors.primaryContainer,
      contrastText: colors.onPrimary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.onSecondaryContainer,
    },
    error: {
      main: colors.error,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
    },
    divider: colors.outlineVariant,
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: HEADLINE,
    h1: {
      fontFamily: HEADLINE,
      fontWeight: 800,
      fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: HEADLINE,
      fontWeight: 700,
      fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: HEADLINE,
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: HEADLINE,
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: HEADLINE,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: MONO,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'none',
    },
    // Custom monospace "terminal" label used across the UI.
    overline: {
      fontFamily: MONO,
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      lineHeight: 1,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
        },
      },
    },
  },
})

export const fonts = { HEADLINE, MONO }
