"use client";
import { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { getTimelineEntries } from "../../lib/timeline";
import { buildPieChartData } from "../../lib/stats";
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
    return buildPieChartData(entries, interactionLabels, interactionColors);
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
              >
                {chartData?.map((entry) => (
                  <Cell key={entry?.name} fill={entry?.color} />
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