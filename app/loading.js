export default function Loading() {
  return (
    <section className="flex min-h-[45vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white">
      <span className="loading loading-bars loading-lg text-[#1f5a49]" />
      <p className="mt-3 text-slate-500">Preparing your dashboard...</p>
    </section>
  );
}