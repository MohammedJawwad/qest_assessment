import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export const Footer = () => {
  const footerLinks = {
    Company: ['About us', 'Contact us', 'Careers'],
    'Business Size': ['Entrepreneurs', 'SMBs', 'Growth Business', 'Household Services', 'Enterprise'],
    'Business Type': ['Health & Wellness', 'Sports', 'Learning Activities', 'Household Services', 'Miscellaneous'],
    Download: [
      { name: 'Business App', type: 'apple' },
      { name: 'Business App', type: 'android' },
      { name: 'User App', type: 'apple' },
      { name: 'User App', type: 'android' }
    ],
    Legal: ['Privacy Policy', 'Terms & Conditions', 'Return Policy'],
    'Contact us': ['support@Rmax.com', '+91-8904907449']
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    {typeof link === 'string' ? (
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    ) : (
                      <a href="#" className="flex items-center hover:text-white transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Copyright, All Right Reserved@RMax</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">Github</span>
                <img src={github} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">Instagram</span>
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};