import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const steps = ['Your Info', 'Message', 'Confirm'];

const vsoftYellow = '#ffbd28';
const vsoftGray = '#332911ff';

const Contact = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Refs for animation targets
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const stepperRef = useRef(null);
    const formContainerRef = useRef(null);
    const buttonsRef = useRef(null);
    const bottomSectionRef = useRef(null);
    const bottomTitleRef = useRef(null);
    const bottomTextRef = useRef([]);

    const handleNext = () => {
        const newErrors = validateStep(activeStep);
        if (Object.keys(newErrors).length === 0) {
            // Animate step transition
            animateStepTransition(() => {
                setActiveStep((prev) => prev + 1);
            });
        } else {
            setErrors(newErrors);
            // Shake animation for errors
            gsap.to(formContainerRef.current, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    const handleBack = () => {
        animateStepTransition(() => {
            setActiveStep((prev) => prev - 1);
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateStep = (step) => {
        let newErrors = {};
        if (step === 0) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.phone) newErrors.phone = 'Phone is required';
        }
        if (step === 1) {
            if (!formData.message) newErrors.message = 'Message is required';
        }
        return newErrors;
    };

    const animateStepTransition = (callback) => {
        gsap.to(formContainerRef.current, {
            opacity: 0,
            x: -30,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                callback();
                gsap.fromTo(formContainerRef.current, 
                    { opacity: 0, x: 30 },
                    { 
                        opacity: 1, 
                        x: 0, 
                        duration: 0.3, 
                        ease: "power2.out" 
                    }
                );
            }
        });
    };

    // Add refs to array for bottom text
    const addToBottomTextRefs = (el) => {
        if (el && !bottomTextRef.current.includes(el)) {
            bottomTextRef.current.push(el);
        }
    };

    // Initial animations setup
    useLayoutEffect(() => {
        if (!isLoaded) return;

        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
                opacity: 0,
                y: 50
            });

            gsap.set(stepperRef.current, {
                opacity: 0,
                y: 30
            });

            gsap.set(formContainerRef.current, {
                opacity: 0,
                y: 30
            });

            gsap.set(buttonsRef.current, {
                opacity: 0,
                y: 20
            });

            gsap.set(bottomSectionRef.current, {
                opacity: 0,
                y: 50
            });

            gsap.set(bottomTitleRef.current, {
                opacity: 0,
                y: 50
            });

            gsap.set(bottomTextRef.current, {
                opacity: 0,
                y: 30
            });

            // Main entrance animation
            const mainTimeline = gsap.timeline({ delay: 0.2 });

            mainTimeline
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                })
                .to(subtitleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.4")
                .to(descriptionRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.3")
                .to(stepperRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.3")
                .to(formContainerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.2")
                .to(buttonsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.2");

            // Bottom section scroll animation
            ScrollTrigger.create({
                trigger: bottomSectionRef.current,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(bottomSectionRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });

                    gsap.to(bottomTitleRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        delay: 0.2
                    });

                    gsap.to(bottomTextRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.2,
                        ease: "power2.out",
                        delay: 0.4
                    });
                }
            });

            // Button hover animations
            const buttons = buttonsRef.current?.querySelectorAll('button');
            buttons?.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [isLoaded]);

    // Handle component mount
    useEffect(() => {
        const timer = requestAnimationFrame(() => {
            setIsLoaded(true);
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    // Animate step changes
    useLayoutEffect(() => {
        if (!isLoaded) return;

        // Animate stepper step change
        gsap.fromTo(stepperRef.current,
            { scale: 0.95 },
            { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.out" 
            }
        );
    }, [activeStep, isLoaded]);

    return (
        <Container maxWidth="md" ref={containerRef}>
            <Box py={6}>
                <Typography 
                    variant="h4" 
                    align="center" 
                    fontWeight="bold" 
                    gutterBottom
                    ref={titleRef}
                >
                    Get In <span style={{ color: '#ffbd28', fontSize: '2rem' }}>Touch</span>
                </Typography>
                
                <Typography align="center" mb={4} ref={subtitleRef}>
                    At VSoft Solutions, we're excited to be a part of your next big idea! Whether you're launching a new product, boosting your digital presence, or transforming your business online, we're here to help make it happen.
                </Typography>
                
                <Typography align="center" mb={4} ref={descriptionRef}>
                    <b>Let's collaborate, innovate, and grow–together!</b>
                </Typography>

                <Box ref={stepperRef}>
                    <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Box mt={4} ref={formContainerRef}>
                    {activeStep === 0 && (
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                            />
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                fullWidth
                            />
                        </Box>
                    )}

                    {activeStep === 1 && (
                        <TextField
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            fullWidth
                            multiline
                            rows={6}
                        />
                    )}

                    {activeStep === 2 && (
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Thank you for contacting us!
                            </Typography>
                            <Typography color={vsoftGray}>
                                We've received your details and will respond shortly.
                            </Typography>
                        </Box>
                    )}
                </Box>

                <Box mt={4} display="flex" justifyContent="space-between" ref={buttonsRef}>
                    {activeStep > 0 && activeStep < steps.length && (
                        <Button onClick={handleBack} sx={{ color: vsoftGray }}>
                            Back
                        </Button>
                    )}
                    {activeStep < steps.length - 1 && (
                        <Button
                            onClick={handleNext}
                            sx={{
                                bgcolor: vsoftYellow,
                                color: '#fff',
                                '&:hover': { bgcolor: vsoftGray },
                            }}
                        >
                            Next
                        </Button>
                    )}
                </Box>
            </Box>

            <Box py={6} ref={bottomSectionRef}>
                <Typography 
                    variant="h4" 
                    align="center" 
                    fontWeight="bold" 
                    gutterBottom
                    ref={bottomTitleRef}
                >
                    Let's Connect <span style={{ color: vsoftYellow, fontSize: '2rem' }}>V</span><span style={{ color: vsoftGray, fontSize: '2rem' }}>Soft</span> <span style={{ color: vsoftGray, fontSize: '2rem' }}>Solutions</span>
                </Typography>

                <Typography 
                    variant='body1' 
                    align="center" 
                    mb={4}
                    ref={addToBottomTextRefs}
                >
                    Get in touch with VSoft Solutions for all your business and digital requirements. Whether you're looking to develop a website, mobile app, or need expert digital marketing solutions, we're here to help you bring your vision to life.
                </Typography>
                
                <Typography 
                    variant='body1' 
                    align="center" 
                    mb={4}
                    ref={addToBottomTextRefs}
                >
                    We offer reliable, creative, and budget-friendly solutions to help your business grow and thrive. Partner with us to get your projects developed on time and within your budget estimate – without compromising on quality
                </Typography>
            </Box>
        </Container>
    );
};

export default Contact;