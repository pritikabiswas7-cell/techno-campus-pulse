import { Button } from "@/components/ui/button";
import { Calendar, Menu, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-black tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            Techno Eventz
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#events" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#categories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#volunteer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Volunteer
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
