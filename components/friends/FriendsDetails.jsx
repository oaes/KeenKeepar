"use client";

import { useState } from "react";
import Image from "next/image";
import { Archive, BellRing, MessageSquareMore, Pencil, Phone, Trash2, Video } from "lucide-react";
import { addInteractionEntry } from "@/lib/timeline";
import { formatReadableDate } from "@/lib/date";
import { statusStyles } from "@/lib/constants";
import { useToast } from "@/components/ui/ToastProvider";

const quickActions = [
  { type: "call", label: "Call", icon: Phone },
  { type: "text", label: "Text", icon: MessageSquareMore },
  { type: "video", label: "Video", icon: Video },
];

export default function FriendDetailsClient({ friend }) {
  const { pushToast } = useToast();
  const [latestAction, setLatestAction] = useState("");

  const handleQuickCheckIn = (type) => {
    const newEntry = addInteractionEntry(type, friend);
    if (!newEntry) {
      return;
    }

    setLatestAction(newEntry.title);
    pushToast(`${newEntry.title} added to timeline`);
  };

  return (
    <section className="grid gap-5 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="h-20 w-20 rounded-full object-cover"
            />
            <h1 className="mt-4 text-3xl font-bold text-[#1f2b3f]">{friend.name}</h1>
            <span className={`badge mt-3 border-0 text-white ${statusStyles[friend.status]}`}>
              {friend.status}
            </span>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag) => (
                <span key={tag} className="badge badge-outline bg-green-100 border-slate-300 text-slate-500">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm italic text-slate-500">&ldquo;{friend.bio}&rdquo;</p>
            <p className="mt-2 text-sm text-slate-500">Preferred: {friend.email}</p>
          </div>
        </article>

        <button className="btn w-full justify-center border-slate-200 bg-white text-slate-700 hover:bg-slate-100">
          <BellRing size={16} />
          Snooze 2 Weeks
        </button>
        <button className="btn w-full justify-center border-slate-200 bg-white text-slate-700 hover:bg-slate-100">
          <Archive size={16} />
          Archive
        </button>
        <button className="btn w-full justify-center border-red-100 bg-white text-red-500 hover:bg-red-50">
          <Trash2 size={16} />
          Delete
        </button>
      </aside>

      <div className="space-y-4">
        <section className="grid gap-3 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-extrabold text-[#1f5a49]">{friend.days_since_contact}</p>
            <p className="text-slate-500">Days Since Contact</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-extrabold text-[#1f5a49]">{friend.goal}</p>
            <p className="text-slate-500">Goal (Days)</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-extrabold text-[#1f5a49]">{formatReadableDate(friend.next_due_date)}</p>
            <p className="text-slate-500">Next Due</p>
          </article>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#1f5a49]">Relationship Goal</h2>
            <button className="btn btn-sm border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200">
              <Pencil size={14} />
              Edit
            </button>
          </div>
          <p className="mt-4  text-slate-600">
            Connect every <span className="font-bold text-[#1f2b3f]">{friend.goal} days</span>
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-[#1f5a49]">Quick Check-In</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.type}
                  onClick={() => handleQuickCheckIn(action.type)}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-4 text-[#1f2b3f] transition hover:border-[#1f5a49] hover:bg-emerald-50"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Icon size={20} />
                    <span className="font-medium">{action.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {latestAction ? (
            <p className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-[#1f5a49]">Latest update: {latestAction}</p>
          ) : null}
        </section>
      </div>
    </section>
  );
}