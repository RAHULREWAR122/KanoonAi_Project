import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function DocumentView({ document }) {
  // TODO: Implement document viewing logic

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {document?.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {document?.content}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Type: {document?.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created: {document?.createdAt && new Date(document.createdAt).toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
}

export default DocumentView;