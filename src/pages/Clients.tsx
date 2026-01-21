import { Building2, CheckCircle } from 'lucide-react';
import { useDivision } from '../context/DivisionContext';

export default function Clients() {
  const { division } = useDivision();

  const scrapClients = [
    'Oriental Structural Engineers Private Limited',
    'Orissa Sponge Iron & Steel Limited',
    'Phil Steel & Power Limited',
    'Yashodanandan Ispat Pvt. Ltd.',
    'Iswar TMT Pvt. Ltd.',
  ];

  const wheelsClients = [
    'Leading Mining Equipment Manufacturers',
    'Heavy Machinery Construction Companies',
    'Railway Equipment Suppliers',
    'Industrial Vehicle Manufacturers',
    'Automotive Component Distributors',
  ];

  const clients = division === 'scrap' ? scrapClients : wheelsClients;

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Clients</h1>
          <p className="text-xl text-gray-300">
            Trusted partnerships across industries
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {division === 'scrap' ? 'Client Associations' : 'Industry Partners'}
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {division === 'scrap'
                ? 'MetalXCorporation (OPC) Private Limited works with a diversified client base including steel manufacturers, rolling mills, authorized scrap traders, and industrial buyers for the supply of ferrous and non-ferrous scrap materials.'
                : 'Our Wheels & Axle Division serves diverse industries with premium quality components and reliable manufacturing solutions for critical applications.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all flex items-start space-x-4"
              >
                <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <Building2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400">Active Partnerships</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <Building2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                {division === 'scrap' ? '5' : '3'}
              </div>
              <p className="text-gray-400">States Coverage</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <Building2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become Our Partner
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We're committed to building long-term, reliable partnerships with organizations that value compliance, transparency, and professional service.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
