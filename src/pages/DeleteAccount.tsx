import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, ShieldAlert, Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getPageMeta } from "@/lib/seo";
import { SUPPORT_EMAIL } from "@/lib/site";

const deletionEmail = (account: string, reason: string) => {
  const subject = encodeURIComponent("Account deletion request");
  const body = encodeURIComponent(
    `Please permanently delete my Bsb Market account.\n\nAccount email or phone number: ${account}\nReason (optional): ${reason || "-"}\n\nI understand that deleting my account is permanent and that my listings, messages and saved items cannot be restored.`,
  );
  return `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
};

const DeleteAccount = () => {
  const [account, setAccount] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = account.trim().length > 3 && confirmed;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    window.location.href = deletionEmail(account.trim(), reason.trim());
  };

  return (
    <PageLayout
      breadcrumbs={getPageMeta("/delete-account").breadcrumbs}
      eyebrow="Account"
      title={<>Delete your <span className="text-primary">account</span></>}
      lead="Request permanent deletion of your Bsb Market account and the data linked to it. This can't be undone."
    >
      <div className="mx-auto max-w-2xl space-y-8">
        <section className="rounded-2xl bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
            <div className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <h2 className="font-semibold text-foreground">What gets deleted</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Your profile, login details and verification data</li>
                <li>Your listings, service offers and job posts</li>
                <li>Your messages, saved items and reviews</li>
              </ul>
              <h2 className="pt-2 font-semibold text-foreground">What we may keep</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Transaction and dispute records we must retain by law</li>
                <li>Anonymised data that can no longer identify you</li>
              </ul>
              <p className="pt-2">
                Requests are processed within 30 days. You will receive a confirmation email at the address on your
                account.
              </p>
            </div>
          </div>
        </section>

        {submitted ? (
          <section className="rounded-2xl bg-card p-6 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
            <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-primary" aria-hidden="true" />
            <h2 className="mb-2 text-lg font-bold text-foreground">Send the email to finish</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Your email app should have opened with your request filled in. Send it to complete the request. If it
              didn't open, email{" "}
              <a href={deletionEmail(account.trim(), reason.trim())} className="font-semibold text-primary hover:underline">
                {SUPPORT_EMAIL}
              </a>{" "}
              from the address on your account with the subject "Account deletion request".
            </p>
          </section>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="space-y-2">
              <label htmlFor="account" className="text-sm font-medium text-foreground">
                Account email or phone number
              </label>
              <input
                id="account"
                type="text"
                required
                autoComplete="email"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="you@example.com or 0803 000 0000"
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
                id="confirm"
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-input accent-primary"
              />
              <span>
                I understand that deleting my account is permanent and that my listings, messages and saved items
                cannot be restored.
              </span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-destructive px-4 py-3 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" /> Request account deletion
            </button>

            <p className="flex flex-wrap items-center justify-center gap-1 text-center text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              This opens an email to {SUPPORT_EMAIL}. Questions first?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact our team
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </PageLayout>
  );
};

export default DeleteAccount;
