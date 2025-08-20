import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Grid,
  Avatar,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WordPressHero from '../assets/Wordpress.webp';
import BannerWP from '../assets/BannerWP.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WordPress = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Refs for animated elements
  const heroHeadingRef = useRef();
  const heroBreadcrumbRef = useRef();
  const heroDescRef = useRef();
  const heroButtonRef = useRef();
  const featuresHeadingRef = useRef();
  const featuresImageRef = useRef();
  const featuresDescRef = useRef();
  const featureCardsRef = useRef([]);
  const servicesHeadingRef = useRef();
  const servicesDescRef = useRef();
  const serviceCardsRef = useRef([]);
  const benefitsHeadingRef = useRef();
  const benefitsDescRef = useRef();
  const benefitItemsRef = useRef([]);
  const clientsHeadingRef = useRef();
  const clientsDescRef = useRef();
  const clientsButtonRef = useRef();

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    // Breadcrumb animation
    heroTimeline.fromTo(
      heroBreadcrumbRef.current,
      { 
        opacity: 0, 
        y: isMobile ? -20 : -30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Hero heading animation - similar to HomePage
    heroTimeline.fromTo(
      heroHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? 50 : 80,
        scale: isMobile ? 0.9 : 0.8,
        rotationX: isMobile ? 20 : 45
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 2,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // Hero description animation
    heroTimeline.fromTo(
      heroDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=1.2'
    );

    // Hero button animation
    heroTimeline.fromTo(
      heroButtonRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        y: 20
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      },
      '-=0.8'
    );

    // Features section animations - similar to HomePage about section
    const featuresTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: featuresHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Features heading - similar to aboutTitleRef
    featuresTimeline.fromTo(
      featuresHeadingRef.current,
      { 
        opacity: 0, 
        x: isMobile ? -50 : -120,
        rotation: isMobile ? -5 : -10
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.4,
        ease: 'back.out(1.7)',
      }
    );

    // Features description
    featuresTimeline.fromTo(
      featuresDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=1'
    );

    // Features image animation
    featuresTimeline.fromTo(
      featuresImageRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        rotation: isMobile ? 5 : 10
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out'
      },
      '-=0.8'
    );

    // Feature cards stagger animation
    featuresTimeline.fromTo(
      featureCardsRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2
      },
      '-=0.6'
    );

    // Services section animations - similar to service heading in HomePage
    const servicesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: servicesHeadingRef.current,
        start: 'top 95%',
        toggleActions: 'play none none reverse'
      }
    });

    servicesTimeline.fromTo(
      servicesHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? -30 : -50,
        scale: isMobile ? 1.1 : 1.2,
        rotation: isMobile ? 2 : 5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.8,
        ease: 'elastic.out(1, 0.6)',
      }
    );

    servicesTimeline.fromTo(
      servicesDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=1.2'
    );

    // Service cards stagger animation
    servicesTimeline.fromTo(
      serviceCardsRef.current,
      { 
        opacity: 0, 
        x: isMobile ? 30 : 50,
        rotationY: 15
      },
      { 
        opacity: 1, 
        x: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15
      },
      '-=0.6'
    );

    // Benefits section animations - similar to whatWeDoHeadingRef
    const benefitsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: benefitsHeadingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    benefitsTimeline.fromTo(
      benefitsHeadingRef.current,
      { 
        opacity: 0, 
        x: isMobile ? 50 : 100,
        rotationZ: isMobile ? 8 : 15,
        scale: isMobile ? 0.85 : 0.7
      },
      {
        opacity: 1,
        x: 0,
        rotationZ: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    benefitsTimeline.fromTo(
      benefitsDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=1'
    );

    // Benefits items animation with circular motion
    benefitsTimeline.fromTo(
      benefitItemsRef.current,
      { 
        opacity: 0, 
        scale: 0.5,
        rotation: 180
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.1
      },
      '-=0.6'
    );

    // Clients section animations - similar to uniqueHeadingRef
    const clientsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: clientsHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    clientsTimeline.fromTo(
      clientsHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? 60 : 90,
        rotationY: isMobile ? -20 : -45,
        scale: isMobile ? 0.8 : 0.6
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 2,
        ease: 'elastic.out(1, 0.4)',
      }
    );

    clientsTimeline.fromTo(
      clientsDescRef.current,
      { 
        opacity: 0, 
        y: 40,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      },
      '-=1.5'
    );

    clientsTimeline.fromTo(
      clientsButtonRef.current,
      { 
        opacity: 0, 
        scale: 0.7,
        y: 30
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      },
      '-=0.8'
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  const services = [
    {
      title: "WordPress Installation & Configuration",
      description: "We ensure smooth and quick setup of your WordPress site with optimal configuration.",
      icon: <SettingsIcon fontSize="large" />
    },
    {
      title: "WordPress Migration",
      description: "Seamlessly migrate your WordPress site to a new host without downtime or data loss.",
      icon: <SwapHorizIcon fontSize="large" />
    },
    {
      title: "Responsive WordPress Design",
      description: "We build responsive WordPress themes that look great on all devices and screen sizes.",
      icon: <PhoneIphoneIcon fontSize="large" />
    },
    {
      title: "WordPress eCommerce Solution",
      description: "Launch your online store with powerful WooCommerce integration and features.",
      icon: <ShoppingCartIcon fontSize="large" />
    }
  ];

  const benefits = [
    { icon: <LightbulbIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Creative" },
    { icon: <ForkRightIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Flexible" },
    { icon: <PhoneIphoneIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Customize" },
    { icon: <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Secure" },
    { icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'white' }} />, title: "On-Time" },
    { icon: <UpdateIcon sx={{ fontSize: 40, color: 'white' }} />, title: "Upgradation" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${WordPressHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(122, 51, 122, 0.75)',
            zIndex: 1,
          }}
        />
        
        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <Box
            ref={heroBreadcrumbRef}
            sx={{
              transform: `translateY(${isMobile ? '-20px' : '-30px'})`,
              opacity: 0
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
              aria-label="breadcrumb"
              sx={{ justifyContent: 'center', display: 'flex', mb: 1 }}
            >
              <Link
                underline="hover"
                onClick={() => navigate('/')}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <HomeIcon sx={{ mr: 1 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                color="#fff"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <WebIcon sx={{ mr: 1 }} fontSize="inherit" />
                WordPress Development
              </Typography>
            </Breadcrumbs>
          </Box>

          {/* Main Text */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
            ref={heroHeadingRef}
            sx={{
              transform: `translateY(${isMobile ? '50px' : '80px'})`,
              opacity: 0
            }}
          >
            Smart Design. Seamless Experience. WordPress Done Right by VSoft.
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ 
              mt: 3,
              transform: 'translateY(30px)',
              opacity: 0
            }}
            ref={heroDescRef}
          >
            <b>We craft high-performance, SEO-friendly WordPress websites that look stunning and drive real business growth — all powered by VSoft Solutions.</b>
          </Typography>

          <Box
            mt={4}
            sx={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              mb: 2,
              transform: 'translateY(20px) scale(0.8)',
              opacity: 0
            }}
            ref={heroButtonRef}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleContactClick}
              sx={{
                backgroundColor: '#ffbd28',
                color: '#000',
                '&:hover': { backgroundColor: '#ffbf28d0' },
                borderRadius: '20px',
                px: 4,
                py: 1,
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6, overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 5 },
          }}
        >
          {/* Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={BannerWP}
              alt="WordPress Developer"
              ref={featuresImageRef}
              sx={{
                width: { xs: '90%', md: '85%' },
                maxWidth: 500,
                height: 'auto',
                borderRadius: '50%',
                border: '8px solid #1e88e5',
                transform: 'scale(0.8)',
                opacity: 0
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom
              ref={featuresHeadingRef}
              sx={{
                transform: `translateX(${isMobile ? '-50px' : '-120px'})`,
                opacity: 0
              }}
            >
              Our Striking Features Of WordPress Development
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ 
                mb: 3,
                transform: 'translateY(30px)',
                opacity: 0
              }}
              ref={featuresDescRef}
            >
              We have expertise in handling WordPress projects of varying sizes and complexity makes us the best WordPress Development Company in USA
            </Typography>

            {/* Feature Cards */}
            <Stack spacing={2}>
              {[
                {
                  icon: <SettingsIcon />,
                  title: "High Speed & Performance",
                  description: "We offer highly optimized WordPress Websites that can enhance overall user engagement and help you to stay ahead of the competition."
                },
                {
                  icon: <SecurityIcon />,
                  title: "Secure & Easily Upgradable",
                  description: "We deploy the highest security techniques to make sure the WordPress websites are highly secure and easily upgraded."
                },
                {
                  icon: <AssignmentIcon />,
                  title: "Result-Oriented Process",
                  description: "We have experts to offer the best WordPress development services in USA on the latest development trends with a long-term goal."
                }
              ].map((feature, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  ref={(el) => featureCardsRef.current[index] = el}
                  sx={{
                    p: 2,
                    bgcolor: '#1e88e5',
                    color: 'white',
                    borderRadius: 1,
                    transform: 'translateY(50px) scale(0.9)',
                    opacity: 0
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'white', color: '#1e88e5' }}>
                      {feature.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Services Section */}
      <Box sx={{ py: 6, textAlign: 'center', maxWidth: '1200px', mx: 'auto', px: 3, overflow: 'hidden' }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant='h3' 
            gutterBottom
            ref={servicesHeadingRef}
            sx={{
              transform: `translateY(${isMobile ? '-30px' : '-50px'}) scale(${isMobile ? 1.1 : 1.2})`,
              opacity: 0
            }}
          >
            Where Design Meets Performance Powered by WordPress & VSoft
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '900px', 
              mx: 'auto', 
              mb: 6,
              transform: 'translateY(30px)',
              opacity: 0
            }}
            ref={servicesDescRef}
          >
            With a passion for digital innovation, VSoft Solutions builds custom WordPress solutions that help businesses scale effortlessly and succeed online.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              ref={(el) => serviceCardsRef.current[index] = el}
              sx={{ 
                display: 'flex', 
                gap: 2,
                transform: `translateX(${isMobile ? '30px' : '50px'})`,
                opacity: 0
              }}
            >
              <Box sx={{ mt: 1 }}>{service.icon}</Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Benefits Section */}
      <Box py={8} sx={{ backgroundColor: '#f8f8f8', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            align="center" 
            gutterBottom
            ref={benefitsHeadingRef}
            sx={{
              transform: `translateX(${isMobile ? '50px' : '100px'}) scale(${isMobile ? 0.85 : 0.7})`,
              opacity: 0
            }}
          >
            What Sets Our WordPress Solutions Apart
          </Typography>
          <Typography 
            variant='body1' 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              transform: 'translateY(30px)',
              opacity: 0
            }}
            ref={benefitsDescRef}
          >
            At VSoft Solutions, we blend creativity with technical expertise to deliver WordPress websites that are fast, secure, and built to grow with your business. Discover how our tailored approach drives lasting impact.
          </Typography>
        </Container>

        <Grid container spacing={3} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                ref={(el) => benefitItemsRef.current[index] = el}
                sx={{
                  transform: 'scale(0.5) rotate(180deg)',
                  opacity: 0
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#2196f3',
                    borderRadius: '50%',
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography align="center" variant="subtitle1" fontWeight="bold">
                  {benefit.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Client Approach Section */}
      <Box py={8} sx={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={3}
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(90deg, #af1e9794, #1f4fb6d5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transform: `translateY(${isMobile ? '60px' : '90px'}) scale(${isMobile ? 0.8 : 0.6})`,
                opacity: 0
              }}
              ref={clientsHeadingRef}
            >
              50+ Clients Approached Us
            </Typography>

            <Typography
              variant="body1"
              mb={4}
              sx={{
                maxWidth: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#555',
                transform: 'translateY(40px) scale(0.9)',
                opacity: 0
              }}
              ref={clientsDescRef}
            >
              In under a year, our design agency has attracted over 50 clients across diverse industries, from startups to established brands. Our unique blend of creativity and strategic thinking has made us the go-to partner for companies looking to elevate their visual presence. Our collaborative approach ensures that each project not only meets but exceeds expectations, turning clients into long-term partners who return for all their design needs.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: '#5c245c',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                transform: 'translateY(30px) scale(0.7)',
                opacity: 0,
                '&:hover': {
                  bgcolor: '#7a337a'
                }
              }}
              onClick={handleContactClick}
              ref={clientsButtonRef}
            >
              Work With Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default WordPress;