import React, { useEffect, useRef } from 'react';
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
  Card,
  CardContent,
  Stack,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DesignerUi from '../assets/Developer.webp';
import UiUxBanner from '../assets/UiUx-banner.avif';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const UiUx = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Refs for animated elements
  const heroBreadcrumbRef = useRef();
  const heroHeadingRef = useRef();
  const heroDescRef = useRef();
  const heroButtonRef = useRef();
  
  const aboutHeadingRef = useRef();
  const aboutDescRef = useRef();
  const aboutImageRef = useRef();
  
  const toolsHeadingRef = useRef();
  const toolCardsRef = useRef([]);
  
  const processHeadingRef = useRef();
  const processCardsRef = useRef([]);
  
  const whyChooseHeadingRef = useRef();
  const whyChooseContentRef = useRef();
  const whyChooseListRef = useRef([]);
  const whyChooseButtonRef = useRef();
  
  const ctaHeadingRef = useRef();
  const ctaDescRef = useRef();
  const ctaButtonRef = useRef();

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

    // Hero heading animation - dramatic entrance
    heroTimeline.fromTo(
      heroHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? 60 : 100,
        scale: isMobile ? 0.8 : 0.7,
        rotationX: isMobile ? 30 : 50
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 2.2,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // Hero description animation
    heroTimeline.fromTo(
      heroDescRef.current,
      { 
        opacity: 0, 
        y: 40,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out'
      },
      '-=1.5'
    );

    // Hero button animation
    heroTimeline.fromTo(
      heroButtonRef.current,
      { 
        opacity: 0, 
        scale: 0.7,
        y: 30,
        rotation: -10
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.9,
        ease: 'back.out(1.7)'
      },
      '-=1'
    );

    // About section animations
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    aboutTimeline.fromTo(
      aboutHeadingRef.current,
      { 
        opacity: 0, 
        x: isMobile ? -60 : -150,
        rotation: isMobile ? -8 : -15,
        scale: isMobile ? 0.9 : 0.8
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 1.6,
        ease: 'back.out(1.7)',
      }
    );

    aboutTimeline.fromTo(
      aboutDescRef.current.children,
      { 
        opacity: 0, 
        y: 40,
        x: -20
      },
      { 
        opacity: 1, 
        y: 0,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3
      },
      '-=1.2'
    );

    aboutTimeline.fromTo(
      aboutImageRef.current,
      { 
        opacity: 0, 
        scale: 0.7,
        rotation: isMobile ? 8 : 15,
        x: isMobile ? 30 : 60
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        x: 0,
        duration: 1.4,
        ease: 'power3.out'
      },
      '-=1'
    );

    // Tools section animations
    const toolsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: toolsHeadingRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });

    toolsTimeline.fromTo(
      toolsHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? -40 : -60,
        scale: isMobile ? 1.2 : 1.3,
        rotation: isMobile ? 3 : 8
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

    // Tool cards stagger animation with 3D effect
    toolsTimeline.fromTo(
      toolCardsRef.current,
      { 
        opacity: 0, 
        y: 80,
        rotationY: 45,
        z: -100,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        rotationY: 0,
        z: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power2.out',
        stagger: {
          amount: 1.2,
          grid: [2, 3],
          from: "start"
        }
      },
      '-=0.8'
    );

    // Process section animations
    const processTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: processHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    processTimeline.fromTo(
      processHeadingRef.current,
      { 
        opacity: 0, 
        x: isMobile ? 70 : 120,
        rotationZ: isMobile ? 12 : 20,
        scale: isMobile ? 0.8 : 0.6
      },
      {
        opacity: 1,
        x: 0,
        rotationZ: 0,
        scale: 1,
        duration: 1.7,
        ease: 'power3.out',
      }
    );

    // Process cards with wave animation
    processTimeline.fromTo(
      processCardsRef.current,
      { 
        opacity: 0, 
        scale: 0.6,
        rotation: isMobile ? 45 : 90,
        y: 60
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: {
          amount: 0.8,
          from: "center"
        }
      },
      '-=0.8'
    );

    // Why Choose Us section animations
    const whyChooseTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseHeadingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    whyChooseTimeline.fromTo(
      whyChooseHeadingRef.current,
      { 
        opacity: 0, 
        y: isMobile ? 80 : 120,
        rotationY: isMobile ? -30 : -60,
        scale: isMobile ? 0.7 : 0.5
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 2.2,
        ease: 'elastic.out(1, 0.4)',
      }
    );

    whyChooseTimeline.fromTo(
      whyChooseContentRef.current.children,
      { 
        opacity: 0, 
        x: -60,
        scale: 0.9
      },
      { 
        opacity: 1, 
        x: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2
      },
      '-=1.5'
    );

    whyChooseTimeline.fromTo(
      whyChooseListRef.current,
      { 
        opacity: 0, 
        x: 50,
        rotation: 5
      },
      { 
        opacity: 1, 
        x: 0,
        rotation: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1
      },
      '-=1'
    );

    whyChooseTimeline.fromTo(
      whyChooseButtonRef.current,
      { 
        opacity: 0, 
        scale: 0.6,
        y: 40,
        rotation: -15
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.9,
        ease: 'back.out(1.7)'
      },
      '-=0.6'
    );

    // CTA section animations
    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaHeadingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    ctaTimeline.fromTo(
      ctaHeadingRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        rotation: 3
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    ctaTimeline.fromTo(
      ctaDescRef.current,
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.8'
    );

    ctaTimeline.fromTo(
      ctaButtonRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        y: 20
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      },
      '-=0.4'
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Design tools we use
  const designTools = [
    {
      name: "Figma",
      description: "Collaborative tool for wireframing, prototyping, and building design systems."
    },
    {
      name: "Adobe XD",
      description: "Design and prototype user interfaces with interactive and shareable specs."
    },
    {
      name: "Sketch",
      description: "Create pixel-perfect user interfaces and reusable design components with ease."
    },
    {
      name: "Adobe Photoshop",
      description: "Advanced tool for image editing, retouching, and custom visual creation."
    },
    {
      name: "Adobe Illustrator",
      description: "Create scalable vector graphics, logos, and detailed illustrations effortlessly."
    },
    {
      name: "InVision",
      description: "Build interactive mockups and gather real-time client feedback on designs."
    }
  ];

  // Our design process steps
  const designProcess = [
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#111" }} />,
      title: "Discovery & Research",
      description: "We start by understanding your users, market, and business goals through research and stakeholder interviews."
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "#111" }} />,
      title: "Visual Design",
      description: "Our designers craft beautiful, on-brand interfaces with attention to typography, color, and visual hierarchy."
    },
    {
      icon: <DeviceHubIcon sx={{ fontSize: 40, color: "#111" }} />,
      title: "Prototyping & Testing",
      description: "We create interactive prototypes to test functionality and gather user feedback before development."
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#111" }} />,
      title: "Implementation Support",
      description: "We work closely with developers to ensure design integrity throughout the development process."
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    "User-centric approach focused on real user needs and behaviors",
    "Strategic design thinking aligned with your business goals",
    "Cross-platform expertise covering web, mobile, and desktop applications",
    "Data-driven decisions based on research and analytics",
    "Collaborative process with regular updates and feedback sessions",
    "Continuous optimization through post-launch analysis and iterations"
  ];

  return (
    <>
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${DesignerUi})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
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
            backgroundColor: 'rgba(122, 51, 122, 0.75)',
            zIndex: 1,
          }}
        />
        {/* Content Above Overlay */}
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
              sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}
            >
              <Link
                underline="hover"
                onClick={() => navigate('/')}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                color="#fff"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                UI/UX Design
              </Typography>
            </Breadcrumbs>
          </Box>

          {/* Main Text */}
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            ref={heroHeadingRef}
            sx={{
              transform: `translateY(${isMobile ? '60px' : '100px'}) scale(${isMobile ? 0.8 : 0.7})`,
              opacity: 0
            }}
          >
            Smart Interfaces. Intuitive Journeys. UI/UX That Works by VSoft.
          </Typography>
          
          <Box
            ref={heroDescRef}
            sx={{
              transform: 'translateY(40px) scale(0.9)',
              opacity: 0
            }}
          >
            <Typography variant="body1" sx={{ mt: 3 }}>
              <b>We design user-centric, visually stunning interfaces that deliver seamless experiences - turning clicks into customers and ideas into impact, all crafted with care by VSoft Solutions.</b>
            </Typography>
          </Box>

          <Box 
            mt={4} 
            sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' }, 
              mb: 2,
              transform: 'translateY(30px) scale(0.7)',
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

      <Container maxWidth="lg" sx={{ py: 8, overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 10 },
          }}
        >
          {/* Content on the right */}
          <Box sx={{ flex: 1, mr: { md: 6 } }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom
              ref={aboutHeadingRef}
              sx={{
                transform: `translateX(${isMobile ? '-60px' : '-150px'})`,
                opacity: 0
              }}
            >
              Designs That Think, Feel, and Convert.
            </Typography>
            
            <Box ref={aboutDescRef}>
              <Typography variant="body1" paragraph>
                From intuitive layouts to pixel-perfect visuals, VSoft Solutions creates UI/UX designs that don't just look good - they work wonders.
              </Typography>

              <Typography variant='body1' paragraph>
                Since 2024, we've been helping brands build meaningful digital experiences from Tirunelveli to the world. Whether it's a website, app, or dashboard, we craft every screen with strategy and empathy - putting your users first and your goals at the center.
              </Typography>
            </Box>
          </Box>

          {/* Image on the left */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={UiUxBanner}
              alt="Team working together"
              ref={aboutImageRef}
              sx={{
                width: '85%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transform: `scale(0.7) rotate(${isMobile ? 8 : 15}deg)`,
                opacity: 0
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Design Tools Section */}
      <Box sx={{ backgroundColor: '#f8f6f9', py: 8, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            gutterBottom 
            align="center" 
            sx={{ mb: 5}}
            ref={toolsHeadingRef}
          >
            Tools of Our Trade
          </Typography>

          {/* Fixed grid layout for design tools */}
          <Grid container spacing={4} justifyContent="center">
            {designTools.map((tool, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={2} 
                  ref={(el) => toolCardsRef.current[index] = el}
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-8px)' },
                    display: 'flex',
                    flexDirection: 'column',
                    transform: 'translateY(80px) scale(0.8)',
                    opacity: 0
                  }}
                >
                  <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {tool.name}
                    </Typography>
                    <Typography variant="body2">
                      {tool.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Design Process */}
      <Container maxWidth="lg" sx={{ py: 8, overflow: 'hidden' }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          gutterBottom 
          align="center" 
          sx={{ mb: 5}}
          ref={processHeadingRef}
        >
          Our Design Process
        </Typography>

        <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f8f6f9', borderRadius: 3 }}>
          {/* Fixed process flow layout */}
          {isMobile ? (
            // Mobile layout - vertical stacking
            <Grid container spacing={4}>
              {designProcess.map((step, index) => (
                <Grid item xs={12} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box 
                    ref={(el) => processCardsRef.current[index] = el}
                    sx={{
                      mb: 2,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '0 4px 12px rgba(128, 48, 130, 0.15)',
                      transform: 'scale(0.6) rotate(90deg)',
                      opacity: 0
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#111' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2">
                    {step.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          ) : (
            // Desktop layout - horizontal flow with arrows
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              {designProcess.map((step, index) => (
                <React.Fragment key={index}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: `${100 / designProcess.length}%`,
                    px: 2
                  }}>
                    <Box 
                      ref={(el) => processCardsRef.current[index] = el}
                      sx={{
                        mb: 2,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: '#ffbd28',
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 12px rgba(128, 48, 130, 0.15)',
                        transform: 'scale(0.6) rotate(90deg)',
                        opacity: 0
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#111' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2">
                      {step.description}
                    </Typography>
                  </Box>
                  {index < designProcess.length - 1 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'center', mt: 4 }}>
                      <NavigateNextIcon sx={{ fontSize: 30, color: "#111" }} />
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
        </Paper>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: '#ffbf28cb', py: 8, color: 'black', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            gutterBottom 
            align="center" 
            sx={{ mb: 5 }}
            ref={whyChooseHeadingRef}
          >
            Why Choose VSoft for UI/UX Design?
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}
                ref={whyChooseContentRef}
              >
                <Typography variant="h6" gutterBottom>
                  Expert-Driven Design
                </Typography>
                <Typography variant="body1" paragraph>
                  Our team combines technical expertise with creative flair to deliver designs that are both beautiful and functional. We stay updated with the latest design trends and technologies while maintaining timeless principles of good UX.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Results-Focused Approach
                </Typography>
                <Typography variant="body1">
                  We measure our success by your success. Our designs don't just look good—they achieve real business objectives, whether that's increasing conversions, improving user satisfaction, or streamlining operations.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {whyChooseUs.map((point, index) => (
                  <Box 
                    key={index} 
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                    ref={(el) => whyChooseListRef.current[index] = el}
                  >
                    <CheckCircleIcon color="inherit" sx={{ mr: 1, mt: 0.5 }} />
                    <Typography variant="body1">
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Box 
            mt={6} 
            textAlign="center"
            ref={whyChooseButtonRef}
          >
            <Button
              variant="contained"
              onClick={handleContactClick}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '&:hover': { backgroundColor: '#f0f0f0' },
                borderRadius: '20px',
                px: 4,
                py: 1,
                fontWeight: 'bold',
              }}
            >
              Start Your Design Project
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Portfolio/Testimonial Hint */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center', overflow: 'hidden' }}>
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          gutterBottom 
          ref={ctaHeadingRef}
        >
          Transform Your Digital Experience
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}
          ref={ctaDescRef}
        >
          Ready to elevate your digital presence with user-centered design? Contact VSoft Solutions today and let's create interfaces that your users will love and your business will thrive with.
        </Typography>
        <Button
          variant="outlined"
          onClick={handleContactClick}
          ref={ctaButtonRef}
          sx={{
            borderColor: '#ffbd28',
            color: 'black',
            borderRadius: '20px',
            px: 4,
            py: 1,
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#ffbd28',
              backgroundColor: '#ffbd28',
              color: '#ffffff',
            },
          }}
        >
          Get in Touch
        </Button>
      </Container>
    </>
  );
};

export default UiUx;