import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnimatedContent from '../Animations/AnimatedContent';

// Import all client logos
import ClientOne from '../assets/client/BULLET CRACKERS LOGO 001.webp';
import ClientTwo from '../assets/client/MKM LOGO 001.webp';
import ClientThree from '../assets/client/SMEC LOGO 002.webp';
import ClientFour from '../assets/client/DARC LOGO.webp';
import ClientFive from '../assets/client/CNI.webp';
import ClientSix from '../assets/client/RAJALAKSHMI LOGO 001.webp';
import ClientSeven from '../assets/client/MAHARAJA LOGO 001.webp';
import ClientEight from '../assets/client/GAYRA LOGO 001.webp';
import ClientNine from '../assets/client/Nivedha LOGO 002.webp';
import ClientTen from '../assets/client/thanporunai-logo.webp'; 
import ClientEleven from '../assets/client/4Tlogo.webp';
import ClientTwelve from '../assets/client/Friends Logo.webp'; 

const ClientLogoSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const sliderRef = useRef(null);
  const [isSliderReady, setIsSliderReady] = useState(false);
  
  const vsoftPurple = '#803082';

  // Client logos array with fallback handling
  const clientLogos = [
    { id: 1, logo: ClientOne, name: "Bullet Crackers", alt: "Bullet Crackers Logo" },
    { id: 2, logo: ClientTwo, name: "MKM", alt: "MKM Company Logo" },
    { id: 3, logo: ClientThree, name: "SMEC", alt: "SMEC Logo" },
    { id: 4, logo: ClientFour, name: "DARC", alt: "DARC Logo" },
    { id: 5, logo: ClientFive, name: "CNI", alt: "CNI Logo" },
    { id: 6, logo: ClientSix, name: "Rajalakshmi", alt: "Rajalakshmi Logo" },
    { id: 7, logo: ClientSeven, name: "Maharaja", alt: "Maharaja Logo" },
    { id: 8, logo: ClientEight, name: "Gayra", alt: "Gayra Logo" },
    { id: 9, logo: ClientNine, name: "Nivedha", alt: "Nivedha Logo" },
    { id: 10, logo: ClientTen, name: "Thanporunai", alt: "Thanporunai Logo" },
    { id: 11, logo: ClientEleven, name: "4T", alt: "4T Logo" },
    { id: 12, logo: ClientTwelve, name: "Friends Aqua", alt: "Friends Aqua Logo" },
  ];

  // Calculate slides to show based on screen size and number of logos
  const getSlidesToShow = () => {
    const logoCount = clientLogos.length;
    
    if (isMobile) {
      return Math.min(2, logoCount);
    } else if (isTablet) {
      return Math.min(3, logoCount);
    } else if (isLaptop) {
      return Math.min(4, logoCount);
    } else {
      return Math.min(5, logoCount);
    }
  };

  // Enhanced slider settings with better responsiveness
  const settings = {
    dots: isMobile ? false : true, // Hide dots on mobile for cleaner look
    infinite: clientLogos.length > 2,
    speed: 700,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false, // Disable arrows for cleaner mobile experience
    swipeToSlide: true,
    touchThreshold: 10,
    lazyLoad: 'ondemand',
    accessibility: true,
    focusOnSelect: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: Math.min(5, clientLogos.length),
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(4, clientLogos.length),
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(3, clientLogos.length),
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          centerPadding: '20px',
        }
      }
    ]
  };

  // Handle slider initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSliderReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Error boundary for individual logo items
  const LogoItem = ({ client, index }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageError = () => {
      console.warn(`Failed to load image for ${client.name}`);
      setImageError(true);
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
      <Box
        key={client.id}
        sx={{
          px: { xs: 0.5, sm: 1, md: 1.5 },
          display: 'flex !important',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '120px', sm: '140px', md: '160px' },
          outline: 'none', // Remove focus outline
        }}
      >
        <Box
          sx={{
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '80px', sm: '90px', md: '100px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: { xs: '8px', md: '12px' },
            padding: { xs: '8px', sm: '10px', md: '12px' },
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
              borderColor: 'rgba(128, 48, 130, 0.2)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, transparent 0%, rgba(128, 48, 130, 0.05) 50%, transparent 100%)`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
          }}
        >
          {!imageError ? (
            <Box
              component="img"
              src={client.logo}
              alt={client.alt || `${client.name} logo`}
              loading="lazy"
              onError={handleImageError}
              onLoad={handleImageLoad}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transition: 'opacity 0.3s ease',
                opacity: imageLoaded ? 1 : 0.7,
              }}
            />
          ) : (
            // Fallback content when image fails to load
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(128, 48, 130, 0.1)',
                borderRadius: '4px',
                color: vsoftPurple,
                fontWeight: 600,
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                textAlign: 'center',
                padding: '4px',
              }}
            >
              {client.name}
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            mb: { xs: 3, sm: 4, md: 6 },
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Decorative line */}
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '40px', md: '60px' },
              height: { xs: '3px', md: '4px' },
              background: `linear-gradient(90deg, ${vsoftPurple} 0%, rgba(128, 48, 130, 0.3) 100%)`,
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: { xs: -15, md: -25 },
              borderRadius: '4px',
            }}
          />

          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: vsoftPurple,
              textTransform: 'uppercase',
              letterSpacing: { xs: '1px', md: '1.5px' },
              mb: { xs: 0.5, md: 1 },
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            {AnimatedContent ? (
              <AnimatedContent
                distance={20}
                direction="vertical"
                config={{ tension: 120, friction: 14 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
              >
                Trusted Partnerships
              </AnimatedContent>
            ) : (
              'Trusted Partnerships'
            )}
          </Typography>

          {/* Main Header */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              mb: { xs: 1, md: 2 },
              position: 'relative',
              display: 'inline-block',
              lineHeight: 1.2,
            }}
          >
            {AnimatedContent ? (
              <AnimatedContent
                distance={40}
                direction="vertical"
                config={{ tension: 100, friction: 10 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
              >
                Our Successful Clients
              </AnimatedContent>
            ) : (
              'Our Successful Clients'
            )}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: { xs: '90%', sm: '80%', md: '650px' },
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.5,
            }}
          >
            {AnimatedContent ? (
              <AnimatedContent
                distance={30}
                direction="vertical"
                delay={100}
                config={{ tension: 100, friction: 14 }}
                initialOpacity={0}
                animateOpacity
                threshold={0.1}
              >
                Proudly partnering with industry leaders who trust our expertise for their digital success
              </AnimatedContent>
            ) : (
              'Proudly partnering with industry leaders who trust our expertise for their digital success'
            )}
          </Typography>
        </Box>

        {/* Client Logo Slider */}
        <Box
          sx={{
            px: { xs: 0, sm: 2, md: 4 },
            mt: { xs: 2, sm: 4, md: 5 },
            position: 'relative',
            // Enhanced slider styling
            '& .slick-track': {
              display: 'flex',
              alignItems: 'center',
            },
            '& .slick-slide': {
              padding: { xs: '0 8px', sm: '0 6px', md: '0 4px' },
              '& > div': {
                height: '100%',
              },
            },
            '& .slick-list': {
              overflow: 'hidden',
              margin: { xs: '0 -8px', sm: '0 -6px', md: '0 -4px' },
            },
            '& .slick-dots': {
              bottom: { xs: '-30px', md: '-45px' },
              display: { xs: 'none !important', sm: 'block !important' },
              '& li': {
                margin: '0 4px',
              },
              '& li button:before': {
                color: vsoftPurple,
                fontSize: { xs: '10px', md: '12px' },
                opacity: 0.6,
              },
              '& li.slick-active button:before': {
                color: vsoftPurple,
                opacity: 1,
              },
            },
            '& .slick-arrow': {
              display: { xs: 'none !important', md: 'block !important' },
              zIndex: 2,
              width: '40px',
              height: '40px',
              '&:before': {
                color: vsoftPurple,
                fontSize: '24px',
              },
              '&:hover': {
                '&:before': {
                  opacity: 1,
                },
              },
            },
            '& .slick-prev': {
              left: '-45px',
            },
            '& .slick-next': {
              right: '-45px',
            },
          }}
        >
          {isSliderReady && clientLogos.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {clientLogos.map((client, index) => (
                <LogoItem key={client.id} client={client} index={index} />
              ))}
            </Slider>
          ) : (
            // Loading state or fallback
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '160px',
                color: 'text.secondary',
              }}
            >
              <Typography variant="body2">Loading client logos...</Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoSlider;