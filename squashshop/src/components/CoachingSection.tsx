import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, User, Clock, Star, Trophy, Award, Mail, Phone } from "lucide-react";

const CoachingSection = () => {
  const coachingOptions = [
    {
      type: "Private Coaching",
      description: "One-on-one personalized coaching sessions with Ontario's top player",
      features: ["Technique analysis", "Personalized drills", "Match strategy", "Flexible scheduling"],
      icon: User
    },
    {
      type: "Group Coaching",
      description: "Small group sessions (2-4 players) with championship-level instruction",
      features: ["Group drills", "Competitive practice", "Skill development", "Social environment"],
      icon: Users
    }
  ];

  return (
    <section id="coaching" className="py-12 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Rawaad's Image and Credentials */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            {/* Circular Coach Image */}
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/rawaad.png" 
                  alt="Rawaad - Professional squash coach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-burgundy text-white rounded-full p-2">
                <Trophy className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            {/* Coach Credentials */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Meet Rawaad</h3>
              <div className="space-y-1 mb-4">
                <p className="text-lg font-semibold text-burgundy">Ontario Top Player</p>
                <p className="text-base text-muted-foreground">#1 Player at McMaster University</p>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Professional coaching from someone with championship-level experience and proven results
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-burgundy" />
                  <span className="font-medium">+1 (905) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-burgundy" />
                  <span className="font-medium">rawaad@coaching.ca</span>
                </div>
              </div>
              
              {/* Achievement Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-burgundy/10 text-burgundy border-burgundy/20">
                  <Award className="h-3 w-3 mr-1" />
                  Ontario Ranked Player
                </Badge>
                <Badge variant="secondary" className="bg-burgundy/10 text-burgundy border-burgundy/20">
                  <Trophy className="h-3 w-3 mr-1" />
                  McMaster #1
                </Badge>
                <Badge variant="secondary" className="bg-burgundy/10 text-burgundy border-burgundy/20">
                  <Star className="h-3 w-3 mr-1" />
                  Pro Coach
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coaching Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {coachingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-burgundy/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-burgundy" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg text-foreground mb-2">{option.type}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 gap-2">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Target className="h-3 w-3 text-burgundy flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoachingSection; 