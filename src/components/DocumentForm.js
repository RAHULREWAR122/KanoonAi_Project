import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function DocumentForm() {
  // TODO: Implement form state and submission

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Document
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        // TODO: Add value and onChange
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        // TODO: Add value and onChange
      />
      <TextField
        label="Document Type"
        variant="outlined"
        fullWidth
        margin="normal"
        // TODO: Add value and onChange
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Document
      </Button>
    </Box>
  );
}

export default DocumentForm;