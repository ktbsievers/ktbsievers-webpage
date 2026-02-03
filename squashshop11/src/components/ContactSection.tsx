import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-burgundy text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to improve your squash game? Contact Billy today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold mb-3 text-lg">Phone</h4>
            <p className="text-white font-medium text-lg mb-1">+1 (905) 525-9140</p>
            <p className="text-white/75 text-sm">Mon-Fri 9AM-7PM</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold mb-3 text-lg">Email</h4>
            <p className="text-white font-medium text-lg mb-1 break-all">info@billyssquashshop.ca</p>
            <p className="text-white/75 text-sm">24/7 response</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold mb-3 text-lg">Location</h4>
            <p className="text-white font-medium text-lg mb-1">McMaster University</p>
            <p className="text-white/90 text-base">Hamilton, ON L8S 4L8</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-white text-burgundy hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 