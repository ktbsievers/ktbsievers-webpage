const BrandsSection = () => {
  const majorBrands = ["Wilson", "HEAD", "YONEX", "Nike", "Adidas", "Prince"];
  const squashBrands = ["Tecnifibre", "Dunlop", "Babolat", "Karakal", "Oliver", "Salming"];

  return (
    <section id="brands" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">Brands We Carry</h3>
          <p className="text-base sm:text-lg text-muted-foreground px-4">Premium equipment from the world's leading sports brands</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {/* Row 1 - Major Sports Brands */}
          {majorBrands.map((brand, index) => (
            <div key={`major-${index}`} className="flex items-center justify-center h-16 sm:h-20 w-full">
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">{brand}</div>
            </div>
          ))}
          
          {/* Row 2 - Squash Specific Brands */}
          {squashBrands.map((brand, index) => (
            <div key={`squash-${index}`} className="flex items-center justify-center h-16 sm:h-20 w-full">
              <div className="text-lg sm:text-xl font-bold text-muted-foreground">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection; 