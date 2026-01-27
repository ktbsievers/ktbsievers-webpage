import { Target, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Header = ({ activeSection, onNavClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'stringing', label: 'Stringing' },
    { id: 'rackets', label: 'Racquets' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="bg-burgundy rounded-2xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Billy's Squash Shop
              </h1>
              <div className="flex items-center space-x-2">
                <img 
                  src="/mcmaster.png" 
                  alt="McMaster University" 
                  className="h-5 w-5 opacity-70"
                />
                <span className="text-sm text-gray-600 font-medium">McMaster Affiliated</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                  activeSection === item.id 
                    ? 'text-white bg-burgundy shadow-lg transform scale-105' 
                    : 'text-gray-700 hover:text-burgundy hover:bg-gray-50'
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-100 px-4 py-6">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'text-white bg-burgundy shadow-lg' 
                    : 'text-gray-700 hover:text-burgundy hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 