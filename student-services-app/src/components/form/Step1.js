
import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const Step1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TextField name="fullName" label="Full Name" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="studentId" label="Student ID" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="phone" label="Phone Number" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="department" label="Department / Program" fullWidth margin="normal" onChange={handleChange} />
      <FormControl fullWidth margin="normal">
        <InputLabel>Priority</InputLabel>
        <Select name="priority" label="Priority" onChange={handleChange}>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="Urgent">Urgent</MenuItem>
        </Select>
      </FormControl>
      <TextField name="description" label="Description / Notes" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden multiple />
      </Button>
    </div>
  );
};

export default Step1;
