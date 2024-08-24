import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function DocumentList() {
  // TODO: Implement fetching documents from API
  const documents = [];

  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        Document List
      </Typography>
      <List>
        {documents.map((doc) => (
          <ListItem key={doc.id}>
            <ListItemText 
              primary={doc.title}
              secondary={`${doc.type} - ${new Date(doc.createdAt).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DocumentList;