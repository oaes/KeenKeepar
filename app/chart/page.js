"use client";

import { useEffect, useMemo, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { interactionColors, interactionLabels } from "@/lib/constants";
import { getInteractionTypeCounts, getTimelineEntries } from "@/lib/timeline";

export default function StatsPage() {
  const [entries, setEntries] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setEntries(getTimelineEntries());
      setIsMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const counts = getInteractionTypeCounts(entries);

  const chartData = useMemo(
    () => [
      { name: interactionLabels.call, value: counts.call, color: interactionColors.call },
      { name: interactionLabels.text, value: counts.text, color: interactionColors.text },
      { name: interactionLabels.video, value: counts.video, color: interactionColors.video },
    ],
    [counts.call, counts.text, counts.video]
  );

  const totalInteractions = chartData.reduce((acc, item) => acc + item.value, 0);

  return (
    <section>
      <h1 className="text-5xl font-black tracking-tight text-[#1f2b3f]">Friendship Analytics</h1>

      <article className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1f5a49]">By Interaction Type</h2>

        <div className="mt-5 h-[360px]">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={40} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="grid h-full place-items-center rounded-xl bg-slate-50 text-slate-500">
              Loading chart...
            </div>
          )}
        </div>

        <p className="text-center text-slate-500">
          Total interactions tracked: <span className="font-semibold text-[#1f2b3f]">{totalInteractions}</span>
        </p>
      </article>
    </section>
  );
}