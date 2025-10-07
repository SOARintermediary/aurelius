import { ChevronRight, Shield, Map, Handshake } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/-Frond-M-Palm-Jumeirah-Dubai-Dubai-United-Arab-Emirates-21.jpg"
            alt="Luxury Dubai Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white container-custom fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            Welcome to AURELIUS.
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light tracking-wide max-w-3xl mx-auto">
            We are not a traditional brokerage.
          </p>
          <p className="text-lg md:text-xl font-light text-neutral-200 max-w-2xl mx-auto">
            We are a private real estate and lifestyle consultancy — connecting people with homes
            and opportunities in Dubai, the UAE, and Greece.
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-white mx-auto rotate-90" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              At AURELIUS, property is never just a transaction — it's about lifestyle, vision, and access.
            </p>

            <div className="space-y-6 text-left md:text-center">
              <p className="text-neutral-700 leading-relaxed">
                For our clients, we act as:
              </p>
              <div className="space-y-4 text-neutral-700">
                <p>
                  <span className="font-medium text-neutral-900">Advisors,</span> introducing properties
                  that align with both lifestyle and investment goals.
                </p>
                <p>
                  <span className="font-medium text-neutral-900">Guides,</span> helping navigate the Dubai
                  and Greek markets with clarity and trust.
                </p>
                <p>
                  <span className="font-medium text-neutral-900">Partners,</span> supporting long-term
                  ambitions, whether that means a home, an investment, or a residency pathway.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-2xl md:text-3xl font-light text-neutral-900 mb-8">
                This is real estate, made personal.
              </p>
              <div className="space-y-2">
                <p className="text-sm tracking-wider uppercase text-neutral-600">
                  AURELIUS by Barney Sykes
                </p>
                <p className="text-sm text-[#C9A96E] tracking-wider">
                  Trust • Access • Lifestyle
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button onClick={() => onNavigate('listings')} className="btn-gold">
                Explore Properties Privately
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-[#C9A96E] transition-colors duration-300">
                <Shield className="w-8 h-8 text-[#C9A96E]" />
              </div>
              <h3 className="text-2xl mb-4">Advisors</h3>
              <p className="text-neutral-600 leading-relaxed">
                We introduce opportunities that reflect who you are — not just what's available.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-[#C9A96E] transition-colors duration-300">
                <Map className="w-8 h-8 text-[#C9A96E]" />
              </div>
              <h3 className="text-2xl mb-4">Guides</h3>
              <p className="text-neutral-600 leading-relaxed">
                From Dubai's skyline to Greece's islands, we help you navigate every step with confidence.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-[#C9A96E] transition-colors duration-300">
                <Handshake className="w-8 h-8 text-[#C9A96E]" />
              </div>
              <h3 className="text-2xl mb-4">Partners</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our role doesn't end at the deal. We support your long-term vision — lifestyle, investment,
                and legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Al-Barari-Villa-Amaia copy.jpg"
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white container-custom">
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
            Homes shaped around your lifestyle and vision — not listings.
          </p>
        </div>
      </section>
    </div>
  );
}
