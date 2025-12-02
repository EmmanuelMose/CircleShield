const CTA = () => {
  return (
    <section className="py-20 bg-teal-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-2xl p-10 md:p-16 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Join the Circle Today</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Take the first step towards a more empowered future. Create your free account to access personalized learning, community support, and powerful AI tools.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105">
            Sign Up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;