
import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Step3 = ({ formData }) => {
  return (
    <div>
      <Typography variant="h6">Review Your Request</Typography>
      <List>
        {Object.entries(formData).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText primary={key} secondary={value} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Step3;
