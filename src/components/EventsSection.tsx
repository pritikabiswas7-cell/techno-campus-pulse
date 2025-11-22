import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "./EventCard";
import { useState } from "react";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const events = [
    {
      title: "Techno Hackathon 2024",
      description: "24-hour coding challenge to build innovative solutions for real-world problems. Win exciting prizes and gain industry exposure.",
      date: "March 15, 2024",
      time: "9:00 AM",
      venue: "Main Auditorium, Techno Main",
      category: "Technical",
      marPoints: 50,
      registered: 145,
      maxCapacity: 200,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    },
    {
      title: "Techno Cultural Fest",
      description: "Annual cultural extravaganza featuring music, dance, drama, and art competitions. Celebrate diversity and creativity.",
      date: "March 20, 2024",
      time: "5:00 PM",
      venue: "Open Air Theatre",
      category: "Cultural",
      marPoints: 30,
      registered: 320,
      maxCapacity: 500,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
    },
    {
      title: "Techno Open Mic",
      description: "Share your talent in poetry, comedy, music, or storytelling. A platform for creative expression and entertainment.",
      date: "March 18, 2024",
      time: "6:00 PM",
      venue: "Cafeteria Lawn",
      category: "Cultural",
      marPoints: 20,
      registered: 45,
      maxCapacity: 100,
      isPaid: true,
      amount: 50,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
    },
    {
      title: "Techno Workshop: AI & ML",
      description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals. Learn from industry experts.",
      date: "March 22, 2024",
      time: "10:00 AM",
      venue: "Computer Lab 3, Block B",
      category: "Workshop",
      marPoints: 40,
      registered: 80,
      maxCapacity: 100,
      isPaid: true,
      amount: 200,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
      title: "Techno Sports Championship",
      description: "Inter-department sports competition featuring cricket, football, basketball, and athletics events.",
      date: "March 25, 2024",
      time: "7:00 AM",
      venue: "Sports Complex",
      category: "Sports",
      marPoints: 35,
      registered: 180,
      maxCapacity: 250,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
    },
    {
      title: "Techno Career Seminar",
      description: "Industry leaders discuss career opportunities, interview tips, and emerging technologies in the tech industry.",
      date: "March 28, 2024",
      time: "2:00 PM",
      venue: "Seminar Hall 1",
      category: "Seminar",
      marPoints: 25,
      registered: 210,
      maxCapacity: 300,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
    }
  ];

  const categories = ["all", "technical", "cultural", "sports", "workshop", "seminar"];

  const filteredEvents = activeTab === "all" 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeTab);

  return (
    <section id="events" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-black text-foreground sm:text-4xl mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore exciting opportunities to learn, compete, and grow. Register now and earn MAR points!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="all" className="font-semibold">All</TabsTrigger>
            <TabsTrigger value="technical" className="font-semibold">Technical</TabsTrigger>
            <TabsTrigger value="cultural" className="font-semibold">Cultural</TabsTrigger>
            <TabsTrigger value="sports" className="font-semibold">Sports</TabsTrigger>
            <TabsTrigger value="workshop" className="font-semibold">Workshop</TabsTrigger>
            <TabsTrigger value="seminar" className="font-semibold">Seminar</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found in this category.</p>
          </div>
        )}

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
