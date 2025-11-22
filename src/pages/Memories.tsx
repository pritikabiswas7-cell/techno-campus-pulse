import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Users, Image as ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Memories = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const memories = [
    {
      id: 1,
      title: "Techno Hackathon 2023",
      year: "2023",
      category: "Technical",
      date: "March 2023",
      participants: 180,
      images: [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
      ],
      description: "48-hour coding marathon with amazing projects and late-night debugging sessions."
    },
    {
      id: 2,
      title: "Techno Cultural Fest 2023",
      year: "2023",
      category: "Cultural",
      date: "February 2023",
      participants: 450,
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80"
      ],
      description: "Three days of music, dance, drama, and incredible performances."
    },
    {
      id: 3,
      title: "Techno Sports Championship 2023",
      year: "2023",
      category: "Sports",
      date: "January 2023",
      participants: 320,
      images: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
      ],
      description: "Inter-department competitions showcasing athletic excellence and sportsmanship."
    },
    {
      id: 4,
      title: "Techno AI Workshop 2022",
      year: "2022",
      category: "Workshop",
      date: "November 2022",
      participants: 95,
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
      ],
      description: "Intensive hands-on training in machine learning and neural networks."
    },
    {
      id: 5,
      title: "Techno Open Mic 2023",
      year: "2023",
      category: "Cultural",
      date: "September 2023",
      participants: 75,
      images: [
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80"
      ],
      description: "Students showcasing hidden talents in poetry, music, and stand-up comedy."
    },
    {
      id: 6,
      title: "Techno Robotics Competition 2022",
      year: "2022",
      category: "Technical",
      date: "October 2022",
      participants: 120,
      images: [
        "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
      ],
      description: "Line following robots, maze solvers, and autonomous navigation challenges."
    }
  ];

  const filteredMemories = memories.filter(memory => {
    const yearMatch = selectedYear === "all" || memory.year === selectedYear;
    const categoryMatch = selectedCategory === "all" || memory.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary py-16">
          <div className="container">
            <div className="text-center text-primary-foreground animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-black mb-4">Event Memories</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Relive the best moments from past Techno events. Browse through our gallery of memories.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">
                  {filteredMemories.length} Event{filteredMemories.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Technical">Technical</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Memories Grid */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMemories.map((memory, index) => (
                <Card key={memory.id} className="overflow-hidden group animate-fade-in hover:shadow-hover transition-all duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={memory.images[0]}
                            alt={memory.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="mb-2">{memory.category}</Badge>
                            <h3 className="text-xl font-bold text-white mb-1">{memory.title}</h3>
                            <div className="flex items-center gap-4 text-white/80 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {memory.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {memory.participants}
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {memory.description}
                          </p>
                          <Button variant="outline" className="w-full mt-4" size="sm">
                            View Gallery ({memory.images.length} photos)
                          </Button>
                        </CardContent>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-black text-foreground mb-2">{memory.title}</h2>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                            <Badge>{memory.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {memory.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {memory.participants} participants
                            </div>
                          </div>
                          <p className="text-muted-foreground">{memory.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {memory.images.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={image}
                              alt={`${memory.title} - Photo ${imgIndex + 1}`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              ))}
            </div>

            {filteredMemories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No memories found with selected filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedYear("all");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Memories;
