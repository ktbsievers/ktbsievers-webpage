import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import racket images
import dunlopRacket from "@/assets/dunlop-racket.jpg";
import headRacket from "@/assets/head-racket.jpg";
import tecnifibreRacket from "@/assets/tecnifibre-racket.jpg";
import princeRacket from "@/assets/prince-racket.jpg";
import salmingRacket from "@/assets/salming-racket.jpg";
import oliverRacket from "@/assets/oliver-racket.jpg";
import karakalRacket from "@/assets/karakal-racket.jpg";
import blackKnightRacket from "@/assets/black-knight-racket.jpg";


import { Award, Clock, Shield, Star } from "lucide-react";

interface RacketsSectionProps {
  onContactClick: () => void;
}

const RacketsSection = ({ onContactClick }: RacketsSectionProps) => {
  const racketsForSale = [
    { 
      brand: "Wilson", 
      model: "Clash 100 Pro", 
      price: "$180", 
      originalPrice: "$220",
      condition: "New", 
      weight: "120g", 
      type: "Head Light",
      image: dunlopRacket,
      rating: 5,
      reviews: 12
    },
    { 
      brand: "Head", 
      model: "Graphene 360+ Speed 120", 
      price: "$160", 
      originalPrice: "$200",
      condition: "New", 
      weight: "120g", 
      type: "Head Light",
      image: headRacket,
      rating: 4,
      reviews: 8
    },
    { 
      brand: "Tecnifibre", 
      model: "Carboflex 125 X-Speed", 
      price: "$140", 
      originalPrice: "$180",
      condition: "New", 
      weight: "125g", 
      type: "Head Heavy",
      image: tecnifibreRacket,
      rating: 5,
      reviews: 15
    },
    { 
      brand: "Prince", 
      model: "Pro Beast 750", 
      price: "$95", 
      originalPrice: "$130",
      condition: "Used - Excellent", 
      weight: "140g", 
      type: "Head Heavy",
      image: princeRacket,
      rating: 4,
      reviews: 5
    },
    { 
      brand: "Salming", 
      model: "Cannone PowerLite", 
      price: "$110", 
      originalPrice: "$140",
      condition: "New", 
      weight: "125g", 
      type: "Head Light",
      image: salmingRacket,
      rating: 4,
      reviews: 7
    },
    { 
      brand: "Oliver", 
      model: "Apex 500", 
      price: "$75", 
      originalPrice: "$100",
      condition: "Used - Good", 
      weight: "135g", 
      type: "Head Heavy",
      image: oliverRacket,
      rating: 3,
      reviews: 3
    },
    { 
      brand: "Karakal", 
      model: "SN 90 FF", 
      price: "$85", 
      originalPrice: "$110",
      condition: "New", 
      weight: "120g", 
      type: "Head Light",
      image: karakalRacket,
      rating: 4,
      reviews: 6
    },
    { 
      brand: "Black Knight", 
      model: "Ion Cannon PS", 
      price: "$130", 
      originalPrice: "$160",
      condition: "New", 
      weight: "125g", 
      type: "Head Heavy",
      image: blackKnightRacket,
      rating: 5,
      reviews: 9
    }
  ];

  const additionalServices = [
    { 
      name: "Bring Your Own Strings", 
      price: "$15.00", 
      description: "Professional installation of your preferred strings." 
    },
    { 
      name: "Premium Overgrip", 
      price: "$2.50", 
      description: "HEAD Xtreme Soft / Yonex Supergrap for superior grip." 
    },
    { 
      name: "Grip Replacement", 
      price: "$10.00", 
      description: "Karakal PU Supergrips - professional installation." 
    },
    { 
      name: "Racquet Rebalancing", 
      price: "$5.00", 
      description: "Precision weight adjustment using lead tape." 
    }
  ];

  const specialOffers = [
    { 
      name: "Grommet Replacement", 
      price: "$10.00", 
      description: "Replacement grommets sourced and installed (1-3 week delivery)."
    },
    { 
      name: "Referral Rewards", 
      price: "$10.00", 
      description: "Earn $10 credit for each new customer referral."
    },
    { 
      name: "McMaster Marauder Package", 
      price: "$100.00", 
      description: "Exclusive offer: $100 for 4 complete restringings with strings included."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="rackets" className="py-12 sm:py-16 px-4 sm:px-6 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-lg font-semibold text-muted-foreground">5-STAR RATED RACQUETS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">Premium Squash Racquets</h3>
          <p className="text-base sm:text-lg text-muted-foreground px-4">Quality Racquets from leading brands at competitive prices</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {racketsForSale.map((racket, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden touch-manipulation group">
              <div className="aspect-square relative bg-white p-4 sm:p-6">
                <img 
                  src={racket.image} 
                  alt={`${racket.brand} ${racket.model}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {racket.condition !== "New" && (
                  <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
                    {racket.condition}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3">
                  <h4 className="font-bold text-base sm:text-lg leading-tight text-foreground">
                    {racket.brand} {racket.model}
                  </h4>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {renderStars(racket.rating)}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {racket.reviews} review{racket.reviews !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl sm:text-2xl font-bold text-primary">{racket.price}</span>
                  {racket.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{racket.originalPrice}</span>
                  )}
                </div>
                
                <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Weight:</span>
                    <span className="font-medium">{racket.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Condition:</span>
                    <span className="font-medium">{racket.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium">{racket.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-base sm:text-lg text-muted-foreground px-4 mb-4">
            Contact Billy directly to purchase racquets or arrange viewing
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-primary border-primary hover:bg-primary hover:text-white"
            onClick={onContactClick}
          >
            View All Racquets
          </Button>
        </div>

        {/* Additional Professional Services */}
        <div className="mb-12 mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Additional Services</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border border-gray-100 text-center">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-gray-900">{service.name}</CardTitle>
                  <div className="text-lg font-bold text-burgundy">{service.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Special Offers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="border border-gray-100">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-base font-semibold text-gray-900">{offer.name}</CardTitle>
                    <div className="text-lg font-bold text-burgundy">{offer.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 leading-relaxed">{offer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Professional Service Guarantee */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-burgundy" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">Championship-Level Service Guarantee</h4>
          </div>
          <p className="text-sm sm:text-lg text-gray-700 mb-6 leading-relaxed">
            Every service delivered with the same standards Billy maintains for McMaster's competitive squash program. 
            Contact Billy directly for all stringing services, racquets consultations, and payments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-burgundy flex-shrink-0" />
              <span><strong>Turnaround:</strong> 24-48 hours</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-burgundy flex-shrink-0" />
              <span><strong>Warranty:</strong> 30 days on all work</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-burgundy flex-shrink-0" />
              <span><strong>Quality:</strong> University-level standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RacketsSection; 