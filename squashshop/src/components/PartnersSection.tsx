import { Card } from "@/components/ui/card";
import { Target, Users, User } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">Our Partners</h3>
          <p className="text-base sm:text-lg text-muted-foreground px-4">Proud to work with leading organizations in the squash community</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* McMaster University */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <img 
                src="/mcmaster.png" 
                alt="McMaster University" 
                className="h-16 w-16 sm:h-20 sm:w-20 mb-4"
              />
              <h4 className="font-semibold text-base sm:text-lg mb-2">McMaster University</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Official Squash Team Partner</p>
            </div>
          </Card>
          
          {/* Local Squash Club */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 sm:h-20 sm:w-20 mb-4 bg-primary rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Hamilton Squash Club</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Equipment & Stringing Partner</p>
            </div>
          </Card>
          
          {/* Tennis & Squash Association */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 sm:h-20 sm:w-20 mb-4 bg-accent rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Ontario Squash</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Provincial Association</p>
            </div>
          </Card>
          
          {/* Local Tournament */}
          <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 sm:h-20 sm:w-20 mb-4 bg-secondary rounded-full flex items-center justify-center">
                <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg mb-2">Golden Horseshoe Open</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Tournament Sponsor</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 