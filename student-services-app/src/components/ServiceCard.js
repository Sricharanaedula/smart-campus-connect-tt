
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  color: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  const navigate = useNavigate();

  const handleRequestService = () => {
    navigate(`/request?service=${encodeURIComponent(title)}`);
  };

  return (
    <StyledCard>
      <CardContent>
        {icon}
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleRequestService}>Request Service</Button>
      </CardActions>
    </StyledCard>
  );
};

export default ServiceCard;
