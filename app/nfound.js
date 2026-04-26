import Link from "next/link";
import { House } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[50vh] place-items-center">
      <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">404</p>
        <h1 className="mt-3 text-4xl font-black text-[#1f2b3f]">Page not found</h1>
        <p className="mt-3 text-slate-500">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link href="/" className="btn btn-success mt-6 text-white">
          <House size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}