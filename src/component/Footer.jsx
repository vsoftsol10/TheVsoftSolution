import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Instagram, LinkedIn, Facebook, Phone, Language, Email } from '@mui/icons-material';
import logo from '../assets/vsFinallogo.avif';
import FooterBckImg from '../assets/footerbck.webp';

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                py: 6,
                px: { xs: 3, sm: 4, md: 6 }, // Even horizontal padding
                color: '#000',
                backgroundColor: '#FFBD28',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
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
                    opacity: 0.4,
                    zIndex: 0,
                }}
            />
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 3, sm: 4, md: 15 }}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        maxWidth: '1200px',
                    }}
                >
                    {/* Column 1 - Address */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box>
                                <img src={logo} alt="logo" style={{ height: '100px' }} />
                            </Box>
                            <Box color={"#111"}>
                                <Typography variant="body2">10J2, 2nd block, Tiruvandrum Road</Typography>
                                <Typography variant="body2">Vannarapettai, Tirunelveli.</Typography>
                                <Typography variant="body2">Tamilnadu - 627002, India.</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Column 2 - Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="black" fontWeight="bold">
                                Quick Links
                            </Typography>
                            <Stack spacing={1}>
                                <Link href="/career" underline="hover" color="black">Career</Link>
                                <Link href="#" underline="hover" color="black">Privacy Policy</Link>
                                <Link href="#" underline="hover" color="black">Terms & Conditions</Link>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 3 - Contact Us */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="black" fontWeight="bold">
                                Contact Us
                            </Typography>
                            <Stack spacing={1} color="black">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Phone fontSize="small" />
                                    <Typography variant="body2"><b>+91 90954 22237</b></Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Language fontSize="small" />
                                    <Link href="https://www.thevsoft.com" underline="hover" color="black">
                                        www.thevsoft.com
                                    </Link>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Email fontSize="small" />
                                    <Link href="mailto:info@thevsoft.com" underline="hover" color="black">
                                        info@thevsoft.com
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Column 4 - Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="h6" color="black" fontWeight="bold">
                                Social Medias
                            </Typography>
                            <Stack spacing={1} color="black">
                                <a
                                    href="https://www.instagram.com/thevsoft?igsh=MXdiMTlmNnE2MWx1Zw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Instagram fontSize="small" />
                                        <Typography variant="body2" sx={{ fontSize: "15px" }}><b>Instagram</b></Typography>
                                    </Stack>
                                </a>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Facebook fontSize="small" />
                                    <Typography variant="body2" sx={{ fontSize: "15px" }}><b>Facebook</b></Typography>
                                </Stack>
                                <a
                                    href="https://www.linkedin.com/company/thevsoft-solutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <LinkedIn fontSize="small" />
                                        <Typography variant="body2" sx={{ fontSize: "15px" }}><b>LinkedIn</b></Typography>
                                    </Stack>
                                </a>
                            </Stack>
                        </Box>
                    </Grid>
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