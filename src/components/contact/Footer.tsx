import { MapPin } from "lucide-react";

interface FooterProps {
  name: string;
  role: string;
  location: string;
}

export default function Footer({ name, role, location }: FooterProps) {
  return (
    <footer className="-mx-6 border-t border-white/[0.07] px-6 py-7 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
      <div className="flex flex-col items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>{name}</span>
          <span className="text-neutral-700">·</span>
          <span>{role}</span>
        </div>

        <div className="inline-flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-neutral-600" />
          <span>{location}</span>
        </div>
      </div>
    </footer>
  );
}

