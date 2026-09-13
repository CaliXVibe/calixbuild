import {
  Building2,
  Car,
  Droplets,
  Home,
  Leaf,
  Sparkles,
  Thermometer,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

const tradeIcons: Record<string, LucideIcon> = {
  HVAC: Thermometer,
  Plumbing: Droplets,
  Electrical: Zap,
  Roofing: Home,
  Cleaning: Sparkles,
  Landscaping: Leaf,
  Restoration: Waves,
  "Mobile Auto": Car,
  "Property Managers": Building2,
};

export function TradeIcon({
  trade,
  className,
}: {
  trade: string;
  className?: string;
}) {
  const Icon = tradeIcons[trade] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
