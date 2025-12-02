const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e3764065-0ee5-449e-afcc-9f33afedc11e/circle-shield-hero-rdjj3je-1764606146008.webp" 
          alt="Circle Shield Hero" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Empowering Women Through AI-Powered Awareness
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              CircleShield is a safe space for women to learn, grow, and connect. Explore AI-driven tools and resources for personal and professional development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                Get Started Now
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;