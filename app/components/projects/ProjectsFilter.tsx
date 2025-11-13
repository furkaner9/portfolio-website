"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/app/data/projects";

// Get unique categories and technologies
const categories = Array.from(
  new Set(projectsData.map((p) => p.category))
);

const allTechnologies = Array.from(
  new Set(projectsData.flatMap((p) => p.technologies))
);

interface ProjectsFilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  category: string;
  technologies: string[];
  status: string;
}

export function ProjectsFilter({ onFilterChange }: ProjectsFilterProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    emitFilterChange({ search: value });
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    emitFilterChange({ category: value });
  };

  const handleTechnologyToggle = (tech: string) => {
    const newTechs = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter((t) => t !== tech)
      : [...selectedTechnologies, tech];
    
    setSelectedTechnologies(newTechs);
    emitFilterChange({ technologies: newTechs });
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    emitFilterChange({ status: value });
  };

  const emitFilterChange = (updates: Partial<FilterState>) => {
    if (onFilterChange) {
      onFilterChange({
        search: updates.search ?? search,
        category: updates.category ?? selectedCategory,
        technologies: updates.technologies ?? selectedTechnologies,
        status: updates.status ?? selectedStatus,
      });
    }
  };

  const handleClearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedTechnologies([]);
    setSelectedStatus("all");
    
    if (onFilterChange) {
      onFilterChange({
        search: "",
        category: "all",
        technologies: [],
        status: "all",
      });
    }
  };

  const hasActiveFilters =
    search !== "" ||
    selectedCategory !== "all" ||
    selectedTechnologies.length > 0 ||
    selectedStatus !== "all";

  return (
    <div className="space-y-6 sticky top-24">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Search className="w-5 h-5" />
            Ara
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Proje adı veya teknoloji..."
              className="pl-10"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Kategori
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedCategory} onValueChange={handleCategoryChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="cat-all" />
              <Label htmlFor="cat-all" className="cursor-pointer">
                Tümü
              </Label>
            </div>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={`cat-${category}`} />
                <Label
                  htmlFor={`cat-${category}`}
                  className="cursor-pointer capitalize"
                >
                  {category.replace("-", " ")}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Status Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Durum</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedStatus} onValueChange={handleStatusChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="status-all" />
              <Label htmlFor="status-all" className="cursor-pointer">
                Tümü
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="completed" id="status-completed" />
              <Label htmlFor="status-completed" className="cursor-pointer">
                Tamamlandı
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-progress" id="status-progress" />
              <Label htmlFor="status-progress" className="cursor-pointer">
                Devam Ediyor
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Technologies Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Teknolojiler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {allTechnologies.slice(0, 15).map((tech) => (
              <Badge
                key={tech}
                variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors mr-2 mb-2"
                onClick={() => handleTechnologyToggle(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full"
          onClick={handleClearFilters}
        >
          <X className="w-4 h-4 mr-2" />
          Filtreleri Temizle
        </Button>
      )}
    </div>
  );
}