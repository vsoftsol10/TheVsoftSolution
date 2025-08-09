import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  Breadcrumbs,
  Grid,
  Paper,
  Stack,
  Card,
  CardContent,
  useTheme,
  List, ListItem, ListItemIcon, ListItemText,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductBanner from '../assets/product-bg.webp';
import Vconstech from '../assets/Vlogo1.png';
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import TaskIcon from '@mui/icons-material/Task';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Product = () => {
  const navigate = useNavigate();
  const headingRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  const features = [
    {
      title: "Digital Document Vault",
      description: "SiteFile Hub is a digital command center built for property developers and builders to manage every document tied to your construction project—from land purchase agreements to structural drawings.",
      features: [
        "Legal Document Management: Manage legal documents like Patta, EC, NOC, Approval Letters, Building Plans, Agreements, etc.",
        "Quick Search & Retrieval: Easy to find documents instantly with tags, categories, or project-wise filters",
        "Role-Based Access Control: Control access to documents based on user roles and permissions"
      ],
      icon: <DescriptionIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#FF6B35' }} />,
      bgColor: '#FFF4F0',
      accentColor: '#FF6B35'
    },
    {
      title: "Material Management",
      description: "Efficiently manage your inventory and materials with advanced tracking systems that provide real-time visibility into stock levels and supply chain operations.",
      features: [
        "Vendor Supply History: Track vendor performance and supply history",
        "Stock Level Monitoring: Real-time updates on material stock levels",
        "Daily In/Out Entry: Log daily material usage and deliveries"
      ],
      icon: <InventoryIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#4ECDC4' }} />,
      bgColor: '#F0FDFC',
      accentColor: '#4ECDC4'
    },
    {
      title: "Task Board",
      description: "Manage your entire construction workflow effortlessly with a visual task board—designed specifically for civil contractors. From foundation work to final finishing, assign and track every task in real-time.",
      features: [
        "Task Assignment: Assign tasks to team members with deadlines and priorities",
        "Progress Monitoring: Track task completion status in real-time with visual indicators",
        "Deadline Management: Set and manage deadlines for each task to ensure timely project delivery"
      ],
      icon: <TaskIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#8B5FBF' }} />,
      bgColor: '#FAF7FD',
      accentColor: '#8B5FBF',
      taskBoard: {
        todo: ["Foundation"],
        inProgress: ["Walls"],
        done: ["Planning"]
      }
    },
    {
      title: "Payslip Generation",
      description: "Eliminate manual wage calculations with the automated payslip system. Track labour attendance, manage overtime, and generate accurate payslips in just a few clicks.",
      features: [
        "Auto Payslip Calculation: Automatically calculate wages based on attendance and overtime hours",
        "PDF Payslip Export: Generate payslips in PDF format for easy sharing and record-keeping",
        "Payroll History: Maintain monthly wage records for audit-ready payroll management"
      ],
      icon: <PaymentIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#F39C12' }} />,
      bgColor: '#FFFCF0',
      accentColor: '#F39C12'
    }
  ];

  const TaskBoardDemo = ({ taskBoard, accentColor }) => (
    <Box sx={{ 
      mt: 2, 
      display: 'flex', 
      gap: { xs: 0.5, sm: 1 }, 
      flexWrap: 'wrap',
      flexDirection: { xs: 'column', sm: 'row' }
    }}>
      <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: '80px' }, mb: { xs: 1, sm: 0 } }}>
        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
          TO DO
        </Typography>
        <Box sx={{ mt: 0.5, p: { xs: 0.5, sm: 1 }, bgcolor: '#ffebee', borderRadius: 1, minHeight: { xs: '30px', sm: '40px' } }}>
          {taskBoard.todo.map((task, i) => (
            <Typography key={i} variant="caption" sx={{ display: 'block', fontSize: { xs: '9px', sm: '10px' } }}>
              {task}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: '80px' }, mb: { xs: 1, sm: 0 } }}>
        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
          IN PROGRESS
        </Typography>
        <Box sx={{ mt: 0.5, p: { xs: 0.5, sm: 1 }, bgcolor: '#fff3e0', borderRadius: 1, minHeight: { xs: '30px', sm: '40px' } }}>
          {taskBoard.inProgress.map((task, i) => (
            <Typography key={i} variant="caption" sx={{ display: 'block', fontSize: { xs: '9px', sm: '10px' } }}>
              {task}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: '80px' } }}>
        <Typography variant="caption" fontWeight="bold" color="text.secondary" sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
          DONE
        </Typography>
        <Box sx={{ mt: 0.5, p: { xs: 0.5, sm: 1 }, bgcolor: '#e8f5e8', borderRadius: 1, minHeight: { xs: '30px', sm: '40px' } }}>
          {taskBoard.done.map((task, i) => (
            <Stack key={i} direction="row" alignItems="center" spacing={0.5}>
              <CheckCircleIcon sx={{ fontSize: { xs: 10, sm: 12 }, color: '#4caf50' }} />
              <Typography variant="caption" sx={{ fontSize: { xs: '9px', sm: '10px' } }}>
                {task}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Product Introduction */}
      <Box
        sx={{
          bgcolor: '#334155', // bg-slate-700 equivalent
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{ 
              justifyContent: { xs: 'center', sm: 'left' }, 
              display: 'flex', 
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/')}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer', 
                color: '#fff',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              <HomeIcon sx={{ mr: 0.5, fontSize: { xs: 16, sm: 20 } }} />
              Home
            </Link>
            <Typography
              color="#fff"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              <WebIcon sx={{ mr: 0.5, fontSize: { xs: 16, sm: 20 } }} />
              Our Products
            </Typography>
          </Breadcrumbs>
        </Container>

        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
            <img
              src={Vconstech}
              alt="Vconstech Logo"
              style={{
                height: isMobile ? '60px' : isTablet ? '80px' : '100px',
                marginBottom: isMobile ? '16px' : '24px',
              }}
            />
          </Box>
          <Typography 
            variant={isMobile ? "h6" : isTablet ? "h5" : "h4"} 
            color="rgba(255,255,255,0.8)" 
            sx={{ 
              fontFamily: "cinzel",
              mb: { xs: 2, sm: 3, md: 4 }, 
              maxWidth: { xs: '100%', sm: '600px', md: '800px' }, 
              mx: 'auto',
              px: { xs: 2, sm: 0 }
            }}
          >
            SMART SITE MANAGEMENT FOR THE CONSTRUCTION INDUSTRY
          </Typography>
          <Typography 
            variant="body1" 
            color="rgba(255,255,255,0.7)" 
            sx={{ 
              maxWidth: { xs: '100%', sm: '700px', md: '900px' }, 
              mx: 'auto', 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
              lineHeight: 1.6,
              px: { xs: 2, sm: 1, md: 0 }
            }}
          >
            We're building a platform to revolutionize how developers, contractors, and interior companies manage their construction workflows.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{marginTop: { xs: 4, sm: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
        <Typography 
            variant="body1" 
            color="#000000" 
            sx={{ 
              maxWidth: { xs: '100%', sm: '700px', md: '900px' }, 
              mx: 'auto', 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
              lineHeight: 1.6,
              px: { xs: 2, sm: 1, md: 0 }
            }}
          >
            At VConstech, we're redefining how the construction industry operates. Our centralized digital platform helps developers, contractors, and interior companies manage their workflows with ease—no more paperwork, delays, or confusion.
          </Typography>
          <List
        sx={{
          maxWidth: 700,
          mx: 'auto',
          mt: 4,
          textAlign: 'left',
        }}
      >
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: 'lightgreen' }} />
          </ListItemIcon>
          <ListItemText
            primary="Building Developers – Track budgets, monitor progress, and stay in control."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: 'lightgreen' }} />
          </ListItemIcon>
          <ListItemText
            primary="Civil Contractors – Manage labor, materials, and real-time site updates."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: 'lightgreen' }} />
          </ListItemIcon>
          <ListItemText
            primary="Interior Companies – Simplify product tracking and interior workflows."
          />
        </ListItem>
      </List>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card 
                elevation={2} 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-4px)' },
                    boxShadow: { xs: 2, sm: 4 }
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={{ xs: 2, sm: 3 }} 
                    alignItems={{ xs: 'center', sm: 'flex-start' }} 
                    sx={{ mb: { xs: 2, sm: 3 } }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        bgcolor: feature.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: { xs: '60px', sm: '70px', md: '80px' },
                        height: { xs: '60px', sm: '70px', md: '80px' }
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                      <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        fontWeight="bold" 
                        color="text.primary" 
                        sx={{ mb: 1, fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.85rem', sm: '0.875rem' }
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                    {feature.features.map((feat, i) => (
                      <Typography 
                        key={i} 
                        variant="body2" 
                        sx={{ 
                          mb: { xs: 1, sm: 1.5 }, 
                          pl: { xs: 1.5, sm: 2 }, 
                          position: 'relative',
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          lineHeight: { xs: 1.4, sm: 1.5 }
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 0,
                            top: { xs: '4px', sm: '6px' },
                            width: { xs: '4px', sm: '6px' },
                            height: { xs: '4px', sm: '6px' },
                            borderRadius: '50%',
                            bgcolor: feature.accentColor
                          }}
                        />
                        {feat}
                      </Typography>
                    ))}
                  </Box>

                  {feature.taskBoard && (
                    <TaskBoardDemo taskBoard={feature.taskBoard} accentColor={feature.accentColor} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: { xs: 6, sm: 7, md: 8 }, 
          p: { xs: 3, sm: 4, md: 6 }, 
          bgcolor: '#f8f9fa', 
          borderRadius: { xs: 2, sm: 3 },
          mx: { xs: 0, sm: 0 }
        }}>
          <Typography 
            variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
            fontWeight="bold" 
            sx={{ 
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              px: { xs: 1, sm: 0 }
            }}
          >
            Ready to Transform Your Construction Management?
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              maxWidth: { xs: '100%', sm: '500px', md: '600px' }, 
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 1, sm: 0 }
            }}
          >
            Join thousands of construction professionals who trust Vconstech for their project management needs.
          </Typography>
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            href="https://vconstech.thevsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: '#FF6B35',
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              '&:hover': {
                bgcolor: '#e55a2b'
              }
            }}
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Product;