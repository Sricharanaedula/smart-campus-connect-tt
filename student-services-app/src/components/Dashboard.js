
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import SchoolIcon from '@mui/icons-material/School';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

const services = [
  {
    icon: <SchoolIcon fontSize="large" />,
    title: 'Transcript Request',
    description: 'Request official or unofficial transcripts.',
  },
  {
    icon: <CreditCardIcon fontSize="large" />,
    title: 'ID Card Replacement',
    description: 'Request a replacement for a lost or damaged student ID card.',
  },
  {
    icon: <AppRegistrationIcon fontSize="large" />,
    title: 'Course Registration Help',
    description: 'Get assistance with course registration, adding or dropping courses.',
  },
  {
    icon: <SupervisedUserCircleIcon fontSize="large" />,
    title: 'Counseling Services',
    description: 'Access academic, personal, or mental health counseling services.',
  },
  {
    icon: <HomeIcon fontSize="large" />,
    title: 'Hostel Services',
    description: 'Report maintenance issues, request a room change, or file a complaint.',
  },
  {
    icon: <DescriptionIcon fontSize="large" />,
    title: 'Academic Documents',
    description: 'Request various academic documents, such as enrollment verification letters.',
  },
];

const Dashboard = () => {
  return (
    <Container sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Services Dashboard
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
