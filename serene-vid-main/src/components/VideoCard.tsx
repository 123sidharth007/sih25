import { Star, Clock, User, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  author: string;
  views: string;
  uploadTime: string;
  contentRating: "excellent" | "good" | "basic";
  depthRating: number;
  category: string;
  focusMode?: boolean;
}

export function VideoCard({
  title,
  thumbnail,
  duration,
  author,
  views,
  uploadTime,
  contentRating,
  depthRating,
  category,
  focusMode = false
}: VideoCardProps) {
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "excellent": return "rating-excellent";
      case "good": return "rating-good";
      case "basic": return "rating-basic";
      default: return "rating-basic";
    }
  };

  const getRatingText = (rating: string) => {
    switch (rating) {
      case "excellent": return "Excellent";
      case "good": return "Good Quality";
      case "basic": return "Basic";
      default: return "Basic";
    }
  };

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-medium hover:bg-card-hover border-border/50 ${
      focusMode ? "focus-mode" : ""
    }`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Duration overlay */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          <Clock className="w-3 h-3 inline mr-1" />
          {duration}
        </div>

        {/* Content rating badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(contentRating)}`}>
          {getRatingText(contentRating)}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            <BookOpen className="w-3 h-3 mr-1" />
            {category}
          </Badge>
          
          {/* Depth rating stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < depthRating
                    ? "text-warning fill-warning"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">Depth</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="text-xs">
            {views} • {uploadTime}
          </div>
        </div>
      </div>
    </Card>
  );
}