import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Car,
  ChevronRight,
  Home,
  LayoutGrid,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  Search,
  Shirt,
  ShieldCheck,
  Smartphone,
  User,
  Wrench,
  ArrowRight,
} from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";
import globe from "@/assets/home/africa-globe.webp";

const STAGE_W = 860;
const STAGE_H = 500;

const tiles = [
  { icon: Smartphone, label: "Gadgets", color: "text-brand" },
  { icon: Shirt, label: "Goods", color: "text-brand" },
  { icon: Home, label: "Real Estate", color: "text-teal-500" },
  { icon: Car, label: "Automobiles", color: "text-brand" },
  { icon: Wrench, label: "Services", color: "text-brand" },
];

const Laptop = () => (
  <div className="absolute left-[46px] top-0 w-[620px]">
    {/* Lid */}
    <div className="rounded-t-[22px] rounded-b-md bg-[#0b0f1a] p-[11px] pb-[14px] shadow-[0_0_0_1.5px_#2b3550,0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="relative overflow-hidden rounded-[6px] bg-white" style={{ height: 382 }}>
        {/* Top bar */}
        <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-3">
          <div className="flex w-[118px] items-center gap-2">
            <img src={logoAsset} alt="" className="h-6 w-6 rounded-md" />
            <span className="text-[13px] font-extrabold text-navy-900">
              Bsb <span className="text-brand">Market</span>
            </span>
          </div>
          <div className="flex h-7 flex-1 items-center gap-2 rounded-full bg-slate-100 px-3 text-[9.5px] text-slate-400">
            <Search className="h-3 w-3" /> Search categories, cities and guides…
          </div>
          <span className="rounded-full bg-brand px-3 py-1.5 text-[9px] font-bold text-white">Get the app</span>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="w-[138px] shrink-0 space-y-1 px-3 py-3 text-[9.5px] font-medium text-slate-600">
            {[
              { i: Home, l: "Home", active: true },
              { i: LayoutGrid, l: "Categories" },
              { i: MapPin, l: "Cities" },
              { i: BookOpen, l: "Guides" },
              { i: ShieldCheck, l: "Safety tips" },
              { i: Mail, l: "Contact" },
            ].map(({ i: Icon, l, active }) => (
              <div
                key={l}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${active ? "bg-blue-50 text-navy-900 font-semibold" : ""}`}
              >
                <Icon className={`h-3.5 w-3.5 ${active ? "text-brand" : ""}`} />
                {l}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 pr-4 pt-3">
            <div className="relative h-[178px] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#041650_0%,#0a2fa0_100%)] px-5 py-5">
              <img src={globe} alt="" className="absolute -right-2 top-0 h-full w-auto opacity-95" />
              <p className="relative text-[21px] font-extrabold leading-[1.1] text-white">
                Buy, Sell &amp;
                <br />
                <span className="text-gradient-sky">Connect</span>
              </p>
              <p className="relative mt-2.5 w-[170px] text-[8.5px] leading-relaxed text-white/80">
                Discover great deals, grow your business and build valuable connections — all in one app.
              </p>
              <span className="relative mt-3 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-[8.5px] font-bold text-white">
                Explore now <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[11px] font-bold text-navy-900">Popular Categories</p>
              <p className="text-[8.5px] text-slate-400">View all →</p>
            </div>
            <div className="mt-2.5 grid grid-cols-5 gap-2">
              {tiles.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/60 py-3 shadow-sm">
                  <Icon className={`h-5 w-5 ${color}`} strokeWidth={2.2} />
                  <span className="text-[8px] font-medium text-slate-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Base */}
    <div className="relative -mx-[46px] h-[16px] rounded-b-[18px] bg-[linear-gradient(180deg,#e9edf4_0%,#b9c2d0_60%,#8a94a6_100%)] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.7)]">
      <div className="absolute left-1/2 top-0 h-[6px] w-[110px] -translate-x-1/2 rounded-b-lg bg-[#9aa3b3]" />
    </div>
  </div>
);

const Phone = () => (
  <div className="absolute right-0 top-[38px] w-[214px] rounded-[38px] bg-[#0b0f1a] p-[7px] shadow-[0_0_0_2px_#3a4560,0_0_0_5px_#11182a,0_40px_70px_-20px_rgba(0,0,0,0.85)]">
    <div className="relative overflow-hidden rounded-[32px] bg-white" style={{ height: 428 }}>
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-black" />
      <div className="flex items-center justify-between px-5 pt-[9px] text-[9px] font-semibold text-navy-900">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="flex items-end gap-[1.5px]">
            {[3, 5, 7, 9].map((h) => (
              <span key={h} className="w-[2px] rounded-sm bg-navy-900" style={{ height: h }} />
            ))}
          </span>
          <span className="ml-1 h-[8px] w-[15px] rounded-[3px] border border-navy-900 p-[1px]">
            <span className="block h-full w-[75%] rounded-[1px] bg-navy-900" />
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between px-4 pt-4">
        <span className="flex items-center gap-1.5">
          <img src={logoAsset} alt="" className="h-6 w-6 rounded-md" />
          <span className="text-[11.5px] font-extrabold text-navy-900">
            Bsb <span className="text-brand">Market</span>
          </span>
        </span>
        <Menu className="h-4 w-4 text-navy-900" />
      </div>
      <div className="px-4 pt-4">
        <p className="text-[19px] font-extrabold leading-[1.1] text-navy-900">
          Buy, Sell &amp;
          <br />
          <span className="text-brand">Connect</span>
        </p>
        <p className="mt-1.5 text-[8.5px] leading-snug text-slate-500">
          Trade, grow and build opportunities — anywhere, anytime.
        </p>
        <div className="mt-3 flex h-7 items-center gap-1.5 rounded-lg border border-slate-200 pl-2 pr-0.5 text-[8px] text-slate-400">
          <Search className="h-3 w-3" />
          <span className="flex-1">Search products, services…</span>
          <span className="grid h-6 w-6 place-items-center rounded-md bg-brand">
            <Search className="h-3 w-3 text-white" />
          </span>
        </div>
        <ul className="mt-2.5 divide-y divide-slate-100">
          {tiles.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 py-[7px]">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-blue-50">
                <Icon className="h-3.5 w-3.5 text-brand" strokeWidth={2.2} />
              </span>
              <span className="flex-1 text-[9px] font-medium text-navy-900">{label}</span>
              <ChevronRight className="h-3 w-3 text-slate-400" />
            </li>
          ))}
        </ul>
      </div>
      {/* Tab bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-around border-t border-slate-100 bg-white px-2 pb-4 pt-2 text-[7px] font-medium text-slate-400">
        {[
          { i: Home, l: "Home", a: true },
          { i: MessageCircle, l: "Messages" },
          { i: Plus, l: "Post" },
          { i: ListChecks, l: "Listings" },
          { i: User, l: "Profile" },
        ].map(({ i: Icon, l, a }) =>
          l === "Post" ? (
            <span key={l} className="-mt-3 grid h-8 w-8 place-items-center rounded-full bg-brand shadow-lg shadow-brand/40">
              <Icon className="h-4 w-4 text-white" />
            </span>
          ) : (
            <span key={l} className={`flex flex-col items-center gap-0.5 ${a ? "text-brand" : ""}`}>
              <Icon className="h-3.5 w-3.5" />
              {l}
            </span>
          ),
        )}
      </div>
      <div className="absolute bottom-1.5 left-1/2 h-[3px] w-[70px] -translate-x-1/2 rounded-full bg-navy-900" />
    </div>
  </div>
);

/** Laptop (bsbmarket.com) + phone (the app), drawn in HTML so they stay sharp at any size. */
const DeviceShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / STAGE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full" style={{ height: STAGE_H * scale }} aria-hidden="true">
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}>
        <Laptop />
        <Phone />
      </div>
    </div>
  );
};

export default DeviceShowcase;
