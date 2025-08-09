import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Home',
      '/home': 'Home',
      '/about': 'About Us',
      '/contact': 'Contact',
      '/services/website-development': 'Website Development',
      '/services/app-development': 'App Development',
      '/services/digital-marketing': 'Digital Marketing',
      '/services/wordpress-development': 'WordPress Development',
      '/services/ui-ux-design': 'UI/UX Design',
      '/career': 'Careers',
      '/culture': 'Our Culture',
      '/jobportal': 'Job Portal',
      '/internship': 'Internship',
      '/stepup': 'StepUp Program',
      '/stepupsap': 'StepUp SAP',
      '/product': 'Our Products',
    };

    const title = routeTitles[location.pathname] || 'VSoft';
    document.title = `${title} | VSoft`;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
