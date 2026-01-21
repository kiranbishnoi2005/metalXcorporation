import { Package, Truck, Scale, FileCheck, Cog, Settings } from 'lucide-react';
import { useDivision } from '../context/DivisionContext';
import ProductGallery, { Product } from '../components/ProductGallery';

export default function Services() {
  const { division } = useDivision();

  const scrapServices = [
    {
      icon: Package,
      title: 'Scrap Procurement',
      description: 'Comprehensive procurement of ferrous and non-ferrous scrap materials from various industrial sources including mines, power plants, and construction sites.',
    },
    {
      icon: FileCheck,
      title: 'Site Assessment',
      description: 'Professional site inspection and evaluation services to determine scrap quantity, quality, and optimal lifting procedures.',
    },
    {
      icon: Scale,
      title: 'Accurate Valuation',
      description: 'Fair and transparent valuation of scrap materials using industry-standard pricing with accurate weighing systems.',
    },
    {
      icon: Truck,
      title: 'Safe Transportation',
      description: 'Professional lifting and transportation services with proper equipment and trained personnel ensuring site safety compliance.',
    },
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Complete statutory documentation including GST compliance, weight certificates, and proper paperwork for audit trails.',
    },
    {
      icon: Settings,
      title: 'Compliance Management',
      description: 'Strict adherence to environmental regulations, safety norms, and statutory requirements for all operations.',
    },
  ];

  const wheelsProducts = [
    {
      icon: Cog,
      title: 'Industrial Wheels',
      description: 'Heavy-duty wheels designed for mining equipment, cranes, and industrial machinery with superior load-bearing capacity.',
    },
    {
      icon: Settings,
      title: 'Axle Assemblies',
      description: 'Precision-engineered axle assemblies for heavy vehicles and industrial equipment with enhanced durability.',
    },
    {
      icon: Package,
      title: 'Custom Components',
      description: 'Customized manufacturing solutions for specialized requirements in automotive and heavy machinery applications.',
    },
    {
      icon: Truck,
      title: 'Railway Components',
      description: 'Wheels and axles for railway applications manufactured to meet strict railway safety and performance standards.',
    },
    {
      icon: Scale,
      title: 'Mining Equipment Parts',
      description: 'Robust components designed for extreme mining conditions with enhanced resistance to wear and tear.',
    },
    {
      icon: FileCheck,
      title: 'Quality Assurance',
      description: 'Comprehensive quality testing and certification ensuring all products meet international standards and specifications.',
    },
  ];

  const scrapProductGallery: Product[] = [
    {
      name: 'Ferrous Scrap',
      description: 'High-quality ferrous scrap including steel, iron, and cast iron materials from industrial and construction sources.',
      image: 'https://images.pexels.com/photos/1267337/pexels-photo-1267337.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Non-Ferrous Scrap',
      description: 'Premium non-ferrous metals including copper, aluminum, brass, and other valuable metals for recycling.',
      image: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Industrial Waste',
      description: 'Processed industrial waste and by-products from manufacturing units and power plants.',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Construction Debris',
      description: 'Sorted construction waste including metal, concrete, and recyclable materials from demolition projects.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mining Residue',
      description: 'Scrap materials and waste products generated from mining operations and mineral extraction.',
      image: 'https://images.pexels.com/photos/162568/coal-shovel-mining-coal-mining-162568.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Steel Mill Waste',
      description: 'Certified scrap from steel manufacturing including mill scale, turnings, and rejected batches.',
      image: 'https://images.pexels.com/photos/1008572/pexels-photo-1008572.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const wheelsProductGallery: Product[] = [
    {
      name: 'Industrial Wheels',
      description: 'Heavy-duty cast steel and forged wheels for mining equipment, cranes, and industrial machinery.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Axle Assemblies',
      description: 'Precision-engineered axle shafts and assemblies for heavy vehicles and industrial equipment.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Railway Wheels',
      description: 'Specialized wheels manufactured to strict railway standards for freight and passenger trains.',
      image: 'https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mining Wheels',
      description: 'Robust wheels designed for extreme mining conditions with enhanced wear resistance.',
      image: 'https://images.pexels.com/photos/70577/pexels-photo-70577.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Automotive Axles',
      description: 'Precision axle shafts for heavy commercial vehicles and specialized automotive applications.',
      image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Forged Components',
      description: 'Custom-forged wheels and axle components for specialized industrial machinery applications.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const services = division === 'scrap' ? scrapServices : wheelsProducts;
  const title = division === 'scrap' ? 'Our Services' : 'Our Products';
  const productGallery = division === 'scrap' ? scrapProductGallery : wheelsProductGallery;

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: division === 'scrap'
            ? 'url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            : 'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-300">
            {division === 'scrap'
              ? 'Comprehensive industrial scrap solutions'
              : 'Quality manufacturing for industrial applications'}
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all group"
                >
                  <div className="bg-gray-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                    <Icon className="h-8 w-8 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {division === 'scrap' && (
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Mining Operations', image: 'https://images.pexels.com/photos/162568/coal-shovel-mining-coal-mining-162568.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Power Plants', image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Steel Manufacturing', image: 'https://images.pexels.com/photos/1267337/pexels-photo-1267337.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Construction', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400' },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden group"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">{industry.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {division === 'wheels' && (
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industries Served
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Mining Equipment', image: 'https://images.pexels.com/photos/70577/pexels-photo-70577.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Heavy Machinery', image: 'https://images.pexels.com/photos/1311594/pexels-photo-1311594.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Railway Systems', image: 'https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { title: 'Automotive', image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=400' },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden group"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4">{industry.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProductGallery
        products={productGallery}
        title={division === 'scrap' ? 'Our Scrap Products' : 'Our Product Line'}
      />
    </div>
  );
}
