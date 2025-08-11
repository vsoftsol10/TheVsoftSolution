import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample client data - replace with your actual logos
  const clients = [
    { id: 1, name: "Bullet Crackers", logo: ClientOne },
    { id: 2, name: "MKM", logo: ClientTwo },
    { id: 3, name: "SMEC", logo: ClientThree },
    { id: 4, name: "DARC", logo: ClientFour },
    { id: 5, name: "CNI", logo: ClientFive },
    { id: 6, name: "Rajalakshmi", logo: ClientSix },
    { id: 7, name: "Maharaja", logo: ClientSeven },
    { id: 8, name: "Gayra", logo: ClientEight },
    { id: 9, name: "Nivedha", logo: ClientNine },
    { id: 10, name: "Thanporunai", logo: ClientTen },
    { id: 11, name: "4T", logo: ClientEleven },
    { id: 12, name: "Friends", logo: ClientTwelve },
  ];

  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 600) return 2;
    if (window.innerWidth < 960) return 3;
    if (window.innerWidth < 1280) return 4;
    return 5;
  };

  const [visibleSlides, setVisibleSlides] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev >= clients.length - visibleSlides ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length, visibleSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= clients.length - visibleSlides ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? clients.length - visibleSlides : prev - 1
    );
  };

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at top, rgba(128, 48, 130, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#803082',
              fontWeight: 700,
              letterSpacing: '2px',
              fontSize: '0.9rem',
              display: 'block',
              mb: 1
            }}
          >
            Trusted Partners
          </Typography>
          
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #2c3e50, #803082)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Successful Clients
          </Typography>
          
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #803082, #a855f7)',
              mx: 'auto',
              borderRadius: 2,
              mb: 3
            }}
          />
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Partnering with industry leaders who trust our expertise for their digital transformation journey
          </Typography>
        </Box>

        {/* Slider Container */}
        <Box sx={{ position: 'relative', px: { xs: 0, sm: 2 } }}>
          {/* Navigation Buttons - Hidden on mobile */}
          <IconButton
            onClick={prevSlide}
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <ChevronLeft size={24} color="#803082" />
          </IconButton>
          
          <IconButton
            onClick={nextSlide}
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <ChevronRight size={24} color="#803082" />
          </IconButton>

          {/* Slider Track */}
          <Box sx={{ overflow: 'hidden', px: { xs: 3, sm: 6 } }}>
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`
              }}
            >
              {clients.map((client) => (
                <Box
                  key={client.id}
                  sx={{
                    flexShrink: 0,
                    width: `${100 / visibleSlides}%`,
                    px: { xs: 1, sm: 1.5, md: 2 }
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 3,
                      p: { xs: 2, sm: 3, md: 2 },
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(128, 48, 130, 0.15)',
                        '&::before': {
                          opacity: 1
                        },
                        '& img': {
                          filter: 'grayscale(0%) brightness(1.1)',
                          transform: 'scale(1.05)'
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(128, 48, 130, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={client.logo}
                      alt={`${client.name} logo`}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'grayscale(20%) brightness(0.9)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 1 }}>
            {Array.from({ length: Math.max(0, clients.length - visibleSlides + 1) }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: currentSlide === index ? 32 : 12,
                  height: 12,
                  borderRadius: 6,
                  bgcolor: currentSlide === index ? '#803082' : 'rgba(128, 48, 130, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    bgcolor: currentSlide === index ? '#803082' : 'rgba(128, 48, 130, 0.6)',
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoSlider;