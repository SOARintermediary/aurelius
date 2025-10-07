export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl mb-6">A Personal Approach to Real Estate</h1>
            </div>

            <div className="space-y-8 text-neutral-700 leading-relaxed text-lg">
              <p>
                Founded by Barney Sykes, AURELIUS operates as a private real estate and lifestyle
                consultancy for discerning clients seeking more than a transaction.
              </p>

              <p>
                With a presence in Dubai and partnerships across Greece, AURELIUS bridges two worlds
                — offering clarity, trust, and access to properties that reflect both lifestyle and
                investment potential.
              </p>

              <div className="py-8">
                <h2 className="text-2xl md:text-3xl mb-6 text-neutral-900">Our Mission</h2>
                <p className="font-medium text-neutral-900">
                  To represent our clients' interests with discretion, integrity, and vision.
                </p>
                <p className="mt-4">
                  Every acquisition we handle is treated as personal — because it is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
              <div className="text-6xl text-[#C9A96E] mb-6">"</div>
              <p className="text-2xl md:text-3xl font-light text-neutral-900 leading-relaxed mb-6">
                We don't sell properties. We connect people to places that match who they are and
                how they live.
              </p>
              <div className="text-6xl text-[#C9A96E] rotate-180">"</div>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Al-Barari-Villa-Amaia copy.jpg"
                alt="Luxury Property"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">Why AURELIUS</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Discretion</h3>
                  <p>
                    Your privacy is paramount. We operate with the utmost confidentiality, ensuring
                    every interaction remains private.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Expertise</h3>
                  <p>
                    Deep market knowledge in Dubai, UAE, and Greece. We understand the nuances of
                    luxury real estate in these distinctive markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Bespoke Service</h3>
                  <p>
                    Every client journey is unique. We tailor our approach to your specific
                    lifestyle, investment goals, and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">Our Locations</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl mb-2 text-[#C9A96E]">Dubai</h3>
                <p className="text-neutral-400 text-sm">United Arab Emirates</p>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[#C9A96E]">UAE</h3>
                <p className="text-neutral-400 text-sm">Abu Dhabi & Beyond</p>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[#C9A96E]">Greece</h3>
                <p className="text-neutral-400 text-sm">Islands & Mainland</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
