import Link from "next/link";
import Image from "next/image";
import { statusStyles } from "@/lib/constants";

export default function FriendCard({ friend }) {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
        <h3 className="mt-3 text-lg font-bold text-[#1f2b3f]">{friend.name}</h3>
        <p className="mt-1 text-xs text-slate-500">{friend.days_since_contact}d ago</p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {friend.tags.map((tag) => (
            <span key={tag} className="badge badge-outline rounded-full border-0 bg-green-100 text-[#344d3f] font-semibold text-xs">
              {tag}
            </span>
          ))}
        </div>

        <span className={`badge mt-3 border-0 rounded-full text-white ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
}