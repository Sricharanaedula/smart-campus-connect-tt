
import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';

const Step2 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderServiceSpecificFields = () => {
    switch (formData.service) {
      case 'Transcript Request':
        return (
          <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type</InputLabel>
              <Select name="transcriptType" label="Type" onChange={handleChange}>
                <MenuItem value="Official">Official</MenuItem>
                <MenuItem value="Unofficial">Unofficial</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Delivery Method</InputLabel>
              <Select name="deliveryMethod" label="Delivery Method" onChange={handleChange}>
                <MenuItem value="Email">Email</MenuItem>
                <MenuItem value="Postal">Postal</MenuItem>
              </Select>
            </FormControl>
            <TextField name="recipientDetails" label="Recipient Details" fullWidth margin="normal" onChange={handleChange} />
            <TextField name="numberOfCopies" label="Number of Copies" type="number" fullWidth margin="normal" onChange={handleChange} />
          </div>
        );
      case 'ID Card Replacement':
        return (
          <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Reason</InputLabel>
              <Select name="reason" label="Reason" onChange={handleChange}>
                <MenuItem value="Lost">Lost</MenuItem>
                <MenuItem value="Damaged">Damaged</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" component="label">
              Upload Photo
              <input type="file" hidden />
            </Button>
            <Typography>Payment Required</Typography>
          </div>
        );
      case 'Course Registration Help':
        return (
          <div>
            <TextField name="semester" label="Semester" fullWidth margin="normal" onChange={handleChange} />
            <TextField name="courses" label="Courses (comma-separated)" fullWidth margin="normal" onChange={handleChange} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Issue Type</InputLabel>
              <Select name="issueType" label="Issue Type" onChange={handleChange}>
                <MenuItem value="Add">Add</MenuItem>
                <MenuItem value="Drop">Drop</MenuItem>
                <MenuItem value="Conflict">Conflict</MenuItem>
              </Select>
            </FormControl>
            <TextField name="comments" label="Comments" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
          </div>
        );
      case 'Counseling Services':
        return (
          <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type</InputLabel>
              <Select name="counselingType" label="Type" onChange={handleChange}>
                <MenuItem value="Academic">Academic</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Mental Health">Mental Health</MenuItem>
              </Select>
            </FormControl>
            <TextField name="dateTime" label="Preferred Date & Time" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Mode</InputLabel>
              <Select name="mode" label="Mode" onChange={handleChange}>
                <MenuItem value="Online">Online</MenuItem>
                <MenuItem value="In-person">In-person</MenuItem>
              </Select>
            </FormControl>
            <TextField name="message" label="Message" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
          </div>
        );
      case 'Hostel Services':
        return (
          <div>
            <FormControl fullWidth margin="normal">
              <InputLabel>Issue Type</InputLabel>
              <Select name="issueType" label="Issue Type" onChange={handleChange}>
                <MenuItem value="Maintenance">Maintenance</MenuItem>
                <MenuItem value="Room Change">Room Change</MenuItem>
                <MenuItem value="Complaint">Complaint</MenuItem>
              </Select>
            </FormControl>
            <TextField name="roomNumber" label="Room Number" fullWidth margin="normal" onChange={handleChange} />
            <TextField name="description" label="Description" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
            <Button variant="contained" component="label">
              Upload Images
              <input type="file" hidden multiple />
            </Button>
          </div>
        );
      case 'Academic Documents':
        return (
          <div>
            <TextField name="documentType" label="Document Type" fullWidth margin="normal" onChange={handleChange} />
            <TextField name="purpose" label="Purpose" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Delivery Method</InputLabel>
              <Select name="deliveryMethod" label="Delivery Method" onChange={handleChange}>
                <MenuItem value="Email">Email</MenuItem>
                <MenuItem value="Postal">Postal</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      default:
        return <Typography>Please select a service from the dashboard.</Typography>;
    }
  };

  return <div>{renderServiceSpecificFields()}</div>;
};

export default Step2;
