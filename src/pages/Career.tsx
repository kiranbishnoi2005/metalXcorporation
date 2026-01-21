import { useState, FormEvent } from 'react';
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    position: '',
    experience: '',
    currentCompany: '',
    expectedSalary: '',
    resumeLink: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '918607978501';
    const message = `*Job Application*\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\nPosition: ${formData.position}\nExperience: ${formData.experience} years\nCurrent Company: ${formData.currentCompany || 'N/A'}\nExpected Salary: ${formData.expectedSalary}\nResume Link: ${formData.resumeLink}\n\nMessage:\n${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Career Opportunities</h1>
          <p className="text-xl text-gray-300">
            Join our team and build your future with us
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              MetalXCorporation offers exciting opportunities for professionals looking to grow in the industrial sector with a compliance-driven and professional organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: Users,
                title: 'Professional Growth',
                description: 'Opportunities for career advancement and skill development',
              },
              {
                icon: Award,
                title: 'Industry Exposure',
                description: 'Work with leading industrial clients and projects',
              },
              {
                icon: TrendingUp,
                title: 'Competitive Benefits',
                description: 'Attractive compensation and benefits package',
              },
              {
                icon: Briefcase,
                title: 'Work Culture',
                description: 'Professional environment with hands-on leadership',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                  <Icon className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apply Now</h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you via WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                  Position Applying For *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  Experience (in years) *
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Company (Optional)
                </label>
                <input
                  type="text"
                  id="currentCompany"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-300 mb-2">
                  Expected Salary *
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  name="expectedSalary"
                  required
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-300 mb-2">
                Resume Link (Google Drive or URL) *
              </label>
              <input
                type="url"
                id="resumeLink"
                name="resumeLink"
                required
                placeholder="https://drive.google.com/..."
                value={formData.resumeLink}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Cover Note / Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded transition-all hover:scale-105"
            >
              Submit Application via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
