import { useNavigate } from "react-router-dom";
import { BookOpen, LayoutGrid, MapPin } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { categories } from "@/content/categories";
import { guides } from "@/content/guides";
import { cities, cityPath } from "@/content/cities";

interface SiteSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Quick search across categories, guides and city pages (opened from the navbar). */
const SiteSearch = ({ open, onOpenChange }: SiteSearchProps) => {
  const navigate = useNavigate();
  const go = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search categories, guides and cities…" />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>Nothing found. Try “cars”, “jobs” or “Lagos”.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categories.map((c) => (
            <CommandItem key={c.slug} value={`${c.name} ${c.summary}`} onSelect={() => go(`/categories/${c.slug}`)}>
              <LayoutGrid className="mr-3 text-brand" />
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{c.name}</p>
                <p className="truncate text-xs text-muted-foreground">{c.summary}</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Cities">
          <CommandItem value="Uyo Akwa Ibom" onSelect={() => go("/buy-and-sell-in-uyo")}>
            <MapPin className="mr-3 text-brand" />
            Buy & sell in Uyo
          </CommandItem>
          {cities.map((c) => (
            <CommandItem key={c.slug} value={`${c.name} ${c.state}`} onSelect={() => go(cityPath(c))}>
              <MapPin className="mr-3 text-brand" />
              Buy & sell in {c.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Guides">
          {guides.map((g) => (
            <CommandItem key={g.slug} value={g.name} onSelect={() => go(`/guides/${g.slug}`)}>
              <BookOpen className="mr-3 text-brand" />
              {g.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SiteSearch;
