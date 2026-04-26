import { ChartColumn, Clock3, House } from "lucide-react";

export const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/timeline", label: "Timeline", icon: Clock3 },
  { href: "/stats", label: "Stats", icon: ChartColumn },
];

export const statusStyles = {
  "on-track": "bg-[#1f5a49]",
  "almost due": "bg-[#f59e0b]",
  overdue: "bg-[#ef4444]",
};

export const interactionLabels = {
  call: "Call",
  text: "Text",
  video: "Video",
};

export const interactionColors = {
  call: "#1f5a49",
  text: "#3c8c5a",
  video: "#8f7ae6",
};