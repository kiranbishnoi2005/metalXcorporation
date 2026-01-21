import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import { useDivision } from '../context/DivisionContext';

export default function Home() {
  const { division } = useDivision();

  const handleSendInquiry = () => {
    const whatsappNumber = '918607978501';
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: division === 'scrap'
              ? 'url(https://images.pexels.com/photos/1267337/pexels-photo-1267337.jpeg?auto=compress&cs=tinysrgb&w=1920)'
              : 'url(https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="h-20 w-20 text-blue-400 mx-auto mb-6" strokeWidth={1.5} />

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            MetalXCorporation
          </h1>

          <div className="text-lg md:text-xl text-gray-300 mb-2">
            (OPC) PRIVATE LIMITED
          </div>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8"></div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {division === 'scrap'
              ? 'GST registered industrial scrap procurement company dealing in ferrous and non-ferrous materials'
              : 'Industrial manufacturing solutions for wheels, axles, and heavy machinery components'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-all hover:scale-105 space-x-2"
            >
              <span>Explore Divisions</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <button
              onClick={handleSendInquiry}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-blue-400 text-white font-semibold rounded transition-all hover:scale-105"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
