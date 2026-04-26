import { MessageSquareMore, Phone, Video } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1f5a49] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-extrabold tracking-tight">KeenKeeper</h2>
          <p className="mt-5 max-w-2xl text-sm text-emerald-100/90">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="mt-8 text-2xl font-semibold">Social Links</h3>
          <div className="mt-4 flex items-center gap-3">
            <button
              className="btn btn-circle btn-sm border-none bg-white text-[#243746] hover:bg-slate-100"
              aria-label="Call Link"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </button>
            <button
              className="btn btn-circle btn-sm border-none bg-white text-[#243746] hover:bg-slate-100"
              aria-label="Text Link"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </button>
            <button
              className="btn btn-circle btn-sm border-none bg-white text-[#243746] hover:bg-slate-100"
              aria-label="Video Link"
            >
              <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-emerald-700/60 pt-6 text-sm text-emerald-100/70 sm:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}