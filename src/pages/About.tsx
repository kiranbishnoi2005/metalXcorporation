import { Shield, Target, Award, CheckCircle } from 'lucide-react';
import { useDivision } from '../context/DivisionContext';

export default function About() {
  const { division } = useDivision();

  const scrapValues = [
    {
      icon: Shield,
      title: 'Compliance Driven',
      description: 'Strict adherence to statutory and site safety norms with proper documentation',
    },
    {
      icon: Target,
      title: 'Transparent Approach',
      description: 'Accurate weight measurement, proper valuation, and prompt payment',
    },
    {
      icon: Award,
      title: 'Reliable Partnership',
      description: 'Building long-term scrap disposal partnerships with public and private sectors',
    },
  ];

  const wheelsValues = [
    {
      icon: Shield,
      title: 'Quality Manufacturing',
      description: 'Premium quality wheels and axles manufactured to industry standards',
    },
    {
      icon: Target,
      title: 'Industrial Solutions',
      description: 'Comprehensive solutions for heavy machinery and automotive applications',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Advanced manufacturing capabilities with precision engineering',
    },
  ];

  const values = division === 'scrap' ? scrapValues : wheelsValues;

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: division === 'scrap'
            ? 'url(https://images.pexels.com/photos/1005764/pexels-photo-1005764.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            : 'url(https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            {division === 'scrap' ? 'Scrap Division' : 'Wheels & Axle Division'}
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {division === 'scrap'
                  ? 'MetalXCorporation (OPC) Private Limited'
                  : 'Wheels & Axle Division'}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {division === 'scrap' ? (
                  <>
                    <p>
                      MetalXCorporation (OPC) Private Limited is a GST registered industrial scrap procurement company dealing in both ferrous and non-ferrous scrap materials generated from mines, power plants, industrial units, and construction projects.
                    </p>
                    <p>
                      Headquartered in Raipur, a major steel hub, the company operates across Odisha and central India. We follow a compliance-driven and transparent approach, ensuring timely lifting, accurate weight measurement, proper documentation, and prompt payment, while strictly adhering to statutory and site safety norms.
                    </p>
                    <p>
                      Our objective is to build long-term and reliable scrap disposal partnerships with public and private sector organizations.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The Wheels & Axle Division of MetalXCorporation specializes in the manufacturing and supply of high-quality industrial wheels, axles, and related components for heavy machinery and automotive applications.
                    </p>
                    <p>
                      With state-of-the-art manufacturing facilities and a commitment to precision engineering, we deliver products that meet stringent industry standards and client specifications.
                    </p>
                    <p>
                      Our division serves diverse industries including mining, construction, transportation, and heavy equipment manufacturing, providing reliable solutions for critical applications.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: division === 'scrap'
                  ? 'url(https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800)'
                  : 'url(https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all"
                >
                  <Icon className="h-12 w-12 text-blue-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {division === 'scrap' && (
        <section className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Ferrous and non-ferrous scrap procurement',
                'Site assessment and valuation',
                'Safe lifting and transportation',
                'Accurate weighing systems',
                'Statutory documentation',
                'Compliance with safety norms',
                'Timely payment processing',
                'Long-term partnerships',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-black p-4 rounded border border-gray-800">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
