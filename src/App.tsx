import React, { useEffect, useState } from 'react';
import { ChevronDown, Phone, Mail, Instagram, MapPin, Home, TrendingUp, Key, MessageCircle, ArrowRight, Star, Shield, Award, Users, Menu, X, Play, ChevronRight, Building, Briefcase, Heart, Globe, Calendar, CheckCircle } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [aboutImageParallaxY, setAboutImageParallaxY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const aboutImageRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
      
      // Calculate parallax for about image
      if (aboutImageRef.current && window.innerWidth > 768) {
        const rect = aboutImageRef.current.getBoundingClientRect();
        const parallaxValue = (window.innerHeight - rect.top) * -0.1;
        setAboutImageParallaxY(parallaxValue);
      } else {
        setAboutImageParallaxY(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const developments = {
    residential: [
      {
        name: 'Palm Jumeirah Residences',
        location: 'Palm Jumeirah',
        image: '/83cb232fd86fb64c0d7db29c4ea857c9.jpg',
        price: 'Starting from AED 2.5M',
        bedrooms: '2-4 BR',
        status: 'Ready to Move',
        completion: '2024'
      },
      {
        name: 'Dubai Hills Estate',
        location: 'Dubai Hills',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        price: 'Starting from AED 1.8M',
        bedrooms: '1-3 BR',
        status: 'Under Construction',
        completion: '2025'
      },
      {
        name: 'Emirates Living',
        location: 'Emirates Hills',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        price: 'Starting from AED 3.2M',
        bedrooms: '3-5 BR',
        status: 'Ready to Move',
        completion: '2024'
      }
    ],
    commercial: [
      {
        name: 'DIFC Business Tower',
        location: 'DIFC',
        image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        price: 'Starting from AED 150/sq ft',
        bedrooms: 'Office Spaces',
        status: 'Available Now',
        completion: '2024'
      },
      {
        name: 'Downtown Retail Complex',
        location: 'Downtown Dubai',
        image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        price: 'Starting from AED 200/sq ft',
        bedrooms: 'Retail Units',
        status: 'Leasing Soon',
        completion: '2025'
      }
    ]
  };

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '$100M+', label: 'Assets Under Advisory' },
    { number: '50+', label: 'UHNW Clients' },
    { number: '95%', label: 'Client Retention' }
  ];

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investment Advisory & Deal Sourcing',
      description: 'Curated selection of premium residential, off-plan, and trophy assets with tailored market research and strategic guidance to maximize ROI.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Lifestyle Integration & Concierge Advisory',
      description: 'Connecting property ownership to world-class schools, clubs, private services, and family-office solutions that complement your lifestyle.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Project & Asset Management',
      description: 'Full-scale property oversight including renovations, fit-outs, leasing strategy, and resale planning to protect and grow property value.'
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Exclusive Client Access & Introductions',
      description: 'Access to off-market opportunities, private developments, and high-value networks through consultancy retainers and success-based advisory fees.'
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-aurelius">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <a href="#home" onClick={() => scrollToSection('home')}>
                <img 
                  src="/Aurelius Transparent updated.png"
                  alt="Aurelius Realty"
                  className="h-8 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${isScrolled ? 'text-aurelius-charcoal' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${isScrolled ? 'text-aurelius-charcoal' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+971501234567" className={`transition-colors ${
                isScrolled ? 'text-aurelius-charcoal hover:text-aurelius-gold' : 'text-white hover:text-aurelius-gold'
              }`}>
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:hello@aureliusproperties.ae" className={`transition-colors ${
                isScrolled ? 'text-aurelius-charcoal hover:text-aurelius-gold' : 'text-white hover:text-aurelius-gold'
              }`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="py-4 space-y-4">
                {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-aurelius-charcoal hover:text-aurelius-gold font-medium text-sm uppercase tracking-wide"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Frond-M-Palm-Jumeirah-Dubai-Dubai-United-Arab-Emirates-21.jpg)',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        <div className="absolute inset-0 hero-video-overlay"></div>
        
        <div className="relative z-10 text-center container-aurelius">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/Aurelius Transparent updated.png"
              alt="Aurelius Realty"
              className="h-24 md:h-32 mx-auto mb-6"
            />
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Curated Investments. Discreet Excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="aurelius-btn-primary"
              >
                Explore Opportunities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="aurelius-btn-outline"
              >
                Private Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-aurelius-gold" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-aurelius-charcoal">
        <div className="container-aurelius">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="stats-number">{stat.number}</div>
                <div className="text-white/70 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-aurelius">
          {/* Hero Image */}
          <div className="animate-fade-in mb-16">
            <div className="relative">
              <img 
                ref={aboutImageRef}
                src="/Frond-M-Palm-Jumeirah-Dubai-Dubai-United-Arab-Emirates-24.jpg"
                alt="Luxury development"
                className="w-full h-80 lg:h-96 object-cover shadow-aurelius-lg rounded-lg"
                style={{
                  transform: `translateY(${aboutImageParallaxY}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-aurelius-gold font-semibold tracking-wider uppercase text-sm mb-4">About Aurelius</p>
            <h2 className="text-4xl md:text-5xl font-bold text-aurelius-charcoal mb-6 leading-tight">
              Curated Investments,
              <br />
              <span className="text-gradient-aurelius">Discreet Excellence</span>
            </h2>
          </div>

          {/* Three Column Editorial Layout */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Column 1 - Introduction */}
            <div className="animate-fade-in-left">
              <div className="bg-aurelius-gray p-8 rounded-lg h-full">
                <div className="h-1 w-16 bg-aurelius-gold mb-6"></div>
                <h3 className="text-xl font-bold text-gradient-aurelius mb-6">Our Foundation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aurelius isn't a brokerage. We are a private real estate consultancy built on trust, discretion, and strategy. In a market overflowing with agents chasing transactions, Aurelius exists to serve a different kind of client — one who values clarity, tailored opportunities, and a partner who understands their long-term goals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dubai is a market of abundance — but also noise. Thousands of agents compete for attention, yet very few truly listen. Traditional brokers push listings; they don't ask the deeper questions. They rarely understand the client's lifestyle, investment strategy, or legacy vision. The result? Time wasted, opportunities missed, and trust eroded.
                </p>
              </div>
            </div>

            {/* Column 2 - The Aurelius Difference */}
            <div className="animate-fade-in-up">
              <div className="bg-white border-2 border-aurelius-gold/20 p-8 rounded-lg h-full">
                <div className="h-1 w-16 bg-aurelius-gold mb-6"></div>
                <h3 className="text-xl font-bold text-gradient-aurelius mb-6">The Aurelius Difference</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aurelius strips the process back to what matters: you. We begin with strategy, not listings. We source off-market and pre-market opportunities others don't access. We act as your private consultants — aligning real estate choices with your financial, lifestyle, and legacy objectives. Our model is transparent: brokers retain their commissions, while Aurelius charges a consultancy retainer and a completion fee only when success is achieved. We aren't chasing the deal. We're building your foundation.
                </p>
              </div>
            </div>

            {/* Column 3 - The Invitation */}
            <div className="animate-fade-in-right">
              <div className="bg-aurelius-charcoal p-8 rounded-lg h-full">
                <div className="h-1 w-16 bg-aurelius-gold mb-6"></div>
                <h3 className="text-xl font-bold text-gradient-aurelius mb-6">The Invitation</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  For clients who demand more than sales talk, Aurelius offers a trusted relationship — where every move is discreet, strategic, and built around your ambitions. Your time is too valuable for guesswork, and your investments too important for compromise.
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  The next move is yours. Let's make it Aurelius.
                </p>
                <button className="aurelius-btn-primary">
                  Private Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-aurelius-gold mb-2">10+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aurelius-gold mb-2">$100m+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Assets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aurelius-gold mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">UHNW Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aurelius-gold mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-aurelius-gray">
        <div className="container-aurelius">
          <div className="text-center mb-16">
            <p className="text-aurelius-gold font-semibold tracking-wider uppercase text-sm mb-4">Curated Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-aurelius-charcoal mb-6 leading-tight">
              Exclusive <span className="text-gradient-aurelius">Investments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of premium investment opportunities across Dubai's most prestigious locations.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 rounded-md ${
                  activeTab === 'residential'
                    ? 'bg-aurelius-gold text-white'
                    : 'text-gray-600 hover:text-aurelius-gold'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 rounded-md ${
                  activeTab === 'commercial'
                    ? 'bg-aurelius-gold text-white'
                    : 'text-gray-600 hover:text-aurelius-gold'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Development Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developments[activeTab as keyof typeof developments].map((development, index) => (
              <div key={index} className="development-card aurelius-card group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-aurelius-gold text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded">
                      {development.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h3 className="text-xl font-bold mb-1">{development.name}</h3>
                    <p className="text-sm opacity-90 mb-2">{development.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-aurelius-gold font-semibold">{development.price}</span>
                    <span className="text-gray-600 text-sm">{development.bedrooms}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Completion: {development.completion}</span>
                    </div>
                  </div>
                  
                  <button className="aurelius-btn-outline w-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-aurelius-charcoal">
        <div className="container-aurelius">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-aurelius-gold font-semibold tracking-wider uppercase text-sm mb-4">Private Consultation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Elevate Your
                <br />
                <span className="text-gradient-aurelius">Investment Portfolio</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Our exclusive advisory services are designed for ultra-high-net-worth clients seeking curated investment opportunities and lifestyle integration. Schedule a private consultation to explore how we can elevate your portfolio.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-aurelius-gold/20 rounded-full">
                    <Phone className="w-6 h-6 text-aurelius-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-white/70">+971 52 887 5598</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-aurelius-gold/20 rounded-full">
                    <Mail className="w-6 h-6 text-aurelius-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-white/70">members@aureliushome.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-aurelius-gold/20 rounded-full">
                    <MapPin className="w-6 h-6 text-aurelius-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Private Office</h3>
                    <p className="text-white/70">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Private Consultation</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-white/10 text-white border border-white/20 rounded focus:border-aurelius-gold focus:outline-none transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 font-medium mb-2 text-sm">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-white/10 text-white border border-white/20 rounded focus:border-aurelius-gold focus:outline-none transition-all duration-300"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-white/10 text-white border border-white/20 rounded focus:border-aurelius-gold focus:outline-none transition-all duration-300"
                      placeholder="john.smith@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 bg-white/10 text-white border border-white/20 rounded focus:border-aurelius-gold focus:outline-none transition-all duration-300"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">Investment Requirements</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-white/10 text-white border border-white/20 rounded focus:border-aurelius-gold focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Share your investment objectives and lifestyle preferences..."
                    ></textarea>
                  </div>
                  
                  <button className="aurelius-btn-primary w-full">
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aurelius-charcoal-dark py-16 border-t border-white/10">
        <div className="container-aurelius">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">AURELIUS</h2>
              <p className="text-white/60 leading-relaxed mb-6 max-w-lg">
                Luxury real estate investment advisory and lifestyle consultancy, dedicated to serving ultra-high-net-worth individuals and families. Curated Investments. Discreet Excellence.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/40 hover:text-aurelius-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/40 hover:text-aurelius-gold transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/40 hover:text-aurelius-gold transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Investment Focus</h4>
              <ul className="space-y-3">
                {['Palm Jumeirah', 'Emirates Hills', 'DIFC', 'Jumeirah Bay Island', 'Al Barari'].map((item) => (
                  <li key={item}>
                    <a href="#projects" onClick={() => scrollToSection('projects')} className="text-white/60 hover:text-aurelius-gold transition-colors text-sm cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2025 Aurelius. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-white/40 text-sm">
              <button 
                onClick={() => openModal('Client Privacy', 'At Aurelius Realty, client confidentiality is paramount. All information shared with us is handled with the highest level of discretion. We do not disclose client details, transaction data, or investment preferences to third parties without prior written consent. Your privacy is not just respected—it is protected at every step of the process.')}
                className="hover:text-aurelius-gold transition-colors cursor-pointer"
              >
                Client Privacy
              </button>
              <button 
                onClick={() => openModal('Advisory Terms', 'Our advisory services are tailored exclusively to high-net-worth clients and institutional partners. Recommendations provided are based on thorough market research and strategic analysis; however, they do not constitute financial or legal advice. Clients are encouraged to seek independent counsel where necessary. Engagement with Aurelius Realty indicates acceptance of these terms.')}
                className="hover:text-aurelius-gold transition-colors cursor-pointer"
              >
                Advisory Terms
              </button>
              <button 
                onClick={() => openModal('RERA Compliance', 'Aurelius Realty operates in full compliance with the Real Estate Regulatory Agency (RERA) of Dubai. All transactions, advisory practices, and client dealings adhere strictly to RERA guidelines to ensure transparency, legality, and the highest professional standards. Our commitment to compliance safeguards both our clients and their investments.')}
                className="hover:text-aurelius-gold transition-colors cursor-pointer"
              >
                RERA Compliance
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-aurelius-charcoal">{modalTitle}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">{modalContent}</p>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="aurelius-btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;