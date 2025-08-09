import React, { useLayoutEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
  Paper,
  Avatar,
  styled
} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AutoAwesome, LockPerson, SupportAgent, ThumbUp, DesignServices, RocketLaunch } from '@mui/icons-material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroLaptopImage from '../assets/heroLaptopImage.webp';
import MobHero from '../assets/MobHero.webp';
import teamImage from '../assets/teamImage.webp';
import ServiceOne from '../assets/service1.avif';
import ServiceTwo from '../assets/service2.avif';
import ServiceThree from '../assets/service3.avif';
import ServiceFour from '../assets/webdev.webp';
import ServiceBck from '../assets/service-bck.avif';
import WeOffer from '../assets/weOfferbck.webp';
import ClientLogoSlider from '../Animations/ClientLogoSlider';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
    backgroundImage: `url(${MobHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(122, 51, 122, 0.75)',
      zIndex: 0,
    },
  },
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f9f9f9',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const PurpleText = styled('span')({
  color: '#7a337a',
  fontWeight: 700,
});

const ServiceCard = styled(Card)(({ theme }) => ({
  background: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
  },
}));

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: '#7a337a',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(0.5, 0),
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#5b1264',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: theme.spacing(1, 3),
  borderRadius: '4px',
  textTransform: 'uppercase',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#333333',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Consolidated refs
  const animationRefs = {
    heroHeading: useRef(),
    aboutTitle: useRef(),
    aboutHeading: useRef(),
    serviceHeading: useRef(),
    whatWeDoHeading: useRef(),
    industriesHeading: useRef(),
    excellenceHeading: useRef(),
    uniqueHeading: useRef(),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - immediate animation, no scroll trigger
      gsap.fromTo(animationRefs.heroHeading.current,
        {
          opacity: 0,
          y: isMobile ? 50 : 80,
          scale: isMobile ? 0.9 : 0.8,
          rotationX: isMobile ? 20 : 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 2,
          ease: 'power3.out',
          delay: 0.3,
        }
      );

      // Scroll-triggered animations configuration
      const scrollAnimations = [
        {
          ref: animationRefs.aboutTitle,
          from: { opacity: 0, x: isMobile ? -50 : -120, rotation: isMobile ? -5 : -10 },
          to: { opacity: 1, x: 0, rotation: 0, duration: 1.4, ease: 'back.out(1.7)' },
          start: 'top 85%',
        },
        {
          ref: animationRefs.aboutHeading,
          from: { opacity: 0, y: isMobile ? 40 : 60, scale: 0.9, rotationY: isMobile ? 10 : 25 },
          to: { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 1.6, ease: 'power2.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.serviceHeading,
          from: { opacity: 0, y: isMobile ? -30 : -50, scale: isMobile ? 1.1 : 1.2, rotation: isMobile ? 2 : 5 },
          to: { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.8, ease: 'elastic.out(1, 0.6)' },
          start: 'top 95%',
        },
        {
          ref: animationRefs.whatWeDoHeading,
          from: { opacity: 0, x: isMobile ? 50 : 100, rotationZ: isMobile ? 8 : 15, scale: isMobile ? 0.85 : 0.7 },
          to: { opacity: 1, x: 0, rotationZ: 0, scale: 1, duration: 1.5, ease: 'power3.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.industriesHeading,
          from: { opacity: 0, y: isMobile ? 50 : 70, rotationX: isMobile ? -15 : -30, scale: isMobile ? 0.9 : 0.8 },
          to: { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.7, ease: 'back.out(1.5)' },
          start: 'top 85%',
        },
        {
          ref: animationRefs.excellenceHeading,
          from: { opacity: 0, x: isMobile ? -40 : -80, y: isMobile ? -20 : -40, rotation: isMobile ? -4 : -8, scale: isMobile ? 1.05 : 1.1 },
          to: { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 1.6, ease: 'power2.out' },
          start: 'top 80%',
        },
        {
          ref: animationRefs.uniqueHeading,
          from: { opacity: 0, y: isMobile ? 60 : 90, rotationY: isMobile ? -20 : -45, scale: isMobile ? 0.8 : 0.6 },
          to: { opacity: 1, y: 0, rotationY: 0, scale: 1, duration: 2, ease: 'elastic.out(1, 0.4)' },
          start: 'top 85%',
        },
      ];

      // Apply scroll-triggered animations
      scrollAnimations.forEach(({ ref, from, to, start }) => {
        if (ref.current) {
          gsap.fromTo(ref.current, from, {
            ...to,
            scrollTrigger: {
              trigger: ref.current,
              start,
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    });

    return () => ctx.revert(); // Clean up animations
  }, [isMobile]);

  // Data arrays (moved outside component to prevent recreating on each render)
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      icon: ServiceFour,
      description: 'Web development involves designing and building websites, ensuring functionality, responsiveness, and user-friendly experiences.',
      link: '/services/website-development'
    },
    {
      title: 'MOBILE APP DEVELOPMENT',
      icon: ServiceTwo,
      description: 'Mobile app development is the process of creating mobile applications for iOS and Android platforms, ensuring excellent performance and user-friendly interfaces.',
      link: '/services/app-development'
    },
    {
      title: 'UI/UX DESIGN',
      icon: ServiceThree,
      description: 'UX/UI web design focuses on creating intuitive, attractive, and highly user-friendly websites that enhance your experience and engagement.',
      link: '/services/ui-ux-design'
    },
    {
      title: 'DIGITAL MARKETING',
      icon: ServiceOne,
      description: 'Digital marketing combines social media marketing, SEO, paid ads to drive engagement and business growth.',
      link: '/services/digital-marketing'
    }
  ];

  const sectors = [
    { title: 'Startups', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png' },
    { title: 'Enterprises', icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063825.png' },
    { title: 'Organization', icon: 'https://cdn-icons-png.flaticon.com/512/2420/2420504.png' },
    { title: 'Individuals', icon: 'https://cdn-icons-png.flaticon.com/512/921/921347.png' },
    { title: 'Institutions', icon: 'https://cdn-icons-png.flaticon.com/512/2784/2784445.png' },
    { title: 'Retailers', icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },
  ];

  const provides = [
    { title: 'Career', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
    { title: 'Fintech', icon: 'https://cdn-icons-png.flaticon.com/512/284/284579.png' },
    { title: 'ECommerce', icon: 'https://cdn-icons-png.flaticon.com/512/4290/4290854.png' },
    { title: 'Healthcare', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' },
    { title: 'Social', icon: 'https://cdn-icons-png.flaticon.com/512/145/145802.png' },
    { title: 'Fitness', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
    { title: 'Food Delivery', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png' },
    { title: 'Real Estate', icon: 'https://cdn-icons-png.flaticon.com/512/2356/2356781.png' },
    { title: 'Sports', icon: 'https://cdn-icons-png.flaticon.com/512/727/727399.png' },
    { title: 'Business', icon: 'https://cdn-icons-png.flaticon.com/512/595/595067.png' },
    { title: 'Education', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' },
    { title: 'Entertainment', icon: 'https://cdn-icons-png.flaticon.com/512/833/833472.png' },
    { title: 'Travel', icon: 'https://cdn-icons-png.flaticon.com/512/201/201623.png' },
    { title: 'Dating', icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' },
    { title: 'Transport', icon: 'https://cdn-icons-png.flaticon.com/512/883/883703.png' },
    { title: 'Grocery', icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png' },
  ];

  const unique = [
    { title: 'Ideators', icon: 'https://cdn-icons-png.flaticon.com/512/3048/3048394.png' },
    { title: 'Innovators', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png' },
    { title: 'Value Givers', icon: 'https://cdn-icons-png.flaticon.com/512/9296/9296900.png' },
    { title: 'Problem Solvers', icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png' },
  ];

  const features = [
    { icon: <AutoAwesome fontSize="large" />, title: 'Futuristic Technologies' },
    { icon: <LockPerson fontSize="large" />, title: 'Transparent Process' },
    { icon: <SupportAgent fontSize="large" />, title: 'Impressive Service' },
    { icon: <ThumbUp fontSize="large" />, title: 'Excellent Support' },
  ];

  const steps = [
    { icon: <RocketLaunch />, label: 'Discover' },
    { icon: <DesignServices />, label: 'Design' },
    { icon: <ConstructionIcon />, label: 'Build Your Project' },
    { icon: <ThumbUp />, label: 'Grow Your Business' },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: 2,
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" gutterBottom>
                We are a creative
              </Typography>
              <Typography 
                variant="h3" 
                gutterBottom
                fontWeight="bold"
                ref={animationRefs.heroHeading}
              >
                Empowering Businesses with <PurpleText>solutions!</PurpleText>
              </Typography>
              <Typography variant="body1" paragraph>
                Transform your vision into reality with VSoft Solutions!
              </Typography>
              <Box mt={3}>
                <StyledButton component={Link} to="/contact" variant="contained" size="large">
                  GET IN TOUCH
                </StyledButton>
              </Box>
            </Box>

            {!isMobile && (
              <Box
                component="img"
                src={heroLaptopImage}
                alt="Hero interface"
                fetchPriority='high'
                decoding='async'
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  flex: 1,
                }}
              />
            )}
          </Box>
        </Container>
      </HeroSection>

      {/* About Us Section */}
      <AboutSection>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 8,
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                fontWeight="bold"
                ref={animationRefs.aboutTitle}
                sx={{ display: 'flex', alignItems: 'center', mb: 4 }}
              >
                About Us <ArrowForwardIcon sx={{ ml: 1, color: '#7a337a' }} />
              </Typography>
              <Box
                component="img"
                src={teamImage}
                alt="Team working together"
                sx={{ width: '85%', height: 'auto' }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h4" 
                component="h3" 
                ref={animationRefs.aboutHeading} 
                gutterBottom 
                fontWeight="bold"
              >
                Get to Know VSoft Solutions – Trusted Software Company
              </Typography>
              <Typography variant="body1" paragraph>
                We are an innovative software development firm, committed to building intelligent, scalable, and 
                effective digital solutions for companies of all sizes. We focus on the three primary pillars of digital support: software 
                development, digital marketing, and UI/UX design, empowering businesses through the four stages of digital potential and reaching their objectives.
              </Typography>
              <Typography variant="body1" paragraph>
                With our talented experts, we stand for the creation of one-of-a-kind software solutions, interactive digital marketing campaigns, 
                and amicable UI/UX designs that bring the best-out experiences for the users. From a new startup to a seasoned company, we give 
                tailor-made solutions that fit specific requirements.
              </Typography>
              <Box mt={3}>
                <StyledButton
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Explore More
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </AboutSection>

      {/* Services Section */}
      <Box sx={{
        py: 4,
        backgroundImage: `url(${ServiceBck})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight="bold" ref={animationRefs.serviceHeading} gutterBottom>
              Checkout Our Service Here
            </Typography>
            <Typography variant="h5" mb={2}>
              <b>Innovative Software development & Digital Marketing</b>
            </Typography>
            <Typography variant="body1" maxWidth="sm" mx="auto">
              At VSoft Solutions, we specialize in delivering powerful, scalable, and fully customized software solutions tailored to elevate your business. Our mission is to blend technology with creativity to craft impactful digital experiences.
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}>
            {services.map((service, index) => (
              <Box key={index}>
                <ServiceCard>
                  <IconContainer>
                    <Box
                      component="img"
                      src={service.icon}
                      alt={service.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </IconContainer>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom align="center">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ textAlign: 'center', pb: 2 }}>
                    <ReadMoreButton
                      component={Link}
                      to={service.link}
                      endIcon={<ArrowRight size={16} />}
                    >
                      Read More
                    </ReadMoreButton>
                  </Box>
                </ServiceCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Box sx={{ py: 8, backgroundColor: '#fff', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" fontWeight="bold" ref={animationRefs.whatWeDoHeading} gutterBottom>
              What We Do !
            </Typography>
            <Typography variant="body1">
              we partner with businesses of all sizes to create impactful digital solutions. From startups to enterprises,
              we help brands grow through software development, digital marketing, and UI/UX design tailored to their unique needs.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {sectors.map((sector, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Card elevation={4} sx={{
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': { boxShadow: 6 },
                }}>
                  <Avatar src={sector.icon} alt={sector.title} sx={{ width: 60, height: 60, mb: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {sector.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Industries We Serve Section */}
      <Box sx={{ py: 8, backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" fontWeight="bold" ref={animationRefs.industriesHeading} gutterBottom>
              Industries We Serve
            </Typography>
            <Typography variant="body1">
              <b>VSOFT SOLUTIONS</b>, we specialize in delivering industry-specific solutions that are meticulously crafted to address the unique challenges, demands, and opportunities of businesses across various sectors. With a strong emphasis on innovation, advanced technology, and strategic consulting, we empower organizations to streamline operations, enhance productivity, drive sustainable revenue growth, and maintain a competitive edge in their respective industries.
              In today's rapidly evolving business landscape, staying ahead of the curve requires adaptability, efficiency, and forward-thinking strategies. We help enterprises navigate complex industry transformations by leveraging cutting-edge digital solutions, data-driven decision-making, and automation technologies.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {provides.map((provide, index) => (
              <Grid item key={index} sx={{
                flexBasis: { xs: '100%', sm: '100%', md: '20%' },
                maxWidth: { xs: '100%', sm: '100%', md: '20%' },
                display: 'flex',
              }}>
                <Card elevation={4} sx={{
                  textAlign: 'center',
                  py: 3,
                  borderRadius: 3,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}>
                  <Avatar src={provide.icon} alt={provide.title} variant="square" sx={{ width: 64, height: 64, mb: 2 }} />
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {provide.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={5}>
            <Typography variant='body1' gutterBottom>
              In today's rapidly evolving business landscape, staying ahead of the curve requires adaptability, efficiency, and forward-thinking strategies...
            </Typography>
            <Typography variant="body1" gutterBottom>
              Each industry presents its own set of challenges—whether it's compliance and security in finance, supply chain optimization in manufacturing, patient-centered care in healthcare, or seamless customer engagement in retail. Our expertise ensures that we deliver customized, high-impact solutions tailored to meet these specific needs.
            </Typography>
            <Typography variant='body1' gutterBottom>
              With a proven track record of success in healthcare, finance, manufacturing, retail, education, government, energy, and beyond, we provide
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Excellence Section */}
      <Box sx={{
        backgroundImage: `url(${WeOffer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        py: 8,
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.73)',
          zIndex: 1,
        }} />

        <Box sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}>
          <Typography variant="h3" fontWeight="bold" ref={animationRefs.excellenceHeading} gutterBottom>
            We Offer Excellence To Our Clients
          </Typography>

          <Box sx={{ mb: 4, width: '100%' }}>
            <Grid container spacing={3} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper elevation={6} sx={{
                    p: 3,
                    textAlign: 'center',
                    border: '2px solid #7a337a',
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    color: '#000'
                  }}>
                    <Box sx={{ mb: 2, color: '#7a337a' }}>{feature.icon}</Box>
                    <Typography variant="subtitle1" fontWeight="bold">{feature.title}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>VSOFT SOLUTIONS</strong>, excellence is at the core of everything we do. We are committed to delivering high-quality solutions, innovative strategies, and exceptional service to help our clients achieve their business goals.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                With a focus on cutting-edge technology, efficiency, and customer-centric solutions, we empower businesses across various industries to stay ahead in an evolving market. Our expertise ensures that every solution we provide is tailored, results-driven, and designed for long-term success.
              </Typography>
              <Typography variant="body1">
                Partner with us to experience unparalleled service, industry-leading innovation, and a commitment to excellence in every aspect of your business growth.
              </Typography>
            </Grid>
          </Grid>

          <Box mt={6}>
            <Paper elevation={3} sx={{
              p: 3,
              borderRadius: 3,
              width: { xs: '100%', sm: '80%', md: '100%' },
              backgroundColor: '#fff',
              color: '#000',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4
            }}>
              {steps.map((step, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ color: '#7a337a' }}>{step.icon}</Box>
                  <Typography variant="subtitle1" fontWeight="bold">{step.label}</Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Unique Section */}
      <Box sx={{ py: 8, backgroundColor: '#fff', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" ref={animationRefs.uniqueHeading} gutterBottom>
              That Makes Us Unique
            </Typography>
            <Typography variant="body1">
              <b>VSOFT SOLUTIONS</b>, we stand apart through our unwavering commitment to innovation, quality, and customer success. Our unique approach combines cutting-edge technology, industry expertise, and a client-first mindset, ensuring that every solution we deliver is tailored, effective, and future-ready.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {unique.map((uniq, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Card elevation={4} sx={{
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: 2,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': { boxShadow: 6 },
                }}>
                  <Avatar
                    src={uniq.icon}
                    alt={uniq.title}
                    sx={{ width: 60, height: 60, mb: 2, borderRadius: '50%' }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {uniq.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      <ClientLogoSlider />
    </>
  );
};

export default HomePage;