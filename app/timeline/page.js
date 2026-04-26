"use client";

import { useEffect, useMemo, useState } from "react";
import InteractionIcon from "@/components/ui/InteractionIcon";
import { formatReadableDate } from "@/lib/date";
import { getTimelineEntries } from "@/lib/timeline";

export default function TimelinePage() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setEntries(getTimelineEntries());
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredEntries = useMemo(() => {
    let nextEntries = [...entries];

    if (selectedType !== "all") {
      nextEntries = nextEntries.filter((entry) => entry.type === selectedType);
    }

    if (searchText.trim()) {
      const query = searchText.toLowerCase();
      nextEntries = nextEntries.filter((entry) => entry.title.toLowerCase().includes(query));
    }

    nextEntries.sort((a, b) => {
      const left = new Date(a.date);
      const right = new Date(b.date);
      return sortOrder === "newest" ? right - left : left - right;
    });

    return nextEntries;
  }, [entries, searchText, selectedType, sortOrder]);

  return (
    <section>
      <h1 className="text-5xl font-black tracking-tight text-[#1f2b3f]">Timeline</h1>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <select
          className="select border-slate-200 bg-white"
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        <input
          type="text"
          className="input border-slate-200 bg-white"
          placeholder="Search by friend or interaction"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select
          className="select border-slate-200 bg-white"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <div className="mt-5 space-y-3">
        {filteredEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600">
                <InteractionIcon type={entry.type} />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1f2b3f]">{entry.title}</p>
                <p className="text-sm text-slate-500">{formatReadableDate(entry.date)}</p>
              </div>
            </div>
          </article>
        ))}

        {filteredEntries.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No timeline entry matches your filter.
          </div>
        ) : null}
      </div>
    </section>
  );
}