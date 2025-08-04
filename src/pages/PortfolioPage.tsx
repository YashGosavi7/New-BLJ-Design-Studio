const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-darkGray/70 max-w-2xl mx-auto">
            Explore our collection of beautifully designed spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will be added here */}
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
              <div className="h-64 bg-gradient-to-br from-roseGold/20 to-darkGray/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  Project {i + 1}
                </h3>
                <p className="text-darkGray/70 mb-2">
                  {i % 3 === 0 ? 'Residential' : i % 3 === 1 ? 'Commercial' : 'Hospitality'}
                </p>
                <p className="text-sm text-darkGray/60">Location, India</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;