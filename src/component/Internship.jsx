import React, { useState, useEffect } from 'react';
import { Award, Users, Clock, CheckCircle, MapPin, Phone, Globe, Star, Trophy, Briefcase, GraduationCap } from 'lucide-react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Internship = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourseForForm, setSelectedCourseForForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Cloud Computing Basics',
      category: 'technology',
      platforms: ['AWS', 'Azure', 'Google Cloud Platform'],
      skills: ['EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes'],
      duration: '3 months',
      level: 'Internship/ Course',
      description: 'Master cloud technologies with hands-on experience across AWS, Azure, and Google Cloud Platform.',
      features: ['Real-time projects', 'Industry mentorship', 'Certification preparation'],
      // icon: '☁️',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6'
    },
    {
      id: 2,
      title: 'SAP Basis Administration',
      category: 'enterprise',
      platforms: ['SAP HANA', 'SAP Cloud', 'BASIS'],
      skills: ['SAP Understanding', 'BASIS Training', 'HANA DB Admin', 'System Administration', 'Technical Configuration'],
      duration: '2 months',
      level: 'Intermediate',
      description: 'Complete SAP BASIS training with introduction to HANA database administration.',
      features: ['Enterprise tools', 'Real SAP environment', 'Job placement support'],
      // icon: '⚡',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6',
    
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'development',
      platforms: ['Java', 'Firebase', 'React Native'],
      skills: ['Android', 'iOS', 'Cross-platform', 'Firebase'],
      duration: '3 months',
      level: 'Internship/ Course',
      description: 'Build native and cross-platform mobile applications for both Android and iOS.',
      features: ['App store deployment', 'Live projects', 'Portfolio development'],
      // icon: '📱',
      gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6'
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      category: 'development',
      platforms: ['HTML & CSS', 'JavaScript', 'React', 'Node.js'],
      skills: ['Frontend', 'Backend', 'Database', 'API Development'],
      duration: '3 months',
      level: 'Internship/ Course',
      description: 'Complete web development bootcamp covering frontend and backend technologies.',
      features: ['Full-stack projects', 'Modern frameworks', 'Industry best practices'],
      // icon: '💻',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      category: 'marketing',
      platforms: ['Google Ads', 'Social Media', 'WhatsApp Marketing'],
      skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
      duration: '2 months',
      level: 'Internship/ Course',
      description: 'Master digital marketing strategies across multiple platforms and channels.',
      features: ['Campaign management', 'Analytics training', 'Certification prep'],
      // icon: '📈',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6'
    },
    {
      id: 6,
      title: 'Graphic Designing',
      category: 'design',
      platforms: ['Canva Premium', 'Figma'],
      skills: ['Design Principles', 'Brand Identity', 'UI/UX', 'Print Design'],
      duration: '1 months',
      level: 'Internship/ Course',
      description: 'Create stunning designs for all industries using professional design tools.',
      features: ['Portfolio creation', 'Client projects', 'Design thinking'],
      // icon: '🎨',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      formUrl: 'https://forms.gle/WidzQAmDBqaesEbs6'
    }
  ];

  const whyChooseCenter = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Industry Expert Trainers',
      description: 'Learn from professionals with 10+ years of real industry experience',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-400" />,
      title: '95% Placement Rate',
      description: 'Outstanding track record of successful placements in top companies',
      color: 'bg-gradient-to-r from-blue-400 to-blue-600'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      title: 'Live Project Experience',
      description: 'Work on real-world projects with actual client requirements',
      color: 'bg-gradient-to-r from-green-400 to-emerald-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: 'Comprehensive Learning',
      description: 'From basics to advanced concepts with hands-on practical training',
      color: 'bg-gradient-to-r from-purple-400 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Small Batch Size',
      description: 'Maximum 15 students per batch for personalized attention',
      color: 'bg-gradient-to-r from-pink-400 to-rose-500'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: 'Flexible Timings',
      description: 'Weekend and weekday batches available to suit your schedule',
      color: 'bg-gradient-to-r from-indigo-400 to-indigo-600'
    }
  ];

  const handleRegisterClick = (course) => {
    setSelectedCourseForForm(course);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCourseForForm(null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      width: '100%',
      overflowX: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #1f2937 0%, #2563eb 50%, #14b8a6 100%)',
      color: 'white',
      padding: '32px 12px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    },
    headerOverlay: {
      position: 'absolute',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    headerContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0 8px'
    },
    headerText: {
      transform: isAnimated ? 'translateY(0)' : 'translateY(40px)',
      opacity: isAnimated ? 1 : 0,
      transition: 'all 1s ease-out'
    },
    mainTitle: {
      fontSize: 'clamp(1.8rem, 8vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '8px',
      lineHeight: '1.1',
      wordBreak: 'break-word'
    },
    subtitle: {
      fontSize: 'clamp(1.5rem, 6vw, 3.5rem)',
      fontWeight: 'bold',
      marginBottom: '16px',
      lineHeight: '1.1',
      wordBreak: 'break-word'
    },
    badge: {
      backgroundColor: '#fbbf24',
      color: 'black',
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: 'clamp(0.9rem, 3vw, 1.25rem)',
      fontWeight: 'bold',
      display: 'inline-block'
    },
    companyBadge: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '8px',
      textAlign: 'center'
    },
    companyTitle: {
      fontSize: '0.75rem',
      fontWeight: '600'
    },
    companySubtitle: {
      fontSize: '0.625rem'
    },
    mainContent: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '24px 12px',
      width: '100%',
      boxSizing: 'border-box'
    },
    coursesSection: {
      marginBottom: '48px'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '32px',
      padding: '0 8px'
    },
    sectionTitle: {
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      fontWeight: 'bold',
      color: '#803082'
    },
    sectionTitleText: {
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      fontWeight: 'bold',
      color: '#803082',
      margin: 0,
      wordBreak: 'break-word'
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    courseCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transform: isAnimated ? 'translateY(0)' : 'translateY(40px)',
      opacity: isAnimated ? 1 : 0,
      transition: 'all 0.5s ease, transform 0.3s ease',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '100%'
    },
    courseCardHover: {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
    },
    courseHeader: {
      padding: '20px',
      color: 'white',
      position: 'relative'
    },
    courseHeaderTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    courseIcon: {
      fontSize: '2rem'
    },
    courseDuration: {
      textAlign: 'right'
    },
    durationLabel: {
      fontSize: '0.75rem',
      opacity: 0.8
    },
    durationValue: {
      fontWeight: 'bold',
      fontSize: '0.9rem'
    },
    courseTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: 'bold',
      marginBottom: '8px',
      margin: '0 0 8px 0',
      wordBreak: 'break-word'
    },
    courseDescription: {
      fontSize: '0.85rem',
      opacity: 0.9,
      margin: 0,
      lineHeight: '1.4'
    },
    courseBody: {
      padding: '20px'
    },
    courseSection: {
      marginBottom: '16px'
    },
    courseSectionTitle: {
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px',
      fontSize: '0.85rem'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    },
    tag: {
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    platformTag: {
      backgroundColor: '#f3f4f6',
      color: '#374151'
    },
    skillTag: {
      backgroundColor: '#dbeafe',
      color: '#1d4ed8'
    },
    moreTag: {
      backgroundColor: '#e5e7eb',
      color: '#6b7280'
    },
    courseFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px'
    },
    levelTag: {
      fontSize: '0.75rem',
      color: '#059669',
      backgroundColor: '#d1fae5',
      padding: '4px 8px',
      borderRadius: '9999px'
    },
    learnMoreBtn: {
      color: '#2563eb',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      fontSize: '0.85rem'
    },
    // Why Choose Center Section
    whyChooseCenterSection: {
      marginBottom: '48px'
    },
    whyChooseCenterGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    whyChooseCenterCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '100%'
    },
    whyChooseCenterCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
    },
    whyChooseCenterIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    },
    whyChooseCenterTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#1f2937',
      margin: '0 0 12px 0',
      wordBreak: 'break-word'
    },
    whyChooseCenterDescription: {
      color: '#6b7280',
      lineHeight: '1.5',
      margin: 0,
      fontSize: '0.9rem'
    },
    modal: {
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      maxWidth: '90vw',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    modalHeader: {
      padding: '20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    },
    modalHeaderContent: {
      flex: 1,
      minWidth: '0'
    },
    modalIcon: {
      fontSize: '2rem',
      marginBottom: '8px'
    },
    modalTitle: {
      fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
      fontWeight: 'bold',
      marginBottom: '8px',
      margin: '0 0 8px 0',
      wordBreak: 'break-word'
    },
    modalDescription: {
      fontSize: 'clamp(0.9rem, 3vw, 1.125rem)',
      opacity: 0.9,
      margin: 0,
      lineHeight: '1.4'
    },
    closeBtn: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
      marginLeft: '12px'
    },
    closeBtnHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    modalBody: {
      padding: '24px'
    },
    modalGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    modalSection: {
      marginBottom: '20px'
    },
    modalSectionTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: 'bold',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 12px 0',
      wordBreak: 'break-word'
    },
    modalSectionIcon: {
      marginRight: '8px',
      flexShrink: 0
    },
    detailsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    detailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '4px'
    },
    detailLabel: {
      color: '#6b7280',
      fontSize: '0.9rem'
    },
    detailValue: {
      fontWeight: '600',
      fontSize: '0.9rem'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9rem'
    },
    skillIcon: {
      color: '#10b981',
      marginRight: '8px',
      flexShrink: 0
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9rem'
    },
    featureIcon: {
      color: '#10b981',
      marginRight: '8px',
      flexShrink: 0
    },
    modalFooter: {
      marginTop: '24px',
      textAlign: 'center'
    },
    registerCourseBtn: {
      background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 100%)',
      color: 'white',
      fontWeight: 'bold',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: 'clamp(0.9rem, 3vw, 1rem)'
    },
    registerCourseBtnHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 20px rgba(147, 51, 234, 0.3)'
    },
    
    // Form Modal Styles
    formModal: {
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      zIndex: 1001
    },
    formModalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '90vw',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
    },
    formModalHeader: {
      background: selectedCourseForForm ? selectedCourseForForm.gradient : 'linear-gradient(135deg, #9333ea 0%, #2563eb 100%)',
      color: 'white',
      padding: '16px 20px',
      borderRadius: '12px 12px 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    formModalHeaderContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: '0',
      flex: 1
    },
    formModalIcon: {
      fontSize: '1.5rem',
      flexShrink: 0
    },
    formModalTitle: {
      fontSize: 'clamp(1rem, 4vw, 1.5rem)',
      fontWeight: 'bold',
      margin: 0,
      wordBreak: 'break-word'
    },
    formCloseBtn: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
      marginLeft: '8px'
    },
    formIframe: {
      flex: 1,
      border: 'none',
      borderRadius: '0 0 12px 12px',
      width: '100%'
    }
  };

  // Additional mobile styles
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    styles.coursesGrid.gridTemplateColumns = '1fr';
    styles.whyChooseCenterGrid.gridTemplateColumns = '1fr';
    styles.modalGrid.gridTemplateColumns = '1fr';
    styles.formModalContent.height = '95vh';
    styles.formModalContent.maxWidth = '95vw';
    styles.modalContent.maxWidth = '95vw';
    styles.courseHeader.padding = '16px';
    styles.courseBody.padding = '16px';
    styles.whyChooseCenterCard.padding = '20px';
    styles.modalBody.padding = '20px';
    styles.mainContent.padding = '20px 8px';
    styles.header.padding = '24px 8px';
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerContent}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />}
            aria-label="breadcrumb"
            sx={{ justifyContent: 'center', display: 'flex', mb: 1 }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/career')}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff' }}
            >
              <HomeIcon sx={{ mr: 1 }} fontSize="inherit" />
              Career
            </Link>
            <Typography
              color="#fff"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <WebIcon sx={{ mr: 1 }} fontSize="inherit" />
              Intership & Courses
            </Typography>
          </Breadcrumbs>
          <div style={styles.headerText}>
            <h1 style={styles.mainTitle}>
              OPEN INTERNSHIPS
            </h1>
            <h2 style={styles.subtitle}>
              & COURSES
            </h2>
            <div style={styles.badge}>
              Exclusive for Students!
            </div>
          </div>
        </div>
        <div style={styles.companyBadge}>
          <div style={styles.companyTitle}>VSoft</div>
          <div style={styles.companySubtitle}>SOLUTIONS</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Why Choose Our Center Section */}
        <div style={styles.whyChooseCenterSection}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitle}>
              <h3 style={styles.sectionTitleText}>WHY CHOOSE US AS YOUR LEARNING CENTER?</h3>
            </div>
          </div>

          <div style={styles.whyChooseCenterGrid}>
            {whyChooseCenter.map((item, index) => (
              <div
                key={index}
                style={styles.whyChooseCenterCard}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.whyChooseCenterCardHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ ...styles.whyChooseCenterIcon, background: item.color }}>
                  {item.icon}
                </div>
                <h4 style={styles.whyChooseCenterTitle}>{item.title}</h4>
                <p style={styles.whyChooseCenterDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div style={styles.coursesSection}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitle}>
              <h3 style={styles.sectionTitleText}>COURSES WE OFFER</h3>
            </div>
          </div>

          <div style={styles.coursesGrid}>
            {courses.map((course, index) => (
              <div
                key={course.id}
                style={{
                  ...styles.courseCard,
                  animationDelay: `${index * 150}ms`
                }}
                onClick={() => setSelectedCourse(course)}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.courseCardHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ ...styles.courseHeader, background: course.gradient }}>
                  <div style={styles.courseHeaderTop}>
                    {/* <div style={styles.courseIcon}>{course.icon}</div> */}
                    <div style={styles.courseDuration}>
                      <div style={styles.durationLabel}>Duration</div>
                      <div style={styles.durationValue}>{course.duration}</div>
                    </div>
                  </div>
                  <h3 style={styles.courseTitle}>{course.title}</h3>
                  <p style={styles.courseDescription}>{course.description}</p>
                </div>

                <div style={styles.courseBody}>
                  <div style={styles.courseSection}>
                    <h4 style={styles.courseSectionTitle}>Technologies:</h4>
                    <div style={styles.tagsContainer}>
                      {course.platforms.slice(0, 3).map((platform, i) => (
                        <span key={i} style={{ ...styles.tag, ...styles.platformTag }}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={styles.courseSection}>
                    <h4 style={styles.courseSectionTitle}>Key Skills:</h4>
                    <div style={styles.tagsContainer}>
                      {course.skills.slice(0, 2).map((skill, i) => (
                        <span key={i} style={{ ...styles.tag, ...styles.skillTag }}>
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 2 && (
                        <span style={{ ...styles.tag, ...styles.moreTag }}>
                          +{course.skills.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={styles.courseFooter}>
                    <span style={styles.levelTag}>
                      {course.level}
                    </span>
                    <a href="#" style={styles.learnMoreBtn}>
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={{ ...styles.modalHeader, background: selectedCourse.gradient }}>
              <div style={styles.modalHeaderContent}>
                <div style={styles.modalIcon}>{selectedCourse.icon}</div>
                <h2 style={styles.modalTitle}>{selectedCourse.title}</h2>
                <p style={styles.modalDescription}>{selectedCourse.description}</p>
              </div>
              <button
                style={styles.closeBtn}
                onClick={() => setSelectedCourse(null)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                ✕
              </button>
            </div>

            <div style={styles.modalBody}>
              <div style={styles.modalGrid}>
                <div>
                  <div style={styles.modalSection}>
                    <h3 style={styles.modalSectionTitle}>
                      <Award size={20} style={styles.modalSectionIcon} />
                      Course Details
                    </h3>
                    <div style={styles.detailsGrid}>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Level:</span>
                        <span style={styles.detailValue}>{selectedCourse.level}</span>
                      </div>
                    </div>

                    <h4 style={{ ...styles.modalSectionTitle, marginTop: '24px' }}>Technologies Covered:</h4>
                    <div style={styles.tagsContainer}>
                      {selectedCourse.platforms.map((platform, i) => (
                        <span key={i} style={{ ...styles.tag, ...styles.skillTag, padding: '8px 16px' }}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div style={styles.modalSection}>
                    <h3 style={styles.modalSectionTitle}>
                      <CheckCircle size={20} style={styles.modalSectionIcon} />
                      What You'll Learn
                    </h3>
                    <div style={styles.skillsList}>
                      {selectedCourse.skills.map((skill, i) => (
                        <div key={i} style={styles.skillItem}>
                          <CheckCircle size={16} style={styles.skillIcon} />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <h4 style={{ ...styles.modalSectionTitle, marginTop: '24px' }}>Course Features:</h4>
                    <div style={styles.featuresList}>
                      {selectedCourse.features.map((feature, i) => (
                        <div key={i} style={styles.featureItem}>
                          <CheckCircle size={16} style={styles.featureIcon} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.modalFooter}>
                <button
                  style={styles.registerCourseBtn}
                  onClick={() => {
                    if (selectedCourse && selectedCourse.formUrl) {
                      window.open(selectedCourse.formUrl, '_blank'); // Opens in new tab
                    }
                  }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.registerCourseBtnHover);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Register for This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internship;