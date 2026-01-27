const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h4 className="font-bold text-xl mb-4 text-white">Billy's Squash Shop</h4>
          <div className="space-y-2 mb-6">
            {/* <p className="text-gray-300 text-base">Family-owned business since 2009</p> */}
            <p className="text-gray-300 text-base">Affiliated with McMaster University Squash Team</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-gray-400 border-t border-gray-700 pt-6">
            <span>© 2024 Billy's Squash Shop</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 