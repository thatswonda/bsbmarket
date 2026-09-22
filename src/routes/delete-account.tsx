import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ShieldAlert, Trash2, CheckCircle2 } from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";

const TITLE = "Delete Your Account | BSB Market";
const DESCRIPTION =
  "Request permanent deletion of your BSB Market account and associated data, and learn what happens after your request is submitted.";

export const Route = createFileRoute("/delete-account")({
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
  component: DeleteAccount,
});

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = email.trim().length > 3 && email.includes("@") && confirmed;

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

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">Delete your account</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Submit a request to permanently delete your BSB Market account. This action cannot be
          undone.
        </p>

        <div
          className="rounded-2xl bg-card p-5 mb-8"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">What gets deleted</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your profile, login details and verification data</li>
                <li>Your listings, service offers and job posts</li>
                <li>Your messages, saved items and reviews</li>
              </ul>
              <p className="font-semibold text-foreground pt-2">What we may keep</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Transaction and dispute records we must retain by law</li>
                <li>Anonymised data that can no longer identify you</li>
              </ul>
              <p className="pt-2">
                Requests are processed within 30 days. You will receive a confirmation email at the
                address on your account.
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl bg-card p-6 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-lg font-bold text-foreground mb-2">Request received</h2>
            <p className="text-sm text-muted-foreground">
              We have logged your deletion request for <span className="font-medium">{email}</span>.
              Our team will verify your identity and email you once the account has been removed.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (canSubmit) setSubmitted(true);
            }}
            className="rounded-2xl bg-card p-6 space-y-5"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Account email or phone number
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="text-sm font-medium text-foreground">
                Reason for leaving <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="reason"
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell us how we could have done better"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
              />
              <span>
                I understand that deleting my account is permanent and that my listings, messages and
                saved items cannot be restored.
              </span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-destructive px-4 py-3 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="w-4 h-4" /> Request account deletion
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Questions first?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact our team
              </Link>{" "}
              at team@bsbmarket.com.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
