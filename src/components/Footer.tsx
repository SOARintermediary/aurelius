export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="/Aurelius Transparent updated copy.png"
              alt="AURELIUS"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Real Estate & Lifestyle Consultancy
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mt-2">
              Dubai • UAE • Greece
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm tracking-wider uppercase mb-4 text-[#C9A96E]">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>contact@aureliushouse.com</p>
                <p>www.aureliushouse.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-wider uppercase mb-4 text-[#C9A96E]">
                Values
              </h3>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>Trust</p>
                <p>Access</p>
                <p>Lifestyle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-xs">
              © AURELIUS, a SOAR FZ-LLC Company
            </p>
            <p className="text-neutral-500 text-xs tracking-wider">
              Trust • Access • Lifestyle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
