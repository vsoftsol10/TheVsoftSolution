import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Breadcrumbs,
    Link,
    Box,
    useMediaQuery,
    StepConnector,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import './StepUp.css';
import { useNavigate } from "react-router-dom";

const steps = [
    '21 Days Internship',
    '2 Months Technical + Practical Training',
    'SAP Basis Admin + Placement Assistance',
];
const StepUpSAP = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();
    const ColorConnector = styled(StepConnector)(({ theme }) => ({
        '& .MuiStepConnector-line': {
            borderColor: theme.palette.primary.main,     
            borderWidth: 2,
        },
    }));

    return (
        <>
            <div className="main-content">
                <Box sx={{ px: 2, py: 2 }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                        <Link
                            underline="hover"
                            color="inherit"
                            onClick={() => navigate('/stepup')}
                            sx={{ cursor: 'pointer' }}
                        >
                            Step Up
                        </Link>
                        <Typography color="text.primary">SAP Basis</Typography>
                    </Breadcrumbs>
                </Box>
                <section className="course-details">
                    <h2 className="section-title">SAP Course Details</h2>
                    <h3 className="section-subtitle">Professional SAP Basis Administration Training</h3>

                    <div className="tailor-made-section">
                        <h4 className="tailor-title">Tailor Made For Each Student</h4>

                        <div className="eligibility-card">
                            <h5>Eligibility:</h5>
                            <div className="chips-container">
                                <span className="chip">CSE</span>
                                <span className="chip">IT</span>
                                <span className="chip">ECE</span>
                                <span className="chip">B.Sc Science</span>
                                <span className="chip">B.Sc Arts</span>
                            </div>
                        </div>
                    </div>

                    <div className="course-options">
                        <div className="course-card internship-card">
                            <div className="card-header">
                                <h3>Internship Program</h3>
                            </div>
                            <ul className="feature-list">
                                <li>✓ Duration: 1 Months</li>
                                <li>✓ Fee: ₹3,500</li>
                                <li>✓ SAP Basics & Fundamentals</li>
                            </ul>
                            <div className="special-offer">
                                💡 Complete internship & get training discount!
                            </div>
                        </div>

                        <div className="course-card training-card">
                            <div className="card-header">
                                <h3>Complete Training</h3>
                            </div>
                            <ul className="feature-list">
                                <li>⭐ Duration: 75 Days</li>
                                <li>⭐ Placement Assistance</li>
                                <li>⭐ Theory + Practical</li>
                                <li>⭐ SAP Certification</li>
                            </ul>
                            <div className="cta-button-container">
                                <button
                                    className="cta-button"
                                    onClick={() => window.open('https://forms.gle/4KeQeS3DZs92KTZSA', '_blank')}>
                                    Join Course Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Box sx={{ width: '100%', px: 2, py: 4 }}>
                    <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                        Step Up Your Career
                    </Typography>

                    <Stepper
                        alternativeLabel={!isMobile}
                        orientation={isMobile ? 'vertical' : 'horizontal'}
                        connector={<ColorConnector />}
                    >
                        {steps.map((label, index) => (
                            <Step key={index} active completed>
                                <StepLabel>
                                    <Typography
                                        variant={isMobile ? 'body1' : 'subtitle1'}
                                        fontWeight="500"
                                        textAlign={isMobile ? 'left' : 'center'}
                                    >
                                        {label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
        </>
    )
}

export default StepUpSAP