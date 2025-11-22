import { Button } from "@/components/ui/button";
import { Calendar, Users, Award } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-black tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
            Welcome to <span className="block mt-2">Techno Eventz</span>
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl max-w-2xl mx-auto">
            Your unified platform for discovering campus events, earning recognition, and making the most of your college experience at Techno Main Salt Lake.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="font-semibold">
              Explore Events
            </Button>
            <Button size="lg" variant="secondary" className="font-semibold">
              Register Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/10 backdrop-blur">
              <Calendar className="h-10 w-10 text-primary-foreground" />
              <h3 className="font-bold text-primary-foreground">50+ Events</h3>
              <p className="text-sm text-primary-foreground/80">Monthly Activities</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/10 backdrop-blur">
              <Users className="h-10 w-10 text-primary-foreground" />
              <h3 className="font-bold text-primary-foreground">5000+ Students</h3>
              <p className="text-sm text-primary-foreground/80">Active Participants</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/10 backdrop-blur">
              <Award className="h-10 w-10 text-primary-foreground" />
              <h3 className="font-bold text-primary-foreground">MAR Points</h3>
              <p className="text-sm text-primary-foreground/80">Earn Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
