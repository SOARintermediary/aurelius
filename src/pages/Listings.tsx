import { Lock } from 'lucide-react';

interface ListingsProps {
  onNavigate: (page: string) => void;
}

export default function Listings({ onNavigate }: ListingsProps) {
  const properties = [
    {
      id: 1,
      image: '/athensvilla.jpg',
      title: 'Luxury Villa - Athens Riviera',
      location: 'Glyfada, Athens, Greece',
    },
    {
      id: 2,
      image: '/Al-Barari-Villa-Amaia copy.jpg',
      title: 'Al Barari Luxury Estate',
      location: 'Dubai, UAE',
    },
    {
      id: 3,
      image: '/Frond-M-Palm-Jumeirah-Dubai-Dubai-United-Arab-Emirates-24.jpg',
      title: 'Waterfront Residence',
      location: 'Dubai Marina, UAE',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6">Private Access. Global Reach.</h1>
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                Our portfolio is discreetly curated, featuring off-market and prime listings in Dubai,
                Abu Dhabi, and Greece.
              </p>
              <p>
                Each property is selected for its design, location, and lifestyle value — from branded
                residences and marina penthouses to Greek island villas and mainland estates.
              </p>
              <p className="text-neutral-900 font-medium">
                We do not display every property publicly. To access our private catalogue, please
                request a consultation.
              </p>
            </div>
            <div className="mt-8">
              <button onClick={() => onNavigate('consultation')} className="btn-gold">
                Request Private Access
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="property-card group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="property-card-overlay" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <h3 className="text-white text-xl mb-2">{property.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{property.location}</p>
                    <button
                      onClick={() => onNavigate('consultation')}
                      className="flex items-center space-x-2 text-white text-sm tracking-wider uppercase border border-white/50 px-4 py-2 hover:bg-white hover:text-neutral-900 transition-all duration-300 w-fit"
                    >
                      <Lock size={16} />
                      <span>Request Details Privately</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <Lock className="w-12 h-12 text-[#C9A96E] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-6">Exclusive Portfolio Access</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Our most exceptional properties are shared only with qualified clients. Begin your
              private consultation to explore opportunities tailored to your vision.
            </p>
            <button onClick={() => onNavigate('consultation')} className="btn-primary">
              Schedule Private Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
