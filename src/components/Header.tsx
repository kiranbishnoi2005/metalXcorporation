import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import { useDivision, DivisionType } from '../context/DivisionContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { division, setDivision, divisionName } = useDivision();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: division === 'scrap' ? 'Trading' : 'Trading' },
    { path: '/team', label: 'Team' },
    { path: '/clients', label: 'Clients' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleDivision = () => {
    setDivision(division === 'scrap' ? 'wheels' : 'scrap');
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Factory className="h-8 w-8 text-blue-400" strokeWidth={1.5} />
            <div>
              <div className="text-white font-bold text-xl tracking-tight">MetalXCorporation</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center bg-gray-900 rounded-full p-1 border border-gray-700">
              <button
                onClick={() => setDivision('scrap')}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                  division === 'scrap'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                MetalX
              </button>
              <button
                onClick={() => setDivision('wheels')}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                  division === 'wheels'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Wheels Axle
              </button>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <div className="pb-3 mb-3 border-b border-gray-800">
              <div className="text-xs text-gray-400 mb-2">Select Division</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setDivision('scrap')}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded transition-all ${
                    division === 'scrap'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  MetalX
                </button>
                <button
                  onClick={() => setDivision('wheels')}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded transition-all ${
                    division === 'wheels'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Wheels Axle
                </button>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded ${
                  isActive(link.path)
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
