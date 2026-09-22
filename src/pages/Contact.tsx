import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";

const SUPPORT_EMAIL = "team@bsbmarket.com";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const topic = String(form.get("topic") || "General enquiry");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`[${topic}] Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SUPPORT_EMAIL)}&su=${subject}&body=${body}`;

    setSubmitted(true);
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9fe] text-foreground">
      <header className="relative z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="BSB Market home">
            <img src={logoAsset} alt="" className="h-9 w-9 rounded-xl object-contain sm:h-10 sm:w-10" />
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Bsb <span className="text-primary">Market</span>
            </span>
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden" aria-hidden="true">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              <MessageCircle className="h-3.5 w-3.5" /> We’re here to help
            </span>
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Let’s start a <span className="text-primary">conversation.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Questions about the marketplace, your account, or getting started? Send us a note and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_30px_80px_-35px_rgba(30,64,175,0.35)] lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="relative overflow-hidden bg-gradient-to-br from-[#123a92] via-[#1456c8] to-[#2474eb] p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full border-[50px] border-white/[0.06]" aria-hidden="true" />
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/[0.06]" aria-hidden="true" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Contact details</p>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Talk to a real person.</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100">
                  Whether you’re buying, selling, or building your business on BSB Market, our support team is ready to help.
                </p>

                <div className="mt-9 space-y-5">
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-lg shadow-blue-950/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-blue-100">Email us directly</span>
                      <span className="mt-1 block break-all text-sm font-semibold sm:text-base">{SUPPORT_EMAIL}</span>
                    </span>
                  </a>

                  <div className="flex items-start gap-4 px-1">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Clock3 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-blue-100">Support hours</p>
                      <p className="mt-1 text-sm font-semibold sm:text-base">Monday – Saturday</p>
                      <p className="text-sm text-blue-100">9:00 AM – 6:00 PM WAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 px-1">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-blue-100">Office</p>
                      <p className="mt-1 text-sm font-semibold sm:text-base">23 Urua Udofia, Uyo</p>
                      <p className="text-sm text-blue-100">Akwa Ibom State, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-2 border-t border-white/15 pt-6 text-xs text-blue-100">
                  <ShieldCheck className="h-4 w-4" /> Your information stays private and secure.
                </div>
              </div>
            </aside>

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-sm font-bold text-primary">SEND A MESSAGE</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">How can we help?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">Tell us a little about your question and we’ll point you in the right direction.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Your name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. Ada Okafor"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm font-normal outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-700">
                    Email address
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm font-normal outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-slate-700">
                  What can we help with?
                  <select
                    name="topic"
                    defaultValue="General enquiry"
                    className="mt-2 h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm font-normal text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option>General enquiry</option>
                    <option>Account support</option>
                    <option>Buying or selling</option>
                    <option>Payments and refunds</option>
                    <option>Report a problem</option>
                    <option>Business partnership</option>
                  </select>
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Share the details of your request..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal leading-6 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </label>

                <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    {submitted && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                    {submitted ? "Gmail should now be open in a new tab." : "We usually reply within one business day."}
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-5 text-center backdrop-blur sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-slate-900">Looking for a quick answer?</p>
              <p className="mt-1 text-sm text-slate-500">Our frequently asked questions cover accounts, listings, payments, and more.</p>
            </div>
            <Link to="/#faq" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">
              Visit the FAQ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} BSB Market, a product of BSB Global Tech Ltd.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="transition-colors hover:text-primary">Terms of Use</Link>
            <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
