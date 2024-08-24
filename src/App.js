import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme';
import DocumentList from './components/DocumentList';
import DocumentSearch from './components/DocumentSearch';
import DocumentForm from './components/DocumentForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <h1>Legal Document Management</h1>
          <DocumentSearch />
          <DocumentList />
          <DocumentForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;