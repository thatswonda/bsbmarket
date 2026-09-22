import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Mail, Send, Clock, MessageSquare } from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";
import { z } from "zod";

const TITLE = "Contact Us | BSB Market";
const DESCRIPTION =
  "Get in touch with the BSB Market team — email us directly at team@bsbmarket.com or send us a message and we'll reply within 24 hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message")
    .max(1000, "Message must be under 1000 characters"),
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`BSB Market enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n—\nFrom: ${parsed.data.name}\nReply to: ${parsed.data.email}`
    );
    window.location.href = `mailto:team@bsbmarket.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <img
            src={logoAsset}
            alt="BSB Market logo"
            className="w-10 h-10 rounded-lg object-contain"
          />
          <span className="text-lg font-bold text-foreground">
            Bsb <span className="text-primary">Market</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">Contact us</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Questions about the marketplace, your account, or getting started? We'd love to hear from
          you. Reach us by email or send a message below — our team replies within 24 hours.
        </p>

        <div
          className="rounded-2xl bg-card p-5 mb-8 flex items-start gap-3"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Email us directly</p>
            <p>
              Write to{" "}
              <a
                href="mailto:team@bsbmarket.com"
                className="text-primary font-medium hover:underline"
              >
                team@bsbmarket.com
              </a>{" "}
              and we'll get back to you as soon as possible.
            </p>
            <p className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Support hours: Monday – Saturday, 9am – 6pm
            </p>
          </div>
        </div>

        {sent ? (
          <div
            className="rounded-2xl bg-card p-6 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-lg font-bold text-foreground mb-2">Your email app is opening</h2>
            <p className="text-sm text-muted-foreground mb-4">
              We've prepared your message to team@bsbmarket.com. Just hit send in your email app and
              we'll reply within 24 hours.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-sm font-medium text-primary hover:underline"
            >
              Write another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 space-y-5"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 resize-none"
              />
              <p className="text-xs text-muted-foreground text-right">{message.length}/1000</p>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="w-4 h-4" /> Send message
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Sending opens your email app with the message ready to go to team@bsbmarket.com.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
