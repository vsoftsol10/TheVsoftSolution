import React, { useState, useEffect } from 'react';
import {  Breadcrumbs, Link, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './JobSlide.css';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const JobSlide = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationTerm, setLocationTerm] = useState('');
    const [isAnimated, setIsAnimated] = useState(false);
     const navigate = useNavigate();

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    const categories = [
        { id: 'all', name: 'All Jobs'},
        { id: 'developer', name: 'Developer'},
        { id: 'designer', name: 'Designer'},
        { id: 'marketing', name: 'Marketing'}
    ];

    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            location: 'Tirunelveli, Tamil Nadu',
            type: 'Full-time',
            experience: '0.6-2 years',
            category: 'developer',
            featured: true,
            skills: ['HTML', 'CSS', 'JavaScript','React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MUI'],
            description: 'Join our dynamic team to build cutting-edge user interfaces using modern React technologies. You\'ll work on high-impact projects that reach millions of users worldwide.',
            requirements: [
                '0.6+ years of React development experience',
                'Strong knowledge of TypeScript and modern JavaScript',
                'Experience with responsive design and CSS frameworks',
                'Understanding of REST APIs and JWT concetps',
            ],
            googleFormUrl: 'https://forms.gle/T2hYSTnVSNVgj9cB9'
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            location: 'Tirunelveli, Tamil Nadu',
            type: 'Full-time',
            experience: '1-3 years',
            category: 'designer',
            featured: false,
            skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
            description: 'Create beautiful and intuitive user experiences for our diverse range of digital products. Work closely with developers and product managers to bring designs to life.',
            requirements: [
                '1+ years of UI/UX design experience',
                'Proficiency in Figma and Adobe Creative Suite',
                'Strong portfolio showcasing design process',
                'Experience with user research and testing'
            ],
            googleFormUrl: 'https://forms.gle/XSxAm4Ph91WTCHA99'
        },
        {
            id: 3,
            title: 'Digital Marketing Manager',
            location: 'Tirunelveli, Tamil Nadu',
            type: 'Full-time',
            experience: '0.6-2 years',
            category: 'marketing',
            featured: false,
            skills: ['SEO', 'Google Ads', 'Analytics', 'Content Strategy'],
            description: 'Drive our digital marketing strategy across multiple channels. Analyze performance metrics and optimize campaigns for maximum ROI.',
            requirements: [
                'Maximum 1+ years of digital marketing experience',
                'Google Ads and Analytics certification preferred',
                'Strong analytical and data-driven mindset',
                'Experience with marketing automation tools'
            ],
            googleFormUrl: 'https://forms.gle/NNJiqUNVuY6ZvWKNA'
        },
        {
            id: 4,
            title: 'Mobile App Developer',
            location: 'Tirunelveli, Tamil Nadu',
            type: 'Full-time',
            experience: '1-2 years',
            category: 'developer',
            featured: false,
            skills: ['Flutter', 'React Native', 'iOS', 'Android', 'Firebase'],
            description: 'Develop cross-platform mobile applications that provide exceptional user experiences. Work with latest mobile technologies and frameworks.',
            requirements: [
                '1+ years of mobile development experience',
                'Experience with React Native or Flutter',
                'Knowledge of native iOS/Android development',
                'Understanding of mobile app deployment process'
            ],
            googleFormUrl: 'https://forms.gle/ETwRPACStn4oa7bf7'
        }
    ];

    const filteredJobs = jobs.filter(job => {
        const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesLocation = !locationTerm || job.location.toLowerCase().includes(locationTerm.toLowerCase());
        return matchesCategory && matchesSearch && matchesLocation;
    });

    const handleApply = (job) => {
        window.open(job.googleFormUrl, '_blank');
    };

    return (
        <div className="job-slide">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
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
                              Job Portal
                            </Typography>
                          </Breadcrumbs>
                    <div className={isAnimated ? 'fade-in' : 'fade-out'}>
                        <h1 className="hero-title">
                            Find Your Dream
                        </h1>
                        <h1 className="hero-title-gradient">
                            Career Today
                        </h1>
                        <p className="hero-description">
                            Discover thousands of job opportunities from top companies around the world. Your next career move starts here.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="content-grid">
                    {/* Sidebar - Categories */}
                    <div>
                        <div className="sidebar">
                            <div className="sidebar-header">
                                <h3 className="sidebar-title">Job Categories</h3>
                            </div>
                            <div className="category-list">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        className={`category-button ${
                                            activeCategory === category.id ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        <span className="category-button-text">{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="jobs-section">
                        <div className="jobs-header">
                            <h2 className="jobs-title">
                                {filteredJobs.length} Jobs Found
                            </h2>
                            <p className="jobs-subtitle">
                                {activeCategory === 'all' ? 'All categories' : categories.find(c => c.id === activeCategory)?.name}
                            </p>
                        </div>

                        <div className="jobs-grid">
                            {filteredJobs.map((job, index) => (
                                <div
                                    key={job.id}
                                    className={`job-card ${job.featured ? 'featured' : ''} ${isAnimated ? 'animate-in' : ''}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setSelectedJob(job)}
                                >
                                    <div className="job-header">
                                        <h3 className="job-title">{job.title}</h3>
                                        <p className="job-location">
                                             {job.location}
                                        </p>
                                        <div className="job-meta">
                                            <span>{job.experience}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>

                                    <p className="job-description">{job.description}</p>

                                    <div className="job-skills">
                                        {job.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                        {job.skills.length > 3 && (
                                            <span className="skill-tag more">
                                                +{job.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="job-footer">
                                        <div>
                                            <span className="job-type-tag">
                                                {job.type}
                                            </span>
                                        </div>
                                        <button
                                            className="apply-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleApply(job);
                                            }}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div 
                    className="modal-overlay"
                    onClick={() => setSelectedJob(null)}
                >
                    <div 
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <div>
                                <h2 className="modal-title">{selectedJob.title}</h2>
                                <p className="modal-location"> {selectedJob.location}</p>
                            </div>
                            <button 
                                className="modal-close"
                                onClick={() => setSelectedJob(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-main">
                                <div className="section">
                                    <h3 className="section-title">Job Description</h3>
                                    <p>{selectedJob.description}</p>
                                </div>

                                <div className="section">
                                    <h3 className="section-title"> Requirements</h3>
                                    <ul className="requirements-list">
                                        {selectedJob.requirements.map((req, index) => (
                                            <li key={index} className="requirement-item">
                                                <span className="requirement-icon">✅</span>
                                                <span className="requirement-text">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="section">
                                    <h3 className="section-title"> Required Skills</h3>
                                    <div className="modal-skills">
                                        {selectedJob.skills.map((skill, index) => (
                                            <span key={index} className="modal-skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-sidebar">
                                <div className="modal-info-card">
                                    <div className="info-item">
                                        <span className="info-label"> Experience Level</span>
                                        <p className="info-value">{selectedJob.experience}</p>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label"> Employment Type</span>
                                        <p className="info-value">{selectedJob.type}</p>
                                    </div>

                                    <button
                                        className="modal-apply-button"
                                        onClick={() => handleApply(selectedJob)}
                                    >
                                        Apply for this job
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobSlide;