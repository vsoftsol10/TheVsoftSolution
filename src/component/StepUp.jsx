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
import CloudImg from '../assets/Cloud-Courses-Training.avif';

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
  const cardRefs = useRef([]);
  const cardImageRefs = useRef([]);
  const cardContentRefs = useRef([]);
  const stayConnectedRef = useRef(null);
  const listItemsRef = useRef([]);
  const buttonRefs = useRef([]);
  const heroRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const ColorConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  }));

  // Preload critical images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = StepHero;
        }),
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = StepUpLogo;
        }),
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = SapImg;
        }),
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = CloudImg;
        })
      ];

      try {
        await Promise.all(imagePromises);
        setHeroImageLoaded(true);
        setAllImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Still proceed with loading
        setHeroImageLoaded(true);
        setAllImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  // Animation setup using useLayoutEffect for DOM measurements
  useLayoutEffect(() => {
    if (!isLoaded || !heroImageLoaded) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([logoRef.current, titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(overlayRef.current, {
        opacity: 0
      });

      cardRefs.current.forEach(card => {
        if (card) {
          gsap.set(card, {
            opacity: 0,
            y: 100
          });
        }
      });

      cardImageRefs.current.forEach(img => {
        if (img) {
          gsap.set(img, {
            scale: 1.2,
            opacity: 0
          });
        }
      });

      cardContentRefs.current.forEach(content => {
        if (content) {
          gsap.set(content, {
            opacity: 0,
            x: isMobile ? 0 : 50
          });
        }
      });

      gsap.set(stayConnectedRef.current, {
        opacity: 0,
        y: 50
      });

      // Hero section entrance animation - starts immediately after image loads
      const heroTimeline = gsap.timeline({ delay: 0.1 });

      heroTimeline
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        })
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.4")
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.5")
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.5");

      // Card section scroll-triggered animations
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => {
            const cardTimeline = gsap.timeline();

            cardTimeline
              .to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
              })
              .to(cardImageRefs.current[index], {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out"
              }, "-=0.6")
              .to(cardContentRefs.current[index], {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
              }, "-=0.6");
          }
        });
      });

      // Animate list items with stagger
      ScrollTrigger.create({
        trigger: cardContentRefs.current[0],
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
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
              delay: 0.3
            }
          );
        }
      });

      // Button hover animations
      buttonRefs.current.forEach(button => {
        if (!button) return;

        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });

      // Stay Connected section animation
      ScrollTrigger.create({
        trigger: stayConnectedRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(stayConnectedRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [isLoaded, isMobile, heroImageLoaded]);

  // Handle component mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // Add refs to arrays
  const addToCardRefs = (el, index) => {
    if (el && cardRefs.current[index] !== el) {
      cardRefs.current[index] = el;
    }
  };

  const addToCardImageRefs = (el, index) => {
    if (el && cardImageRefs.current[index] !== el) {
      cardImageRefs.current[index] = el;
    }
  };

  const addToCardContentRefs = (el, index) => {
    if (el && cardContentRefs.current[index] !== el) {
      cardContentRefs.current[index] = el;
    }
  };

  const addToListRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  const addToButtonRefs = (el, index) => {
    if (el && buttonRefs.current[index] !== el) {
      buttonRefs.current[index] = el;
    }
  };

  return (
    <div className="stepup-container" ref={containerRef}>
      {/* Add preload links for critical resources */}
      <link rel="preload" as="image" href={StepHero} />
      <link rel="preload" as="image" href={StepUpLogo} />

      <div
        className="hero-section"
        ref={heroRef}
        style={{
          position: 'relative',
          backgroundImage: heroImageLoaded ? `url(${StepHero})` : 'none',
          backgroundColor: heroImageLoaded ? 'transparent' : '#2c3e50', // Fallback color
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
        {/* Loading state */}
        {!heroImageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#9cc4ecff',
            zIndex: 3
          }}>
          </div>
        )}

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
              fetchPriority='high'
              decoding='async'
              loading='eager'
              width="380"
              height="auto"
              className="logo"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>

          <h1
            className="hero-title"
            ref={titleRef}
            style={{
              color: '#fff',
              margin: '1rem 0',
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              lineHeight: 1.2
            }}
          >
            Let's Step Up to Our Growth
          </h1>
          <p
            className="hero-subtitle"
            ref={subtitleRef}
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              margin: '1rem 0'
            }}
          >
            Build your future with VSoft
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* SAP Program Card */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Card
            ref={(el) => addToCardRefs(el, 0)}
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
              ref={(el) => addToCardImageRefs(el, 0)}
              component="img"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 250, md: 'auto' },
                objectFit: 'cover'
              }}
              image={SapImg}
              alt="SAP Program"
              loading="lazy"
              decoding="async"
            />

            {/* Right side - Content */}
            <CardContent
              ref={(el) => addToCardContentRefs(el, 0)}
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
                  color: '#000',
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                SAP Internship/Training Program
              </Typography>

              <Typography
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.25rem' },
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
                sx={{
                  mt: { xs: 3, sm: 4 },
                  fontWeight: 'bold',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' }
                }}
              >
                Why wait? Let StepUp guide your growth journey.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 3, sm: 4 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  ref={(el) => addToButtonRefs(el, 0)}
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/stepupsap')}
                  sx={{
                    backgroundColor: '#ffbd28',
                    '&:hover': {
                      backgroundColor: '#e6a800' // darker shade of #ffbd28
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    color: '#000000',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Tap to Apply Today
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>

        {/* Cloud Program Card */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Card
            ref={(el) => addToCardRefs(el, 1)}
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
              ref={(el) => addToCardImageRefs(el, 1)}
              component="img"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: 250, md: 'auto' },
                objectFit: 'cover'
              }}
              image={CloudImg}
              alt="Cloud internship program"
              loading="lazy"
              decoding="async"
            />

            {/* Right side - Content */}
            <CardContent
              ref={(el) => addToCardContentRefs(el, 1)}
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
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                Cloud Internship & Training Program
              </Typography>

              <Typography
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.25rem' },
                  mb: { xs: 2, sm: 3 }
                }}
              >
                StepUp - 30 Days Intensive Cloud Computing Program
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                <strong>StepUp by VSoft Solutions</strong> offers a <strong>30-day internship & training course</strong> designed for aspiring IT professionals who want to master cloud fundamentals in a short time.
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                Ideal for:
                <br />
                <strong>Students</strong> looking to gain in-demand skills<br />
                <strong>Freshers</strong> wanting practical cloud knowledge
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                This program covers:
              </Typography>

              <Box component="ul" sx={{ pl: { xs: 2, sm: 3 }, mb: 2 }}>
                {[
                  'Cloud basics & core concepts',
                  'Real-time lab exercises',
                  'Hands-on project work',
                  'Course completion & internship certificate',
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
                sx={{
                  mt: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.15rem' },
                  fontWeight: 'bold'
                }}
              >
                Fast-track your cloud skills in just 30 days.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 3, sm: 4 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  ref={(el) => addToButtonRefs(el, 1)}
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/stepupcloud')}
                  sx={{
                    backgroundColor: '#ffbd28',
                    '&:hover': {
                      backgroundColor: '#e6a800' // darker shade of #ffbd28
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    color: '#000000',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Tap to Apply Today
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
          <h3 className="text-xl text-center text-gray-300 mb-4">
            Unlock Your Future with Opportunities That Matter!
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
            We're just getting started! Join us to receive updates on new internship programs,
            exclusive discounts, and career-boosting offers-designed especially for students
            and job-seeking women. Let's grow, learn, and rise together.
          </p>

          <p className="text-center text-purple-600 font-medium mb-6">
            Stay connected - exciting new updates are on the way!
          </p>

          <div className="flex justify-center">
            <Button
              ref={(el) => addToButtonRefs(el, 1)}
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                backgroundColor: '#ffbd28',
                '&:hover': {
                  backgroundColor: '#e6a800' // darker shade of #ffbd28
                },
                px: 4,
                py: 1.5,
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 'bold',
                color: '#000000',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Contact Us & Stay Informed
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepUp;