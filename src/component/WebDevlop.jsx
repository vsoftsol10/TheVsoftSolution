import React, { useState, useLayoutEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  useTheme,
} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeIcon from '@mui/icons-material/Home';
import WebDev from '../assets/web_development-01.avif';
import Customdev from '../assets/custom_web_development-01.avif';
import Ecommerce from '../assets/ecommerce_development-01.avif';
import Responsive from '../assets/Responsive Web Design-01.avif';
import Support from '../assets/Support and Maintenance-01.avif';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import WebsiteHero from '../assets/WebsiteHerobck.webp';
import WebDevHero from '../assets/WebDeveloper-Hero.webp';
import Stepper from '../Animations/Stepper';
import HTML from '../assets/HTML.avif';
import CSS from '../assets/CSS.avif';
import JS from '../assets/javascript.avif';
import Reactjs from '../assets/React.avif';
import Angular from '../assets/angular.avif';
import Nodejs from '../assets/node-js.avif';
import MongoDB from '../assets/MongoDB.avif';
import Bootstrap from '../assets/Bootstrap.avif';
import FireBase from '../assets/firebase.avif';
import NextJs from '../assets/nextjs.avif';
import Mui from '../assets/MUI.avif';
import ProjectDurga from '../assets/ProjectWeb1.webp';
import ProjectMKM from '../assets/ProjectWeb2.webp';
import ProjectCrackers from '../assets/ProjectWeb3.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebDevlop = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  // Refs for all animated elements
  const heroHeadingRef = useRef();
  const growthPartnerHeadingRef = useRef();
  const developmentServicesHeadingRef = useRef();
  const projectsHeadingRef = useRef();
  const techStackHeadingRef = useRef();
  const growthDescriptionRef = useRef();
  const growthSubtitleRef = useRef();

  useLayoutEffect(() => {
  // Run animation logic on next frame to prevent layout jank
  requestAnimationFrame(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Hero heading animation
    gsap.fromTo(
      heroHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 0.95 : 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 1.2 : 1.8,
        ease: 'power3.out',
      }
    );

    // Growth Partner animation
    const growthPartnerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: growthPartnerHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    growthPartnerTimeline
      .fromTo(
        growthPartnerHeadingRef.current,
        {
          opacity: 0,
          x: isMobile ? -30 : -100,
          rotationY: isMobile ? 0 : 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: isMobile ? 1 : 1.5,
          ease: 'power2.out',
        }
      )
      .fromTo(
        growthSubtitleRef.current,
        { opacity: 0, y: isMobile ? 20 : 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        growthDescriptionRef.current,
        { opacity: 0, y: isMobile ? 20 : 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    // Development services heading animation
    gsap.fromTo(
      developmentServicesHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 60,
        scale: isMobile ? 0.9 : 0.7,
        rotation: isMobile ? 0 : 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: isMobile ? 1.2 : 1.6,
        ease: isMobile ? 'power2.out' : 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: developmentServicesHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Projects heading animation
    gsap.fromTo(
      projectsHeadingRef.current,
      {
        opacity: 0,
        x: isMobile ? 30 : 100,
        rotationX: isMobile ? 0 : 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        duration: isMobile ? 1 : 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Tech stack heading animation
    gsap.fromTo(
      techStackHeadingRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: isMobile ? 0.9 : 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 1 : 1.2,
        ease: isMobile ? 'power2.out' : 'back.out(1.7)',
        scrollTrigger: {
          trigger: techStackHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Cleanup ScrollTriggers
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const developmentCard = [
    {
      icon: WebDev,
      title: 'Web Development',
      description: 'Web development involves designing and building websites, ensuring functionality, responsiveness, and user-friendly experiences.'
    },
    {
      icon: Ecommerce,
      title: 'E-Commerce Development',
      description: 'E-commerce development refers to the creation of online stores that enable users to buy and sell products or services over the internet.'
    },
    {
      icon: Responsive,
      title: 'Responsive Web Design',
      description: 'Responsive web design is a technique used to make websites look and function well on different screen sizes and devices.'
    },
    {
      icon: Customdev,
      title: 'Custom Software Development',
      description: 'Custom software development involves creating software solutions tailored to specific business needs and requirements.'
    },
    {
      icon: Support,
      title: 'Support and Maintenance',
      description: 'Support and maintenance services involve providing ongoing technical assistance and maintenance to ensure the smooth operation of software systems.'
    }
  ];

  const techstack = [
    { name: 'HTML', logo: HTML },
    { name: 'CSS', logo: CSS },
    { name: 'JavaScript', logo: JS },
    { name: 'React Js', logo: Reactjs },
    { name: 'Next Js', logo: NextJs },
    { name: 'Angular', logo: Angular },
    { name: 'Node Js', logo: Nodejs },
    { name: 'Mongo DB', logo: MongoDB },
    { name: 'Firebase', logo: FireBase },
    { name: 'Bootstrap', logo: Bootstrap },
    { name: 'Material UI', logo: Mui }
  ];

  return (
    <>
      {/* Add CSS to prevent horizontal overflow */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .MuiContainer-root {
          max-width: 100% !important;
          overflow-x: hidden;
        }
        
        /* Prevent GSAP animations from causing overflow */
        [style*="transform"] {
          max-width: 100%;
        }
      `}</style>

      {/* Hero Section with Background and Overlay */}
      <Box
        sx={{
          py: { xs: 6, sm: 8, md: 12, lg: 15 },
          px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${WebsiteHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: { xs: '55vh', sm: '60vh', md: '65vh', lg: '70vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          maxWidth: '100%', // Ensure no overflow
          width: '100%'
        }}
      >
        {/* Overlay for opacity */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(36, 22, 36, 0.5)',
            zIndex: 1,
          }}
        />

        {/* Content Above Overlay */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{
              justifyContent: 'center',
              display: 'flex',
              mb: { xs: 2, sm: 3, md: 4 },
              flexWrap: 'wrap'
            }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
              }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              color="#fff"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
              }}
            >
              <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Web Development
            </Typography>
          </Breadcrumbs>

          {/* Main Text - Improved Responsive Typography with overflow fix */}
          <Box
            sx={{
              maxWidth: '100%',
              overflow: 'hidden',
              px: { xs: 0.5, sm: 1, md: 2 },
              width: '100%'
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              ref={heroHeadingRef}
              sx={{
                fontSize: {
                  xs: '1.25rem',    // 20px - very small screens
                  sm: '1.5rem',     // 24px - small screens
                  md: '2rem',       // 32px - medium screens
                  lg: '2.5rem',     // 40px - large screens
                  xl: '2.75rem'     // 44px - extra large screens
                },
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                mb: { xs: 2, sm: 3, md: 4 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                whiteSpace: 'normal',
                textOverflow: 'clip',
                transform: 'translateY(30px)', // Reduced initial transform
                opacity: 0,
                width: '100%'
              }}
            >
              Discover Our Web Development Services
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mt: { xs: 1.5, sm: 2, md: 3 },
                fontSize: {
                  xs: '0.875rem',   // 14px
                  sm: '0.95rem',    // 15.2px
                  md: '1.05rem',    // 16.8px
                  lg: '1.1rem'      // 17.6px
                },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                mb: { xs: 1.5, sm: 2, md: 3 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                px: { xs: 0, sm: 0.5, md: 0 },
                width: '100%'
              }}
            >
              <strong>VSoft Solutions is your trusted partner in delivering powerful and custom web development solutions for businesses of all sizes.</strong>
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mt: { xs: 1.5, sm: 2, md: 3 },
                fontSize: {
                  xs: '0.8125rem',  // 13px
                  sm: '0.875rem',   // 14px
                  md: '0.9375rem',  // 15px
                  lg: '1rem'        // 16px
                },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                mb: { xs: 2.5, sm: 3, md: 4 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                px: { xs: 0, sm: 0.5, md: 0 },
                width: '100%'
              }}
            >
              We specialize in building responsive, secure, and scalable websites and web applications tailored to your unique needs. With a strong focus on user experience and modern technologies, our expert team is committed to crafting seamless digital experiences that drive results. From corporate websites to full-scale e-commerce platforms, VSoft Solutions is your one-stop destination for reliable and innovative web development services.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                mt: { xs: 2.5, sm: 3, md: 4 }
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleContactClick}
                sx={{
                  backgroundColor: '#ffbd28',
                  color: '#111',
                  '&:hover': { backgroundColor: '#ffbf289d' },
                  borderRadius: '20px',
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '1rem' },
                  minWidth: { xs: '120px', sm: '140px' }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Growth Partner Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 6, md: 8 },
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Content */}
          <Box 
            sx={{ 
              flex: 1, 
              order: { xs: 2, md: 1 },
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              ref={growthPartnerHeadingRef}
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
                lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateX(-30px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              Your Growth Partner in the Digital World
            </Typography>

            <Typography
              variant="body1"
              paragraph
              ref={growthSubtitleRef}
              sx={{
                fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1.05rem', lg: '1.1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateY(20px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              From Website Creation to Digital Campaigns, We Help You Succeed Online.
            </Typography>

            <Typography
              variant='body1'
              paragraph
              ref={growthDescriptionRef}
              sx={{
                fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                transform: 'translateY(20px)', // Reduced initial transform
                opacity: 0,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              Since 2024, our Tirunelveli-based company has delivered custom web applications for enterprises. As a trusted offshore partner, we build innovative, scalable solutions tailored to your business goals. Let's shape the future of web technology together.
            </Typography>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 },
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={WebDevHero}
              alt="Team working together"
              sx={{
                width: { xs: '100%', md: '85%' },
                maxWidth: '500px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Development Services Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#f4f4f4',
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            ref={developmentServicesHeadingRef}
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.5rem', sm: '1.2rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              transform: 'translateY(30px)', // Reduced initial transform
              opacity: 0,
              maxWidth: '100%',
              width: '100%'
            }}
          >
            Our Best Development Services
          </Typography>

          <Grid container spacing={{ xs: 2, md: 8 }} justifyContent="center">
            {developmentCard.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={5}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '340px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%'
                  }}>
                    <Box
                      sx={{
                        position: 'relative',
                        mb: 3,
                        height: { xs: 150, md: 200 },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        backgroundColor: '#f5f7ff',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title}
                        sx={{
                          height: { xs: 80, md: 100 },
                          width: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#1a237e',
                        fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem' },
                        lineHeight: 1.2,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' },
                        lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Stepper />

      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            ref={techStackHeadingRef}
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: 'bold',
              color: 'text.primary',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              transform: 'translateY(30px)', // Reduced initial transform
              opacity: 0,
              maxWidth: '100%',
              width: '100%'
            }}
          >
            Technology Stack
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          >
            {techstack.map((tech, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, sm: 80, md: 100 },
                    height: { xs: 60, sm: 80, md: 100 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: { xs: 1, sm: 2 },
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WebDevlop;