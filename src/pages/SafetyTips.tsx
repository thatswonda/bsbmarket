import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";

const sections = [
  {
    heading: "Tips for buyers",
    tips: [
      "Meet the seller in a busy, public place during the day, such as a mall or a bank. Bring someone with you for expensive items.",
      "Inspect and test the item before you pay. For phones, check that the device is not iCloud or Google locked and that the IMEI matches the box.",
      "Avoid paying in advance to someone you have not met or verified, especially if the deal seems too good to be true.",
      "Keep your conversation inside the BSB Market app so there is a record of what was agreed.",
      "Ask for a receipt or written agreement, especially for property, vehicles and contracts.",
    ],
  },
  {
    heading: "Tips for sellers",
    tips: [
      "Do not release an item until you have confirmed payment has reached your account. Fake payment alerts are a common scam.",
      "Never share your bank PIN, OTP or password with anyone, including people claiming to be BSB Market staff.",
      "Use clear photos and honest descriptions. Accurate listings build trust and lead to good reviews.",
      "Meet buyers in public places and avoid inviting strangers to your home.",
    ],
  },
  {
    heading: "Property, cars and investments",
    tips: [
      "Inspect property in person and verify land documents at the relevant land registry before paying any fee.",
      "Take a trusted mechanic to inspect a vehicle and confirm the papers and chassis number before you buy.",
      "Treat promises of guaranteed or unusually high returns as a warning sign. Get legal advice for share or partnership deals.",
    ],
  },
  {
    heading: "Jobs and services",
    tips: [
      "Genuine employers do not ask for money to give you a job. Never pay an application or training fee to get hired.",
      "Agree on the scope, timeline and price of any service in writing before work starts.",
      "For larger jobs, pay in milestones as work is completed.",
    ],
  },
];

const SafetyTips = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/safety-tips").breadcrumbs}
    eyebrow="Trust & safety"
    title={<>Safe buying and selling <span className="text-primary">tips</span></>}
    lead="Most people on BSB Market trade honestly, but a few simple habits keep you safe from scams when you buy, sell, hire or invest online."
  >
    <div className="space-y-12">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="text-2xl font-bold text-foreground mb-5">{s.heading}</h2>
          <ul className="space-y-3">
            {s.tips.map((tip) => (
              <li key={tip} className="flex gap-3 bg-card rounded-xl p-4 text-sm sm:text-base text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className="space-y-3 text-foreground leading-relaxed">
        <h2 className="text-2xl font-bold">Report a problem</h2>
        <p>
          If you see a suspicious listing or have been contacted by a scammer, report it in the app or{" "}
          <Link to="/contact" className="text-primary font-semibold hover:underline">contact our support team</Link>. Read our{" "}
          <Link to="/terms" className="text-primary font-semibold hover:underline">Terms of Use</Link> for the full rules of the marketplace.
        </p>
      </section>
    </div>
    <AppCta />
  </PageLayout>
);

export default SafetyTips;
