import { UserPlus } from "lucide-react";

export default function BannerSection() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
      <h1 className="text-balance text-4xl font-black tracking-tight text-[#1f2b3f] sm:text-5xl">
        Friends to keep close in your life
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br/> relationships that matter most.
      </p>
      <button className="btn btn-success mt-6 bg-[#1f5a49] text-white">
        <UserPlus size={16} />
        Add a Friend
      </button>
    </section>
  );
}