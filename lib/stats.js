export function getInteractionTypeCounts(entries = []) {
  const acc = { call: 0, text: 0, video: 0 };

  for (const entry of entries) {
    const type = String(entry.type || "").toLowerCase().trim();

    if (type === "call") acc.call++;
    else if (type === "text") acc.text++;
    else if (type === "video") acc.video++;
  }

  return acc;
}

export function buildPieChartData(entries = [], labels, colors) {
  const counts = getInteractionTypeCounts(entries);

  return [
    {
      name: labels.call,
      value: counts.call,
      color: colors.call,
    },
    {
      name: labels.text,
      value: counts.text,
      color: colors.text,
    },
    {
      name: labels.video,
      value: counts.video,
      color: colors.video,
    },
  ];
}