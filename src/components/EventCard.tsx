import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  marPoints: number;
  registered: number;
  maxCapacity: number;
  isPaid?: boolean;
  amount?: number;
  image?: string;
}

const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  venue, 
  category, 
  marPoints,
  registered,
  maxCapacity,
  isPaid = false,
  amount,
  image = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
}: EventCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className="bg-primary text-primary-foreground">
            {category}
          </Badge>
          {isPaid && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              ₹{amount}
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-3 pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>{date} • {time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{venue}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{registered}/{maxCapacity} registered</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">{marPoints} MAR</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full font-semibold">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
