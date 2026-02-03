import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, User } from "lucide-react";

const McMasterCredentials = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <img 
              src="/mcmaster.png" 
              alt="McMaster University" 
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground px-4">McMaster University Squash Team Expertise</h3>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground px-4">Bringing championship-level knowledge to your local community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                University Team Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Billy brings years of experience working with McMaster University's competitive squash program, 
                understanding the precise requirements of serious players.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Championship Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every racquet is strung to the exacting standards expected by university-level competitors, 
                ensuring optimal performance for players at all skill levels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Player Development Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With deep understanding of player development from recreational to competitive levels, 
                Billy provides personalized recommendations for your game improvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default McMasterCredentials; 