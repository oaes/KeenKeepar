export default function SummaryCards({ stats }) {
  const cards = [
    { label: "Total Friends", value: stats.total },
    { label: "On Track", value: stats.onTrack },
    { label: "Need Attention", value: stats.overdue + stats.almostDue },
    { label: "Interactions This Month", value: stats.interactionsThisMonth },
  ];

  return (
    <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-4xl font-extrabold text-[#1f5a49]">{card.value}</p>
          <p className="mt-1 text-sm text-slate-500">{card.label}</p>
        </article>
      ))}
    </section>
  );
}