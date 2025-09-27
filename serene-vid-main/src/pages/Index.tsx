import { useState } from "react";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";

// Mock data for educational videos
const mockVideos = [
  {
    id: 1,
    title: "Advanced React Patterns: Custom Hooks and Context",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    duration: "45:32",
    author: "Tech Academy",
    views: "125K views",
    uploadTime: "2 days ago",
    contentRating: "excellent" as const,
    depthRating: 5,
    category: "Programming"
  },
  {
    id: 2,
    title: "Understanding Machine Learning: Neural Networks Explained",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    duration: "32:15",
    author: "AI Learning Hub",
    views: "89K views",
    uploadTime: "1 week ago",
    contentRating: "excellent" as const,
    depthRating: 4,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Complete Guide to Data Structures and Algorithms",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    duration: "28:45",
    author: "CodeMaster",
    views: "234K views",
    uploadTime: "3 days ago",
    contentRating: "good" as const,
    depthRating: 4,
    category: "Computer Science"
  },
  {
    id: 4,
    title: "Quantum Physics Fundamentals: Wave-Particle Duality",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    duration: "52:18",
    author: "Physics World",
    views: "67K views",
    uploadTime: "5 days ago",
    contentRating: "excellent" as const,
    depthRating: 5,
    category: "Physics"
  },
  {
    id: 5,
    title: "Introduction to Blockchain Technology",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    duration: "24:30",
    author: "Crypto Education",
    views: "156K views",
    uploadTime: "1 week ago",
    contentRating: "good" as const,
    depthRating: 3,
    category: "Technology"
  },
  {
    id: 6,
    title: "Calculus Made Simple: Derivatives and Integration",
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop",
    duration: "38:22",
    author: "Math Academy",
    views: "198K views",
    uploadTime: "4 days ago",
    contentRating: "excellent" as const,
    depthRating: 4,
    category: "Mathematics"
  },
  {
    id: 7,
    title: "Web Development Basics: HTML, CSS, JavaScript",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    duration: "42:15",
    author: "WebDev Pro",
    views: "287K views",
    uploadTime: "1 day ago",
    contentRating: "good" as const,
    depthRating: 3,
    category: "Web Development"
  },
  {
    id: 8,
    title: "Psychology of Learning: Memory and Retention Techniques",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    duration: "36:45",
    author: "Mind Studies",
    views: "92K views",
    uploadTime: "6 days ago",
    contentRating: "excellent" as const,
    depthRating: 5,
    category: "Psychology"
  }
];

const Index = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = mockVideos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const focusFilteredVideos = focusMode 
    ? filteredVideos.filter(video => video.contentRating === "excellent" && video.depthRating >= 4)
    : filteredVideos;

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      focusMode ? "bg-surface" : "bg-background"
    }`}>
      <Header
        focusMode={focusMode}
        onFocusModeToggle={() => setFocusMode(!focusMode)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-6">
        {/* Focus Mode Indicator */}
        {focusMode && (
          <div className="mb-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
            <div className="flex items-center gap-2 text-secondary">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="font-medium">Focus Mode Active</span>
              <span className="text-sm text-muted-foreground">
                - Showing only high-quality, in-depth educational content
              </span>
            </div>
          </div>
        )}

        {/* Stats */}
        {!focusMode && (
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Distraction-Free Learning Platform
            </h2>
            <p className="text-muted-foreground">
              {mockVideos.length} curated educational videos • Content rated for quality and depth
            </p>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {focusFilteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              author={video.author}
              views={video.views}
              uploadTime={video.uploadTime}
              contentRating={video.contentRating}
              depthRating={video.depthRating}
              category={video.category}
              focusMode={focusMode}
            />
          ))}
        </div>

        {focusFilteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              {searchQuery 
                ? `No videos found matching "${searchQuery}"` 
                : "No videos available"
              }
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;