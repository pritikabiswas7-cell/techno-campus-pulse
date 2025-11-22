import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Trophy, Clock, Download, Medal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const studentInfo = {
    name: "Rajesh Kumar",
    rollNumber: "21CSE045",
    department: "Computer Science",
    semester: "6th",
    marPoints: 245,
    rank: 12,
    totalStudents: 450
  };

  const upcomingEvents = [
    {
      title: "Techno Hackathon 2024",
      date: "March 15, 2024",
      time: "9:00 AM",
      marPoints: 50,
      status: "registered"
    },
    {
      title: "Techno Open Mic",
      date: "March 18, 2024",
      time: "6:00 PM",
      marPoints: 20,
      status: "registered"
    }
  ];

  const pastEvents = [
    {
      title: "Techno Workshop: Python",
      date: "Feb 10, 2024",
      marPoints: 40,
      attended: true,
      certificateAvailable: true
    },
    {
      title: "Techno Sports Day",
      date: "Feb 5, 2024",
      marPoints: 35,
      attended: true,
      certificateAvailable: true
    },
    {
      title: "Techno Cultural Night",
      date: "Jan 28, 2024",
      marPoints: 30,
      attended: true,
      certificateAvailable: false
    }
  ];

  const badges = [
    { name: "Early Bird", description: "Registered for 5+ events", icon: "🐦", earned: true },
    { name: "Active Participant", description: "Attended 10+ events", icon: "⭐", earned: true },
    { name: "Volunteer Hero", description: "20+ volunteer hours", icon: "🦸", earned: true },
    { name: "Tech Enthusiast", description: "Attended 5+ technical events", icon: "💻", earned: true },
    { name: "Culture Champion", description: "Attended 5+ cultural events", icon: "🎭", earned: false },
    { name: "Sports Star", description: "Participated in 3+ sports events", icon: "⚽", earned: false }
  ];

  const volunteerHours = [
    { event: "Techno Fest 2024", hours: 8, date: "Feb 15, 2024" },
    { event: "Workshop Support", hours: 4, date: "Feb 10, 2024" },
    { event: "Guest Lecture Coordination", hours: 3, date: "Jan 25, 2024" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 bg-secondary/30">
        <div className="container">
          {/* Profile Header */}
          <div className="mb-8 animate-fade-in">
            <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center text-3xl font-black">
                      {studentInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h1 className="text-3xl font-black mb-1">{studentInfo.name}</h1>
                      <p className="text-primary-foreground/80">
                        {studentInfo.rollNumber} • {studentInfo.department} • {studentInfo.semester} Semester
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black">{studentInfo.marPoints}</div>
                    <div className="text-primary-foreground/80 text-sm">MAR Points</div>
                    <div className="text-primary-foreground/60 text-xs mt-1">
                      Rank #{studentInfo.rank} of {studentInfo.totalStudents}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">{upcomingEvents.length}</div>
                <div className="text-sm text-muted-foreground">Upcoming Events</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">{pastEvents.length}</div>
                <div className="text-sm text-muted-foreground">Events Attended</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Medal className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">{badges.filter(b => b.earned).length}</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">
                  {volunteerHours.reduce((acc, v) => acc + v.hours, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Volunteer Hours</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="events" className="animate-fade-in">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} • {event.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <Award className="h-4 w-4" />
                            {event.marPoints} MAR
                          </div>
                        </div>
                        <Badge variant="secondary">Registered</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Past Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pastEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-accent font-semibold">+{event.marPoints} MAR</div>
                        {event.certificateAvailable && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Badges Tab */}
            <TabsContent value="badges">
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className={`p-6 border rounded-lg ${
                          badge.earned 
                            ? 'border-accent bg-accent/5' 
                            : 'border-border bg-muted/30 opacity-60'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{badge.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1">{badge.name}</h3>
                            <p className="text-sm text-muted-foreground">{badge.description}</p>
                            {badge.earned && (
                              <Badge variant="secondary" className="mt-2">Earned</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Progress to Next Badge</span>
                      <span className="text-sm text-muted-foreground">15/20 hours</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  {volunteerHours.map((volunteer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{volunteer.event}</h3>
                        <p className="text-sm text-muted-foreground">{volunteer.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Clock className="h-4 w-4" />
                        {volunteer.hours} hours
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Your Certificates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pastEvents
                    .filter(event => event.certificateAvailable)
                    .map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 bg-gradient-primary rounded flex items-center justify-center">
                            <Award className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                            <Badge variant="secondary" className="mt-1">Participation Certificate</Badge>
                          </div>
                        </div>
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
