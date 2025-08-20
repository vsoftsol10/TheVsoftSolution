import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DigiHero from '../assets/DigitalHero.webp';
import Branding from '../assets/DigiBrand.webp';
import SocialMedia from '../assets/SocialMedia.webp';
import FbInsta from '../assets/fbook & insta.webp';
import GoogleAds from '../assets/GoogleAds.webp';
import SEO from '../assets/seo.webp';
import ContentMarketing from '../assets/ContentMarketing.webp';
import CreativeDesign from '../assets/Creative-design.webp';
import Explainer from '../assets/Explainervideo.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Refs for animated elements
  const heroBreadcrumbRef = useRef();
  const heroHeadingRef = useRef();
  const heroDescRef = useRef();
  const heroDesc2Ref = useRef();
  const heroButtonRef = useRef();
  const servicesHeadingRef = useRef();
  const serviceItemsRef = useRef([]);
  const advantagesHeadingRef = useRef();
  const advantageCardsRef = useRef([]);
  const ctaSectionRef = useRef();
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

    // Hero description animations
    heroTimeline.fromTo(
      heroDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=1.2'
    );

    heroTimeline.fromTo(
      heroDesc2Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
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

    // Services heading animation - similar to HomePage service heading
    gsap.fromTo(
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
        scrollTrigger: {
          trigger: servicesHeadingRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Service items animations with alternating effects
    serviceItemsRef.current.forEach((item, index) => {
      if (item) {
        const isEven = index % 2 === 0;
        gsap.fromTo(
          item,
          { 
            opacity: 0, 
            x: isMobile ? (isEven ? -30 : 30) : (isEven ? -100 : 100),
            y: isMobile ? 20 : 30,
            scale: 0.9,
            rotationY: isEven ? -15 : 15
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Advantages section heading - similar to whatWeDoHeadingRef
    gsap.fromTo(
      advantagesHeadingRef.current,
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
        scrollTrigger: {
          trigger: advantagesHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Advantage cards stagger animation
    gsap.fromTo(
      advantageCardsRef.current,
      { 
        opacity: 0, 
        y: isMobile ? 40 : 60,
        scale: 0.8,
        rotationX: isMobile ? -10 : -20
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: advantageCardsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // CTA section animations - similar to clientsHeadingRef
    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    ctaTimeline.fromTo(
      ctaHeadingRef.current,
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

    ctaTimeline.fromTo(
      ctaDescRef.current,
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

    ctaTimeline.fromTo(
      ctaButtonRef.current,
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
      id: 1,
      img: Branding,
      title: 'Branding that Builds Trust',
      description: "A brand is more than just a logo — it's a story, a promise, a personality. We help shape your business identity so that your customers remember who you are and why you matter.",
      points: [
        "Brand Strategy & Positioning",
        "Visual Identity Creation",
        "Tone of Voice & Messaging"
      ],
    },
    {
      id: 2,
      img: SocialMedia,
      title: 'Social Media Management',
      description: "We manage your digital presence across platforms like Instagram, Facebook, LinkedIn, and more — creating content calendars, engaging posts, and impactful campaigns that reflect your brand voice.",
      points: [
        "Daily/Weekly Content Posting",
        "Hashtag Strategy",
        "Audience Engagement & Community Building",
        "Analytics Reporting"
      ],
    },
    {
      id: 3,
      img: FbInsta,
      title: 'Facebook & Instagram Marketing',
      description: "Turn followers into customers! We create high-converting ad campaigns and creative visuals to capture attention and generate leads on Meta platforms.",
      points: [
        "Ad Design & Copywriting",
        "Audience Targeting & A/B Testing",
        "Lead Generation Campaigns",
        "Pixel Setup & Conversion Tracking"
      ],
    },
    {
      id: 4,
      img: GoogleAds,
      title: 'Google Ads (PPC)',
      description: "Get seen when it matters most. Our Google-certified experts set up and manage PPC campaigns that bring in high-intent traffic — whether for your website, landing page, or product.",
      points: [
        "Search, Display & Video Ads",
        "Budget Optimization",
        "Keyword Targeting",
        "ROI-Based Campaign Tracking"
      ],
    },
    {
      id: 5,
      img: SEO,
      title: 'SEO & Local SEO',
      description: "Climb to the top of search engines with smart SEO strategies that drive organic traffic and local visibility. Perfect for businesses targeting a specific city or region.",
      points: [
        "On-Page & Off-Page SEO",
        "Keyword Research",
        "Google My Business Optimization",
        "Local Listings & Reviews Management"
      ],
    },
    {
      id: 6,
      img: ContentMarketing,
      title: 'Content Marketing',
      description: "Good content doesn't just inform — it inspires action. From blogs and emails to product descriptions and social posts, we create content that delivers value and builds authority.",
      points: [
        "Blog Articles & Web Copy",
        "Email Campaigns",
        "E-books & Lead Magnets",
        "Product Descriptions & Case Studies"
      ],
    },
    {
      id: 7,
      img: CreativeDesign,
      title: 'Creative Designing',
      description: "Make your brand visually unforgettable. We design everything you need to shine online — from static graphics to animated visuals.",
      points: [
        "Social Media Creatives",
        "Posters, Brochures, Flyers",
        "Logo & Brand Kit Design",
        "Carousel Ads & Stories"
      ],
    },
    {
      id: 8,
      title: 'Explainer Videos',
      img: Explainer,
      description: "Tell your story through high-impact, easy-to-understand videos. Our explainer videos simplify complex ideas, making them perfect for product demos, brand introductions, and landing pages.",
      points: [
        "2D & Motion Graphics",
        "Voiceovers & Background Music",
        "Script Writing & Storyboarding",
        "Product Demo Videos"
      ],
    }
  ];

  const advantages = [
    {
      id: 1,
      title: "Tailored Strategy for Every Business",
      description: "We design unique marketing plans based on your goals, audience, and industry—no generic templates, just strategies that drive real business growth."
    },
    {
      id: 2,
      title: "Analytics-Backed Smart Decisions",
      description: "Our strategies rely on real-time data and research. We track and adjust your campaigns continuously to maximize performance and ROI."
    },
    {
      id: 3,
      title: "Proven Success Across Industries",
      description: "From startups to enterprises, our marketing efforts have consistently boosted visibility, traffic, leads, and conversions across multiple business domains."
    },
    {
      id: 4,
      title: "Creative and Performance Driven",
      description: "We combine visually appealing designs with performance-focused strategies to ensure your brand stands out and delivers measurable business results."
    },
    {
      id: 5,
      title: "Quick Execution & Clear Updates",
      description: "We ensure fast turnarounds and open communication. You'll receive regular updates with full transparency on what's done and why it matters."
    }
  ];

  return (
    <>
      <Box
        sx={{
          py: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundImage: `url(${DigiHero})`,
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
            backgroundColor: 'rgba(36, 22, 36, 0.5)',
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
                Digital Marketing
              </Typography>
            </Breadcrumbs>
          </Box>

          {/* Main Text */}
          <Typography
            variant="h4"
            fontWeight="bold"
            ref={heroHeadingRef}
            sx={{
              transform: `translateY(${isMobile ? '50px' : '80px'}) scale(${isMobile ? 0.9 : 0.8})`,
              opacity: 0
            }}
          >
            Power Up Your Brand with Digital Magic!
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
            <b>Crafted campaigns. Measurable results. Maximum reach.</b>
          </Typography>
          
          <Typography
            variant="body1"
            sx={{ 
              mt: 2,
              transform: 'translateY(30px)',
              opacity: 0
            }}
            ref={heroDesc2Ref}
          >
            Ready to turn clicks into customers? Our creative digital marketing team builds custom strategies that attract, engage, and convert — across every major platform. From reels that go viral to ads that sell, we do it all.
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

      <Box sx={{ overflow: 'hidden' }}>
        <Typography
          variant="h3"
          mt={8}
          fontWeight="bold"
          gutterBottom
          sx={{ 
            textAlign: 'center',
            transform: `translateY(${isMobile ? '-30px' : '-50px'}) scale(${isMobile ? 1.1 : 1.2})`,
            opacity: 0
          }}
          ref={servicesHeadingRef}
        >
            Our Digital Marketing Services Include
        </Typography>
      </Box>
      
      <Box maxWidth="xl" mx="auto" sx={{ mb: 8, overflow: 'hidden' }}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={service.id}
              ref={(el) => serviceItemsRef.current[index] = el}
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: isEven ? 'row' : 'row-reverse'
                },
                mb: 8,
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                },
                transition: 'box-shadow 0.3s ease',
                transform: `translateX(${isMobile ? (isEven ? '-30px' : '30px') : (isEven ? '-100px' : '100px')}) translateY(${isMobile ? '20px' : '30px'}) scale(0.9)`,
                opacity: 0
              }}
            >
              {/* Product Image */}
              <Box
                sx={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    minHeight: '350px',
                  }}
                />
              </Box>

              {/* Product Details */}
              <Box
                sx={{
                  flex: 1,
                  padding: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize: { xs: '1.75rem', md: '2rem' }
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'text.secondary'
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          py: 8,
          backgroundColor: '#f8f9fa',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Typography
          variant='h4'
            align="center"
            gutterBottom
            ref={advantagesHeadingRef}
            sx={{
              transform: `translateX(${isMobile ? '50px' : '100px'}) scale(${isMobile ? 0.85 : 0.7})`,
              opacity: 0
            }}
          >
              Why Choose VSoft for Digital Marketing?
          </Typography>

          {/* Modified Grid to center cards */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 6,
            mt: 6
          }}>
            {/* Map through the array to generate cards */}
            {advantages.map((adv, index) => (
              <Card
                key={adv.id}
                ref={(el) => advantageCardsRef.current[index] = el}
                elevation={0}
                sx={{
                  width: { xs: '100%', sm: '340px' },
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  backgroundColor: 'background.paper',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  transform: `translateY(${isMobile ? '40px' : '60px'}) scale(0.8)`,
                  opacity: 0
                }}
              >
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4,
                  height: '100%'
                }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: '#1a237e'
                    }}
                  >
                    {adv.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    {adv.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box py={8} sx={{ textAlign: 'center', overflow: 'hidden' }} ref={ctaSectionRef}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            mb={2}
            sx={{ 
              color: '#1a237e',
              transform: `translateY(${isMobile ? '60px' : '90px'}) scale(${isMobile ? 0.8 : 0.6})`,
              opacity: 0,
              fontWeight: 'bold'
            }}
            ref={ctaHeadingRef}
          >
              Let's Build Something Big - Together.
          </Typography>

          <Box
            ref={ctaDescRef}
            sx={{
              transform: 'translateY(40px) scale(0.9)',
              opacity: 0
            }}
          >
            <Typography variant="body1" mb={3} sx={{ color: '#555', fontSize: '1.1rem' }}>
              Whether you're a startup or an enterprise, <strong>VSoft Solutions</strong> is here to grow your digital footprint with
              innovative marketing strategies and creative excellence.
            </Typography>

            <Typography variant="h6" mb={4} sx={{ color: '#8e24aa' }}>
              Contact us today and let's talk about how we can drive real growth for your business!
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            ref={ctaButtonRef}
            sx={{
              backgroundColor: '#ffbd28',
              color: '#111',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              transform: 'translateY(30px) scale(0.7)',
              opacity: 0,
              '&:hover': {
                backgroundColor: '##ffbd28d0',
              },
            }}
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default DigitalMarketing