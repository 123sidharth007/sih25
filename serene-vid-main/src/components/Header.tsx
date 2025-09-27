import { Search, Settings, Focus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  focusMode: boolean;
  onFocusModeToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ focusMode, onFocusModeToggle, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Focus className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FocusTube
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search educational content..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-surface border-border focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant={focusMode ? "default" : "outline"}
              size="sm"
              onClick={onFocusModeToggle}
              className={`transition-all duration-300 ${
                focusMode 
                  ? "bg-secondary hover:bg-secondary-light text-white shadow-md" 
                  : "hover:bg-secondary/10 hover:text-secondary hover:border-secondary/20"
              }`}
            >
              <Focus className="w-4 h-4 mr-2" />
              {focusMode ? "Focus On" : "Focus Off"}
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}