
import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = ['Common Details', 'Service-Specific Details', 'Review & Submit'];

const ServiceRequestForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const service = searchParams.get('service');
    if (service) {
      setFormData((prevFormData) => ({ ...prevFormData, service }));
    }
  }, [location]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Service Request: {formData.service}
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&apos;re finished</Typography>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ServiceRequestForm;
