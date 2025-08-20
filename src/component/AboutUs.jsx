    import React, { useRef } from 'react';
    import { useLayoutEffect } from 'react';
    import {
        Box,
        Container,
        Typography,
        Breadcrumbs,
        Link,
        Grid,
        Card,
        CardContent,
    } from '@mui/material';
    import HomeIcon from '@mui/icons-material/Home';
    import NavigateNextIcon from '@mui/icons-material/NavigateNext';
    import WebIcon from '@mui/icons-material/Language';
    import { useNavigate } from 'react-router-dom';
    import AbtHead from '../assets/about-head.webp';
    import BuildIcon from '@mui/icons-material/Build';
    import GroupsIcon from '@mui/icons-material/Groups';
    import SupportIcon from '@mui/icons-material/Support';
    import Vision from '../assets/vision.webp';
    import Mission from '../assets/mission.webp';
    import ClientLogoSlider from '../Animations/ClientLogoSlider';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const AboutUs = () => {
        const navigate = useNavigate();
        const vsoftYellow = '#ffbd28';
const vsoftGray = '#332911ff';

        // Refs for GSAP animations
        const heroRef = useRef(null);
        const heroTitleRef = useRef(null);
        const heroSubtitleRef = useRef(null);
        const visionSectionRef = useRef(null);
        const visionImageRef = useRef(null);
        const visionContentRef = useRef(null);
        const missionSectionRef = useRef(null);
        const missionImageRef = useRef(null);
        const missionContentRef = useRef(null);
        const companyBannerRef = useRef(null);
        const companyTitleRef = useRef(null);
        const companyDescRef = useRef(null);
        const overlayRef = useRef(null);
        const breadcrumbsRef = useRef(null);

        // Array of objects for "Why Choose Us" section
        const whyChooseUsItems = [
            {
                id: 1,
                title: "Innovative Solutions",
                description: "Smart ideas for your digital growth.",
                icon: (props) => <BuildIcon {...props} />,
                iconTransform: 'scale(1.5) rotate(-15deg)'
            },
            {
                id: 2,
                title: "Client-Centric Approach",
                description: "We focus on your business goals.",
                icon: (props) => <GroupsIcon {...props} />,
                iconTransform: 'scale(1.5)'
            },
            {
                id: 3,
                title: "End-to-End Support",
                description: "Support from start to finish.",
                icon: (props) => <SupportIcon {...props} />,
                iconTransform: 'scale(1.5) rotate(15deg)'
            }
        ];

        useLayoutEffect(() => {
    requestAnimationFrame(() => {
        // Initial states
        gsap.set([heroTitleRef.current, heroSubtitleRef.current], { opacity: 0, y: 50 });
        gsap.set(breadcrumbsRef.current, { opacity: 0, y: -30 });
        gsap.set(overlayRef.current, { opacity: 0 });

        const heroTimeline = gsap.timeline({ delay: 0.3 });

        heroTimeline
        .to(overlayRef.current, {
            opacity: 0.75,
            duration: 1,
            ease: "power2.out"
        })
        .to(breadcrumbsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6")
        .to(heroTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4")
        .to(heroSubtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");

        // Vision section
        gsap.set([visionImageRef.current, visionContentRef.current], {
        opacity: 0,
        x: (index) => index === 0 ? -100 : 100
        });

        ScrollTrigger.create({
        trigger: visionSectionRef.current,
        start: "top 80%",
        onEnter: () => {
            gsap.to(visionImageRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
            });
            gsap.to(visionContentRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
            });
        }
        });

        // Mission section
        gsap.set([missionImageRef.current, missionContentRef.current], {
        opacity: 0,
        x: (index) => index === 0 ? 100 : -100
        });

        ScrollTrigger.create({
        trigger: missionSectionRef.current,
        start: "top 80%",
        onEnter: () => {
            gsap.to(missionContentRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
            });
            gsap.to(missionImageRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
            });
        }
        });

        // Company banner
        gsap.set([companyTitleRef.current, companyDescRef.current], {
        opacity: 0,
        y: 50
        });

        ScrollTrigger.create({
        trigger: companyBannerRef.current,
        start: "top 85%",
        onEnter: () => {
            const bannerTimeline = gsap.timeline();
            bannerTimeline
            .to(companyTitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            })
            .to(companyDescRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");
        }
        });

        // Floating animations
        gsap.to(visionImageRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
        });

        gsap.to(missionImageRef.current, {
        y: 10,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
        });
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    }, []);

        return (
            <>
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
                {/* Hero Section with Background */}
                <Box
                    ref={heroRef}
                    sx={{
                        py: 10,
                        color: '#fff',
                        textAlign: 'center',
                        backgroundImage: `url(${AbtHead})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        
                    }}
                >
                    {/* Overlay */}
                    <Box
                        ref={overlayRef}
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
                    <Container sx={{ position: 'relative', zIndex: 2 }}>
                        <Breadcrumbs
                            ref={breadcrumbsRef}
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
                            <Typography color="#fff" sx={{ display: 'flex', alignItems: 'center' }}>
                                <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                About Us
                            </Typography>
                        </Breadcrumbs>
                        <Typography ref={heroTitleRef} variant="h2" fontWeight="bold">
                            About Us
                        </Typography>
                        <Typography ref={heroSubtitleRef} variant="body1" paragraph>
                            VSoft Solutions is Empowering Businesses Through Digital Excellence.
                        </Typography>
                    </Container>
                </Box>

                {/* Vision Section */}
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Box
                        ref={visionSectionRef}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            // gap: 0,
                        }}
                    >
                        {/* Image on the left */}
                        <Box ref={visionImageRef} sx={{ flex: 1 }}>
                            <Box
                                component="img"
                                src={Vision}
                                alt="Team working together"
                                sx={{
                                    width: '60%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </Box>

                        {/* Content on the right */}
                        <Box ref={visionContentRef} sx={{ flex: 1 }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Our Vision
                            </Typography>
                            <Typography variant="body1" paragraph>
                                At <b>VSoft Solutions</b>, a leading IT company in Tirunelveli, our goal is to empower small, medium and large businesses with smart, scalable, 
                                and future-proof digital solutions. We aspire to be a global leader in digital transformation, creating immersive websites, reliable mobile applications, 
                                and outcome-based digital marketing solutions - all meant to empower our customers to succeed in a digital world.
                            </Typography>

                            <Typography variant="body1" paragraph>
                            We are a software company that is driven by our customers. We take satisfaction, innovation and quality seriously. We are always innovating 
                            and pushing boundaries to develop technology that works and inspires. We want to be seen as the most trusted information technology solutions 
                            partner for businesses looking to enhance their online presence, develop their brand and create meaningful and connected engagement with their 
                            audience.
                            </Typography>
                        </Box>
                    </Box>
                </Container>

                {/* Mission Section */}
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Box
                        ref={missionSectionRef}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: { xs: 4, md: 10 },
                        }}
                    >
                        {/* Content on the left */}
                        <Box ref={missionContentRef} sx={{ flex: 1, mr: { md: 6 } }}>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" paragraph>
                                At <b>VSoft Solutions</b>, our mission is to empower businesses by delivering reliable, creative, and result-oriented digital services. We aim to help companies—big or small—unlock their full potential through smart technology, stunning designs, and impactful digital marketing strategies.
                            </Typography>

                            <Typography variant="body1" paragraph>
                                Our mission is to become a trusted partner for every brand we work with—helping them succeed, scale, and shine in the digital space
                            </Typography>
                        </Box>

                        {/* Image on the right */}
                        <Box ref={missionImageRef} sx={{ flex: 1 }}>
                            <Box
                                component="img"
                                src={Mission}
                                alt="Team working together"
                                sx={{
                                    width: '85%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)'
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Container>

                {/* Company Banner Section */}
                <Box
                    ref={companyBannerRef}
                    sx={{
                        width: '100%',
                        background: `linear-gradient(90deg,rgb(15, 93, 145) 0%,rgb(116, 77, 128) 50%, rgba(168, 81, 197, 0.95) 100%)`,
                        py: { xs: 6, md: 8 },
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Abstract triangle shape inspired by logo */}
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            background: `${vsoftYellow}22`,
                            transform: 'rotate(45deg)',
                            top: '-150px',
                            left: '-150px',
                            borderRadius: '30px',
                            zIndex: 1,
                        }}
                    />

                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                        <Grid container spacing={4} alignItems="center">
                            {/* Left side - "We are VSoft Solutions" */}
                            <Grid item xs={12} md={5}>
                                <Box ref={companyTitleRef}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: '3rem', md: '4rem' },
                                            fontWeight: 700,
                                            color: 'white',
                                            lineHeight: 1.1,
                                            mb: 1,
                                        }}
                                    >
                                        We are
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: '3rem', md: '4rem' },
                                            fontWeight: 700,
                                            color: vsoftGray,
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        <span style={{ color: vsoftYellow, fontSize: '4rem' }}>V</span>Soft
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: '2rem', md: '2.5rem' },
                                            fontWeight: 500,
                                            color: vsoftGray,
                                            letterSpacing: '4px',
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        SOLUT<span style={{ color: vsoftYellow, fontSize: '2.5rem' }}>I</span>ONS
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Right side - Company description */}
                            <Grid item xs={12} md={7}>
                                <Box ref={companyDescRef}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            mb: 3,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        At VSoft Solutions, we specialize in crafting tailored digital solutions that help businesses thrive online. With a focus on innovation and quality, we've successfully delivered projects across web development, app creation, and digital marketing. Our client-centric approach ensures every solution is aligned with business goals, making us a trusted partner for digital growth.
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            mb: 1,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        At VSoft Solutions, we bring the <Box component="span" sx={{ color: vsoftYellow, fontWeight: 'bold' }}>firepower of creativity</Box> and the <Box component="span" sx={{ color: vsoftGray, fontWeight: 'bold' }}>focus of a results-driven team</Box>. We don't just deliver projects we build <Box component="span" sx={{ color: vsoftYellow, fontWeight: 'bold' }}>bold digital experiences</Box> that help brands shine. With a blend of tech smarts and business insight, our team is ready to take your business to the next level.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Why Choose Us Section - Modified to center cards */}
                <Box
                    sx={{
                        py: 8,
                        backgroundColor: 'background.default',
                    }}
                >
                    <Container maxWidth="xl">
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            ref={companyTitleRef}
                        >
                        Why Choose Us

                        </Typography>

                        {/* Modified Grid to center cards */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 4
                        }}>
                            {/* Map through the array to generate cards */}
                            {whyChooseUsItems.map((item) => (
                                <Card
                                    key={item.id}
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
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                mb: 3,
                                                height: 200,
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
                                                sx={{
                                                    position: 'relative',
                                                    zIndex: 1
                                                }}
                                            >
                                                {item.icon({
                                                    sx: {
                                                        fontSize: 60,
                                                        color: vsoftYellow,
                                                        transform: item.iconTransform,
                                                        mb: 1
                                                    }
                                                })}
                                                <Box
                                                    component="img"
                                                    src="/api/placeholder/400/320"
                                                    alt={item.title}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        opacity: 0, // Hide the placeholder image
                                                    }}
                                                />
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: '#111'
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography variant="body1" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Container>
                </Box>


                <ClientLogoSlider />
            </>
        );
    };

    export default AboutUs;