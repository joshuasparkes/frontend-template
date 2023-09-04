import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography  variant="body2" color="#fff">
      {'Copyright © '}
      <Link color="#fff">
        TherapInsights
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[900]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography color={'white'} variant="body1">
              TherapInsights
            </Typography>
            <Copyright />
          </Container>
        </Box>
    </ThemeProvider>
  );
}