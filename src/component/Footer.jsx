import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Instagram, LinkedIn, Facebook, Phone, Language, Email } from '@mui/icons-material';
import logo from '../assets/vslogo_new.png';
import FooterBckImg from '../assets/footerbck.webp';

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                py: 6,
                color: '#000',
                backgroundColor: '#f5f3f6',
                overflow: 'hidden',
            }}
        >

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${FooterBckImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                    zIndex: 0,
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 4, sm: 6, md: 12, lg: 16 }}>
                    {/* Column 1 - Address */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box>
                                <img src={logo} alt="logo" style={{ height: '100px' }} />
                            </Box>
                            <Box color={"#fff"}>
                                <Typography variant="body2">10J2, 2nd block, Tiruvandrum Road</Typography>
                                <Typography variant="body2">Vannarapettai, Tirunelveli.</Typography>
                                <Typography variant="body2">Tamilnadu - 627002, India.</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Column 2 - Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Quick Links
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="/career" underline="hover" color="white">Career</Link>
                                <Link href="#" underline="hover" color="white">Privacy Policy</Link>
                                <Link href="#" underline="hover" color="white">Terms & Conditions</Link>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 3 - Contact Us */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Contact Us
                            </Typography>
                            <Stack spacing={1} color="white">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Phone fontSize="small" />
                                    <Typography variant="body2"><b>+91 90954 22237</b></Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Language fontSize="small" />
                                    <Link href="https://www.thevsoft.com" underline="hover" color="white">
                                        www.thevsoft.com
                                    </Link>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Email fontSize="small" />
                                    <Link href="mailto:info@thevsoft.com" underline="hover" color="white">
                                        info@thevsoft.com
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 4 - Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="#7a337a" fontWeight="bold">
                                Social Medias
                            </Typography>
                            <Stack spacing={1} color="white">
                                <Stack spacing={1} color="white">
                                    <a
                                        href="https://www.instagram.com/thevsoft?igsh=MXdiMTlmNnE2MWx1Zw=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <Stack direction="row" alignItems="center" spacing={1} >
                                            <Instagram fontSize="small" />
                                            <Typography variant="body2" sx={{fontSize:"15px"}}><b>Instagram</b></Typography>
                                        </Stack>
                                    </a>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Facebook fontSize="small" />
                                    <Typography variant="body2" sx={{fontSize:"15px"}}><b>Facebook</b></Typography>
                                </Stack>
                                <a
                                    href="https://www.linkedin.com/company/thevsoft-solutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <LinkedIn fontSize="small" />
                                        <Typography variant="body2" sx={{fontSize:"15px"}}><b>LinkedIn</b></Typography>
                                    </Stack>
                                </a>

                            </Stack>
                        </Box>
                    </Grid>

                    {/* Map Section – move this here */}
                    {/* <Grid item xs={12}>
                        <Box mt={4} display="flex" justifyContent="center">
                            <iframe
                                title="VSoft Solutions Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6243021495657!2d77.7263703!3d8.7271784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041150e702fb9b%3A0x9dc459b8cc0f579e!2sVSOFT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1746771152088!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '10px', maxWidth: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid> */}
                </Grid>

                {/* Footer Bottom Text */}
                <Box mt={6} textAlign="center" borderTop="1px solid #ddd" pt={3}>
                    <Typography variant="body2">
                        © 2025 Vsoft Solutions. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
