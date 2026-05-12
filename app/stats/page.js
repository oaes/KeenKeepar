"use client";

import { useEffect, useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getTimelineEntries } from "../../lib/timeline";
import { interactionColors, interactionLabels } from "../../lib/constant";

export default function StatsPage() {
  const [entries, setEntries] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const data = getTimelineEntries();

    console.log("ENTRIES:", data);

    setEntries(data);
    setMounted(true);
  }, []);

  const chartData = useMemo(() => {
    const counts = {};

    entries.forEach((entry) => {
      const type = entry.type?.toLowerCase().trim();

      if (!type) return;

      counts[type] = (counts[type] || 0) + 1;
    });

    return Object.keys(counts).map((type) => ({
      name: interactionLabels[type] || type,
      value: counts[type],
      color: interactionColors[type] || "#8884d8",
    }));
  }, [entries]);

  const total = chartData.reduce((a, b) => a + b.value, 0);

  return (
    <div>
      <h1>Stats</h1>

      <div style={{ width: "100%", height: 360 }}>
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                label
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <p>Total: {total}</p>
    </div>
  );
}