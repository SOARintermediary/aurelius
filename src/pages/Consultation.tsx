import { useState } from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        inquiryType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6">Begin Your Journey with AURELIUS</h1>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>Every relationship begins privately.</p>
              <p>
                Please share a few details, and a member of our advisory team will connect with you
                to discuss your goals and curate suitable opportunities — discreetly and
                confidentially.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-[#C9A96E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm text-neutral-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-[#C9A96E] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="home-purchase">Home Purchase</option>
                    <option value="investment">Investment</option>
                    <option value="residency">Residency</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-[#C9A96E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? 'Submitted' : 'Submit Privately'}
                </button>

                {submitted && (
                  <p className="text-center text-[#C9A96E] text-sm">
                    Thank you for your inquiry. We will contact you shortly.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 p-8">
                <h2 className="text-2xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-[#C9A96E] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">Email</p>
                      <a
                        href="mailto:contact@aureliushouse.com"
                        className="text-neutral-900 hover:text-[#C9A96E] transition-colors"
                      >
                        contact@aureliushouse.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Globe className="w-5 h-5 text-[#C9A96E] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">Website</p>
                      <a
                        href="https://www.aureliushouse.com"
                        className="text-neutral-900 hover:text-[#C9A96E] transition-colors"
                      >
                        www.aureliushouse.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-[#C9A96E] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">Locations</p>
                      <p className="text-neutral-900">Dubai • UAE • Greece</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-[#C9A96E] pl-6">
                <h3 className="text-xl mb-4">What to Expect</h3>
                <div className="space-y-3 text-sm text-neutral-700">
                  <p>
                    <span className="font-medium text-neutral-900">1. Initial Contact:</span> A
                    member of our team will reach out within 24-48 hours.
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">2. Private Consultation:</span>{' '}
                    We'll discuss your goals, preferences, and vision in detail.
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">3. Curated Opportunities:</span>{' '}
                    Receive tailored property recommendations that match your criteria.
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">4. Ongoing Support:</span> We
                    guide you through every step, from viewing to acquisition and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
