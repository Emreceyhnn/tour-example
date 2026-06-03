import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B4A5C',
      light: '#42929D',
      dark: '#083A4A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#42929D',
      light: '#6BB8C2',
      dark: '#2D6E76',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FDFBF6',
      paper: '#FFFFFF',
    },
    surface: {
      main: '#fcf9f4',
      containerLow: '#f6f3ee',
      container: '#f0ede9',
      containerHigh: '#ebe8e3',
      containerHighest: '#e5e2dd',
      dim: '#dcdad5',
    },
    text: {
      primary: '#1c1c19',
      secondary: '#3e484c',
      disabled: '#6e797c',
    },
    accent: {
      coral: '#E8654A',
      teal: '#0b7a8f',
    },
    error: {
      main: '#ba1a1a',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '64px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '56px',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '28px',
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
    },
    subtitle1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      textTransform: 'none',
    },
    overline: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    accent: {
      fontFamily: '"Anybody", sans-serif',
      fontWeight: 300,
      fontSize: '24px',
      lineHeight: '24px',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '24px',
          fontWeight: 700,
          fontSize: '16px',
          padding: '12px 24px',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#083A4A',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
        },
      },
    },
  },
});

export default theme;
