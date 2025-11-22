import { Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6" />
              <h3 className="text-xl font-black">Techno Eventz</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Unified Campus Event Management System for Techno Main Salt Lake.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#events" className="hover:text-accent transition-colors">Browse Events</a></li>
              <li><a href="#categories" className="hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#volunteer" className="hover:text-accent transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">My Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">MAR Points Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Certificates</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Event Memories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Techno Main Salt Lake, Sector II, Kolkata 700091</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:events@technomain.ac.in" className="hover:text-accent transition-colors">
                  events@technomain.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-accent transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Techno Eventz. All rights reserved. Techno Main Salt Lake.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
