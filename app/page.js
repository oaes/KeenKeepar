"use client";

import { useEffect, useMemo, useState } from "react";
import BannerSection from "../components/home/Banner.jsx";
import Summary from "../components/home/Summary.jsx"
import FriendsGrid from "../components/friends/FriendsGrid";
import { getTimelineEntries } from "../lib/timeline.js";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFriends() {
      try {
        const response = await fetch("/api/friends", { cache: "no-store" });
        const data = await response.json();
        setFriends(data);
      } finally {
        setIsLoading(false);
      }
    }

    loadFriends();
  }, []);

  const summaryStats = useMemo(() => {
    const total = friends.length;
    const onTrack = friends.filter((friend) => friend.status === "on-track").length;
    const almostDue = friends.filter((friend) => friend.status === "almost due").length;
    const overdue = friends.filter((friend) => friend.status === "overdue").length;
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    const interactionsThisMonth = getTimelineEntries().filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate.getMonth() === thisMonth && entryDate.getFullYear() === thisYear;
    }).length;

    return { total, onTrack, almostDue, overdue, interactionsThisMonth };
  }, [friends]);

  if (isLoading) {
    return (
      <section className="flex min-h-[45vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <span className="loading loading-spinner loading-lg text-[#1f5a49]" />
        <p className="mt-3 text-slate-500">Loading your friends...</p>
      </section>
    );
  }

  return (
    <>
      <BannerSection />
      <Summary stats={summaryStats} />
      <FriendsGrid friends={friends} />
    </>
  );
}