import { Button } from "@/components/ui/button";
import { Calendar, Menu, Bell, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Helper for smooth scroll after navigation
  const scrollToVolunteer = () => {
    setTimeout(() => {
      const el = document.getElementById("volunteer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            Techno Eventz
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#events"
            className="text-lg font-extrabold text-foreground hover:text-primary transition-colors"
            onClick={e => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/", { state: { events: true } });
              } else {
                const el = document.getElementById("events");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Events
          </a>
          <Link
            to="/dashboard"
            className="text-lg font-extrabold text-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Dashboard
          </Link>
          <Link
            to="/memories"
            className="text-lg font-extrabold text-foreground hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Memories
          </Link>
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
