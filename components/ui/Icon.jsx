import { MessageSquareMore, Phone, Video } from "lucide-react";
import Image from "next/image";

export default function InteractionIcon({ type, size = 18 }) {
  if (type === "call") {
    return <Image src="/call.png" alt="Call" width={size} height={size} />;
  }

  if (type === "video") {
    return <Image src="/video.png" alt="Video" width={size} height={size} />;
  }

  return <Image src="/text.png" alt="Text" width={size} height={size} />;
}