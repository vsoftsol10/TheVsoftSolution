import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  StepConnector,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StepUp.css';
import StepUpLogo from '../assets/StepUp-final.avif';
import StepHero from '../assets/stephero2.webp';
import SapImg from '../assets/sapprogram.webp';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const StepUp = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  
  // Refs for animation targets
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const cardImageRef = useRef(null);
  const cardContentRef = useRef(null);
  const stayConnectedRef = useRef(null);
  const listItemsRef = useRef([]);
  const buttonRef = useRef(null);
  
  const [isLoaded, setIsLoaded] = useState(false);

  const ColorConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  }));

  // Animation setup using useLayoutEffect for DOM measurements
  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([logoRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(overlayRef.current, {
        opacity: 0
      });
      
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 100
      });
      
      gsap.set(cardImageRef.current, {
        scale: 1.2,
        opacity: 0
      });
      
      gsap.set(cardContentRef.current, {
        opacity: 0,
        x: isMobile ? 0 : 50
      });
      
      gsap.set(stayConnectedRef.current, {
        opacity: 0,
        y: 50
      });

      // Hero section entrance animation
      const heroTimeline = gsap.timeline({ delay: 0.2 });
      
      heroTimeline
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        })
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.4")
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.6")
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.6");

      // Card section scroll-triggered animation
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          const cardTimeline = gsap.timeline();
          
          cardTimeline
            .to(cardRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out"
            })
            .to(cardImageRef.current, {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out"
            }, "-=0.8")
            .to(cardContentRef.current, {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out"
            }, "-=0.8");
        }
      });

      // Animate list items with stagger
      ScrollTrigger.create({
        trigger: cardContentRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(listItemsRef.current, 
            {
              opacity: 0,
              x: -20
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.5
            }
          );
        }
      });

      // Button hover animation
      if (buttonRef.current) {
        const button = buttonRef.current;
        
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
      }

      // Stay Connected section animation
      ScrollTrigger.create({
        trigger: stayConnectedRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(stayConnectedRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          });
        }
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [isLoaded, isMobile]);

  // Handle component mount and image loading
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // Add list items to refs array
  const addToListRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  return (
    <div className="stepup-container" ref={containerRef}>
      <div
        className="hero-section"
        style={{
          position: 'relative',
          backgroundImage: `url(${StepHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Overlay to reduce opacity */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          }}
        ></div>

        {/* Actual Content */}
        <div className="hero-content" ref={heroContentRef} style={{ zIndex: 2, textAlign: 'center' }}>
          <div className="logo-container" ref={logoRef}>
            <img
              src={StepUpLogo}
              alt="Step Up Logo"
              width="380"
              height="auto"
              className="logo"
            />
          </div>

          <h1 
            className="hero-title" 
            ref={titleRef}
            style={{ color: '#fff' }}
          >
            Let's Step Up to Our Growth
          </h1>
          <p 
            className="hero-subtitle" 
            ref={subtitleRef}
            style={{ color: '#fff', fontWeight: 'bold' }}
          >
            Build your future with VSoft
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Card
            ref={cardRef}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              minHeight: { md: 400 },
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            {/* Left side - Image */}
            <CardMedia
              ref={cardImageRef}
              component="img"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 250, md: 'auto' },
                objectFit: 'cover'
              }}
              image={SapImg}
              alt="sap"
            />

            {/* Right side - Content */}
            <CardContent
              ref={cardContentRef}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 2, sm: 3, md: 4 },
                backgroundColor: '#f8f9fa',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                SAP Internship/Training Program
              </Typography>

              <Typography
                fontWeight="bold"
                color="primary"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  mb: { xs: 2, sm: 3 }
                }}
              >
                StepUp - 75 Days Internship & Training Program
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                <strong>StepUp by VSoft Solutions</strong> is offering a <strong>75-day (3-month)</strong> internship and training
                program specially crafted for:
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                <strong>Students</strong> who want to build their IT career<br />
                <strong>Women</strong> looking to restart their professional journey after a break
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                This program includes:
              </Typography>

              <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 2 }}>
                {[
                  'Real-time technical & practical training',
                  'Hands-on project experience',
                  'Certification upon successful completion',
                  'Placement assistance and soft skill development',
                ].map((item, idx) => (
                  <li key={idx} ref={addToListRefs}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  mt: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                🔔 Why wait? Let StepUp guide your growth journey.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 3, sm: 4 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  ref={buttonRef}
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/stepupsap')}
                  sx={{
                    backgroundColor: 'purple',
                    '&:hover': {
                      backgroundColor: 'indigo'
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Know More →
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
        
        {/* Stay Connected */}
        <section className="stay-connected" ref={stayConnectedRef}>
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
            Stay Connected with Us
          </h2>
          <h3 className="text-xl text-center text-gray-700 mb-4">
            Unlock Your Future with Opportunities That Matter!
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
            We're just getting started! 🎯 Join us to receive updates on new internship programs,
            exclusive discounts, and career-boosting offers-designed especially for students
            and job-seeking women. Let's grow, learn, and rise together.
          </p>

          <p className="text-center text-purple-600 font-medium mb-6">
            Stay connected — exciting new updates are on the way!
          </p>

          <div className="flex justify-center">
            <button
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us & Stay Informed
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepUp;