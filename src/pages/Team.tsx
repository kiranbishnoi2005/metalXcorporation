import { User } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Waqar Ahmad',
      position: 'Director',
      description: 'Leading the company with strategic vision and hands-on management expertise in industrial scrap procurement and compliance-driven operations.',
    },
    {
      name: 'Faiz Ahmed',
      position: 'Business Developer',
      description: 'Driving business growth through strategic partnerships and client relationship management across industrial sectors.',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300">
            Experienced leadership driving industrial excellence
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              MetalXCorporation (OPC) Private Limited is led by a focused and hands-on management team with experience in industrial scrap procurement, steel industry coordination, and compliance-driven operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="h-16 w-16 text-gray-400" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-blue-400 font-semibold mb-4">{member.position}</div>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            We're always looking for talented professionals who share our commitment to excellence, compliance, and building long-term partnerships in the industrial sector.
          </p>
          <a
            href="/career"
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-all hover:scale-105"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
