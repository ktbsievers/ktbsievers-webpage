import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

const HeroSection = ({ onContactClick, onServicesClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          {/* <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Award className="h-5 w-5 text-orange-400" />
            <span className="text-sm font-semibold">3+ Years of Excellence</span>
          </div> */}
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Local <span className="text-orange-400">Squash Racquet Expert</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Racquet restringing and refurbished racquets 
            <span className="font-semibold text-orange-400"> here in Hamilton, ON.</span>
          </p>
          
          {/* About */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            I am a Ph.D. candidate in Theoretical Physics at McMaster University who is also a player and equipment manager on the McMaster squash team. When I moved to Hamilton three years ago, I was surprised to find a lack of racquet stringing services for my squash racquets. Over the past three years, I have learned the about squash racquets and strings, built lasting connections in the McMaster and Ancaster Squash Clubs, and practiced of restringing squash/tennis/badminton racquets. I use the Gamma X6-FC with WISE.
          </p>
          
          {/* McMaster Affiliation */}
          <div className="flex items-center justify-center space-x-4 mb-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <img 
                src="public/mcmaster.png" 
                alt="McMaster University" 
                className="h-12 w-12 rounded-lg bg-white/20 p-2"
              />
              <div className="text-left">
                <div className="font-bold text-lg">McMaster University</div>
                <div className="text-orange-400 font-semibold">Official Squash Team Partner</div>
              </div>
            </div>
          </div>
          
          
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-sm text-white/80">Racquets Strung</div>
            </div> 
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onContactClick}
              className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Contact Billy</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              onClick={onServicesClick}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy font-bold px-8 py-4 rounded-xl text-lg backdrop-blur-sm bg-white/10 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View Services
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-white/70">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
              ))}
            </div>
            <span className="text-sm">Trusted by McMaster athletes and local players</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
