import { Link } from 'react-router-dom';
import { Factory, Phone, MapPin, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/clients', label: 'Clients' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="h-6 w-6 text-blue-400" />
              <div>
                <div className="text-white font-bold text-lg">MetalXCorporation</div>
                <div className="text-gray-400 text-xs">(OPC) PRIVATE LIMITED</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A GST registered industrial scrap procurement company dealing in both ferrous and non-ferrous scrap materials.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  B-807 Harshit Landmark<br />
                  Heerapur, Raipur<br />
                  Chhattisgarh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+917581915555" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  +91 7581915555
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-400" />
                <a
                  href="https://wa.me/918607978501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                >
                  WhatsApp: +91 8607978501
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:metalxcorp@gmail.com" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  metalxcorp@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            GSTIN: <span className="text-gray-300 font-mono">22AATCM1200E1Z1</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 MetalXCorporation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
