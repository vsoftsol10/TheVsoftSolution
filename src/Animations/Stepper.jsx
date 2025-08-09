import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StepItem = ({ number, title, description, color, index, isLast }) => {
  const itemRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Animate the step item
    gsap.fromTo(
      itemRef.current,
      { 
        x: isMobile ? 0 : (index % 2 === 0 ? -80 : 80), 
        y: isMobile ? 50 : 0,
        opacity: 0 
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate the number with a slight delay
    gsap.fromTo(
      numberRef.current,
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: 0.3
      }
    );

    // Animate the connecting line (if not last item)
    if (!isLast && lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          delay: 0.8
        }
      );
    }
  }, [index, isLast]);

  return (
    <Box
      ref={itemRef}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 2, md: 4 },
        mb: { xs: 4, md: 6 },
        maxWidth: '100%',
        width: '100%'
      }}
    >
      {/* Step Number Circle */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: { xs: 80, md: 100 },
          zIndex: 2
        }}
      >
        <Box
          ref={numberRef}
          sx={{
            width: { xs: 80, md: 100 },
            height: { xs: 80, md: 100 },
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 25px ${color}40`,
            border: '3px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              borderRadius: '50%'
            }
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: { xs: '1.5rem', md: '2rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {number}
          </Typography>
        </Box>

        {/* Connecting Line */}
        {!isLast && (
          <Box
            ref={lineRef}
            sx={{
              width: '2px',
              height: { xs: 60, md: 80 },
              background: `linear-gradient(to bottom, ${color}, rgba(255,255,255,0.2))`,
              mt: 1,
              transformOrigin: 'top',
              display: { xs: 'block', md: 'block' }
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box
        ref={contentRef}
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          maxWidth: { xs: '100%', md: 'calc(100% - 140px)' },
          pt: { xs: 0, md: 1 }
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'white', 
            mb: 2, 
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            lineHeight: 1.2
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#e0e0e0', 
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            maxWidth: { xs: '100%', md: '80%' }
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default function WebDevProcessStepper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animate main title
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate subtitle
    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        delay: 0.3
      }
    );
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Strategy & Planning',
      description: 'We begin by understanding your business goals and target audience. Our team creates a comprehensive strategy that includes market research, competitor analysis, and defining the project scope to ensure your website meets both user needs and business objectives.',
      color: '#FF4081',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Our creative team designs intuitive and visually appealing interfaces. We create detailed wireframes, mockups, and interactive prototypes that showcase the user experience, ensuring the design aligns with your brand identity and user expectations.',
      color: '#4CAF50',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Using the latest technologies and best practices, we bring the design to life with clean, efficient code. We implement responsive design, optimize for performance, and conduct thorough testing across different devices and browsers.',
      color: '#00BCD4',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'After final testing and your approval, we launch your website and provide comprehensive training. We offer ongoing maintenance, security updates, performance monitoring, and technical support to ensure your website continues to perform optimally.',
      color: '#FF9800',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          maxWidth: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Header Section */}
        <Box 
          textAlign="center" 
          mb={{ xs: 6, sm: 8, md: 10 }}
          sx={{
            maxWidth: '100%',
            overflow: 'hidden'
          }}
        >
          <Typography 
            ref={titleRef}
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              background: 'linear-gradient(45deg, #FF4081, #00BCD4, #4CAF50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              lineHeight: 1.2,
              wordBreak: 'break-word',
              maxWidth: '100%'
            }}
          >
            Our Web Development Process
          </Typography>
          
          <Typography 
            ref={subtitleRef}
            variant="h6" 
            sx={{ 
              color: '#e0e0e0',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: { xs: '100%', sm: '80%', md: '70%' },
              mx: 'auto',
              wordBreak: 'break-word'
            }}
          >
            Our outstanding process is geared to provide you with a scalable and high-performance web solution that drives results and exceeds expectations.
          </Typography>
        </Box>

        {/* Steps Section */}
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '800px' },
            mx: 'auto',
            overflow: 'hidden'
          }}
        >
          {steps.map((step, index) => (
            <StepItem 
              key={index} 
              {...step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </Box>

        {/* Bottom decoration */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            textAlign: 'center',
            opacity: 0.7
          }}
        >
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            Ready to start your project? Let's build something amazing together.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}