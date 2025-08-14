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
const StepUpCloud = () => {
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
                        <Typography color="text.primary">Cloud Internship</Typography>
                    </Breadcrumbs>
                </Box>
                <section className="course-details">
                    <h2 className="section-title">Cloud Internship Details</h2>
                    <h3 className="section-subtitle">30-Day Cloud Computing Internship Program for Students</h3>

                    <div className="tailor-made-section">
                        <h4 className="tailor-title">Designed for Aspiring Cloud Professionals</h4>

                        <div className="eligibility-card">
                            <h5>Eligibility:</h5>
                            <div className="chips-container">
                                <span className="chip">CSE</span>
                                <span className="chip">IT</span>
                                <span className="chip">ECE</span>
                                <span className="chip">B.Sc Computer Science</span>
                                <span className="chip">B.Sc Arts</span>
                            </div>
                        </div>
                    </div>

                    <div className="course-options">
                        <div className="course-card internship-card">
                            <div className="card-header">
                                <h3>30-Day Internship</h3>
                            </div>
                            <ul className="feature-list">
                                <li>✓ Duration: 30 Days</li>
                                <li>✓ Fee: ₹3,500</li>
                                <li>✓ Hands-on Cloud Basics & Fundamentals</li>
                                <li>✓ Real-Time Project Exposure</li>
                            </ul>
                            <div className="special-offer">
                                💡 Complete internship & get exclusive training discounts!
                            </div>
                        </div>

                        <div className="course-card training-card">
                            <div className="card-header">
                                <h3>Advanced Cloud Training</h3>
                            </div>
                            <ul className="feature-list">
                                <li>⭐ Duration: 30 Days</li>
                                <li>⭐ Live Practical Training</li>
                                <li>⭐ Course Completion & Internship Certificate</li>
                            </ul>
                            <div className="cta-button-container">
                                <button
                                    className="cta-button"
                                    onClick={() => window.open('https://forms.gle/8wGctSZNV9bgaH4k7', '_blank')}
                                >
                                    Join Now – Apply Here
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default StepUpCloud