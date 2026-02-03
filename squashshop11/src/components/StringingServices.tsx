import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Award, Clock, Shield, CheckCircle, Star, Target, Zap, Trophy } from "lucide-react";
import { useState } from "react";

// Import string images
import syntheticGutStrings from "@/assets/synthetic-gut-strings.jpg";
import multifilamentStrings from "@/assets/multifilament-strings.jpg";
import monofilamentStrings from "@/assets/monofilament-strings.jpg";
import naturalGutStrings from "@/assets/natural-gut-strings.jpg";
import hybridStrings from "@/assets/hybrid-strings.jpg";

const StringingServices = () => {
  const [expandedStrings, setExpandedStrings] = useState<string[]>([]);

  const toggleStringExpansion = (stringName: string) => {
    setExpandedStrings(prev => 
      prev.includes(stringName) 
        ? prev.filter(name => name !== stringName)
        : [...prev, stringName]
    );
  };

  const professionalStrings = [
    { 
      name: "Ash PowerNick", 
      price: "$45.00", 
      specs: "18g / 1.15mm", 
      color: "red",
      image: syntheticGutStrings,
      targetUsers: ["Advanced Players", "Tournament Players"],
      description: "Billy's top recommendation for serious competitors. This premium multifilament string delivers exceptional power transfer and precise control, perfect for players who demand tournament-level performance.",
      features: ["Tournament-grade durability", "Superior tension maintenance", "Enhanced ball feel", "McMaster team approved"],
      tier: "premium",
      popular: false,
      billysNotes: "Used by McMaster's top players for championship matches"
    },
    { 
      name: "Ash SuperNick Ti", 
      price: "$45.00", 
      specs: "17g / 1.25mm", 
      color: "blue&red&white",
      image: multifilamentStrings,
      targetUsers: ["Intermediate Players", "Advanced Players"],
      description: "Billy's most popular choice for advancing players. The titanium enhancement provides the perfect balance of power and control that competitive players need to elevate their game.",
      features: ["Titanium-enhanced durability", "Improved spin generation", "Consistent performance", "Professional grade"],
      tier: "premium",
      popular: true,
      billysNotes: "My go-to recommendation for players moving to competitive level"
    },
    { 
      name: "TF X-1 BiPhs", 
      price: "$45.00", 
      specs: "17g / 1.24mm", 
      color: "orange",
      image: monofilamentStrings,
      targetUsers: ["Professional Players", "Advanced Players"],
      description: "For elite players seeking maximum precision. Billy strings this for players who need the ultimate in control and accuracy, with bi-phase construction that delivers professional-level performance.",
      features: ["Maximum control precision", "Professional tournament grade", "Bi-phase construction", "Elite player choice"],
      tier: "premium",
      popular: false,
      billysNotes: "Reserved for players with advanced technique and power"
    },
    { 
      name: "Ash SuperNick", 
      price: "$40.00", 
      specs: "17g / 1.25mm", 
      color: "blue&red&white",
      image: naturalGutStrings,
      targetUsers: ["Intermediate Players", "Club Players"],
      description: "Billy's reliable choice for regular players. This all-around performer offers excellent value with consistent performance for training sessions and club matches.",
      features: ["Excellent durability", "Comfortable arm-friendly feel", "Great value proposition", "Consistent performance"],
      tier: "standard",
      popular: true,
      billysNotes: "Perfect for players who train regularly and need reliable performance"
    },
    { 
      name: "TF 305", 
      price: "$40.00", 
      specs: "17g / 1.25mm", 
      color: "green",
      image: hybridStrings,
      targetUsers: ["Beginner Players", "Intermediate Players"],
      description: "Billy's recommendation for developing players. This versatile string helps players learn proper technique while providing forgiving performance that builds confidence.",
      features: ["Forgiving on mishits", "Easy on the arm", "Great for skill development", "Versatile performance"],
      tier: "standard",
      popular: false,
      billysNotes: "Ideal for players developing their technique and consistency"
    },
    { 
      name: "HEAD Perfect Pwr", 
      price: "$30.00", 
      specs: "17g / 1.20mm", 
      color: "black",
      image: syntheticGutStrings,
      targetUsers: ["Intermediate Players", "Power Players"],
      description: "For players who want to add power to their game. Billy recommends this for aggressive players who like to attack from the back court and need that extra punch in their shots.",
      features: ["Enhanced power generation", "Good control balance", "Affordable performance", "Attack-style friendly"],
      tier: "standard",
      popular: false,
      billysNotes: "Great for players who want to develop a more aggressive style"
    },
    { 
      name: "TF Synthetic Gut", 
      price: "$30.00", 
      specs: "17g / 1.25mm", 
      color: "black",
      image: multifilamentStrings,
      targetUsers: ["Beginner Players", "Recreational Players"],
      description: "Billy's choice for recreational players who want quality without breaking the bank. Durable and reliable for casual games and practice sessions.",
      features: ["High durability", "Cost-effective choice", "Easy maintenance", "Recreational perfect"],
      tier: "budget",
      popular: true,
      billysNotes: "My recommendation for casual players who want good value"
    },
    { 
      name: "Budget Squash Strings", 
      price: "$20.00", 
      specs: "17g / 1.20mm", 
      color: "black&white",
      image: monofilamentStrings,
      targetUsers: ["Beginner Players", "Budget Conscious"],
      description: "For players just starting out or those on a tight budget. Billy ensures even basic strings are properly installed for reliable performance.",
      features: ["Most affordable option", "Basic reliable performance", "Good for learning", "Quality installation guaranteed"],
      tier: "budget",
      popular: false,
      billysNotes: "Even budget strings get my professional installation and care"
    }
  ];

  const racketServices = [
    {
      name: "Premium Racket Selection",
      description: "Billy provides access to top-quality rackets from leading brands, personally selected for performance and reliability.",
      features: ["Hand-picked by Billy", "Tournament-grade quality", "Multiple brands available", "Performance tested"]
    },
    {
      name: "Racket Consultation",
      description: "Get expert advice on choosing the right racket for your playing style, skill level, and physical attributes.",
      features: ["Personalized recommendations", "Playing style analysis", "Skill level assessment", "Physical considerations"]
    },
    {
      name: "Racket Customization",
      description: "Professional racket modifications to optimize performance for your specific needs and preferences.",
      features: ["Weight adjustment", "Balance modification", "Grip customization", "String pattern optimization"]
    }
  ];



  return (
    <section id="stringing" className="py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
       

        {/* Professional Expertise Section */}
        {/* <div className="bg-gradient-to-r from-burgundy to-red-700 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">Championship-Level Expertise</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              With years of experience working with McMaster University's competitive squash program, 
              Billy understands the precise requirements that separate good players from great ones. 
              Every racket is strung to exacting standards with convenient campus pickup and drop-off, 
              featuring overnight turnover for your busy schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h4 className="font-semibold mb-2">Precision Installation</h4>
                <p className="text-sm opacity-90">Every string installed with tournament-level precision and consistency</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h4 className="font-semibold mb-2">Performance Focus</h4>
                <p className="text-sm opacity-90">Optimized for your playing style and competitive goals</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h4 className="font-semibold mb-2">University Standards</h4>
                <p className="text-sm opacity-90">Same quality standards used by McMaster's competitive team</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <h4 className="font-semibold mb-2">Campus Convenience</h4>
                <p className="text-sm opacity-90">On-campus pickup and drop-off with overnight turnover</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Brands We Carry */}
    
        
        {/* Professional String Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional String Selection</h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Each string is carefully selected and installed by Billy based on his extensive experience 
            with competitive players. Every choice is backed by proven performance and player feedback.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {professionalStrings.map((string, index) => {
              const isExpanded = expandedStrings.includes(string.name);
              
              return (
                <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  {/* Popular Badge */}
                  {string.popular && (
                    <div className="absolute -top-2 left-4 bg-burgundy text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      BILLY'S CHOICE
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2">{string.name}</CardTitle>
                        <div className="text-2xl font-bold text-burgundy mb-2">{string.price}</div>
                      </div>
                      <button
                        onClick={() => toggleStringExpansion(string.name)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${string.name} details`}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                        <span>Gauge:</span>
                        <span className="font-medium">{string.specs}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                        <span>Color:</span>
                        <span className="font-medium">{string.color}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {/* String Image - Always Visible */}
                  <CardContent className="pt-0 px-6 pb-4">
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <img 
                        src={string.image} 
                        alt={`${string.name} string`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                  
                  {/* Expandable Content - Details Only */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[800px] sm:max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-0 px-4 sm:px-6 pb-6 sm:pb-8">
                      <div className="space-y-3 sm:space-y-4">
                        {/* Target Users */}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Recommended For:</h5>
                          <div className="flex flex-wrap gap-1">
                            {string.targetUsers.map((user, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                {user}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Billy's Professional Notes */}
                        <div className="bg-burgundy/5 p-3 rounded-lg">
                          <h5 className="font-semibold text-burgundy mb-2 text-sm sm:text-base">Billy's Notes:</h5>
                          <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                            "{string.billysNotes}"
                          </p>
                        </div>
                        
                        {/* Description */}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Professional Assessment:</h5>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {string.description}
                          </p>
                        </div>
                        
                        {/* Features */}
                        <div className="pb-1">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Performance Features:</h5>
                          <ul className="space-y-1">
                            {string.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium Racket Services */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Premium Racket Services</h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Billy provides access to the best rackets in the industry, personally selected for quality, 
            performance, and reliability. Every racket recommendation is based on extensive testing and player feedback.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {racketServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-3">{service.name}</CardTitle>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-burgundy mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        
      </div>
    </section>
  );
};

export default StringingServices; 