import { Link, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import FaqList from "@/components/FaqList";
import NotFound from "@/pages/NotFound";
import { getPageMeta } from "@/lib/seo";
import { getGuide, guides } from "@/content/guides";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const GuidePage = () => {
  const { slug } = useParams();
  const guide = getGuide(slug);
  if (!guide) return <NotFound />;

  const more = guides.filter((g) => g.slug !== guide.slug);

  return (
    <PageLayout
      breadcrumbs={getPageMeta(`/guides/${guide.slug}`).breadcrumbs}
      eyebrow={guide.eyebrow}
      title={guide.heading}
      lead={guide.lead}
    >
      <article>
        <p className="text-xs text-muted-foreground mb-6">
          By the Bsb Market team · Updated <time dateTime={guide.dateModified}>{formatDate(guide.dateModified)}</time>
        </p>

        <section aria-labelledby="quick-answer" className="rounded-2xl border-l-4 border-primary bg-card p-5 sm:p-6" style={{ boxShadow: "var(--card-shadow)" }}>
          <h2 id="quick-answer" className="text-sm font-bold uppercase tracking-[0.14em] text-primary mb-2">Quick answer</h2>
          <p className="text-foreground leading-relaxed">{guide.quickAnswer}</p>
        </section>

        {guide.sections.map((s) => {
          const ListTag = s.ordered ? "ol" : "ul";
          return (
            <section key={s.heading} className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-foreground leading-relaxed mb-4">{p}</p>
              ))}
              {s.list && (
                <ListTag className="space-y-3">
                  {s.list.map((item, i) => (
                    <li key={item} className="flex gap-3 bg-card rounded-xl p-4 text-sm sm:text-base text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
                      {s.ordered ? (
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0" aria-hidden="true">{i + 1}</span>
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      {item}
                    </li>
                  ))}
                </ListTag>
              )}
            </section>
          );
        })}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-5">Frequently asked questions</h2>
          <FaqList faqs={guide.faqs} />
        </section>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Related</h2>
        <ul className="flex flex-wrap gap-2">
          {guide.related.map((r) => (
            <li key={r.path}>
              <Link to={r.path} className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">More guides</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {more.map((g) => (
            <li key={g.slug} className="bg-card rounded-xl p-4 text-sm" style={{ boxShadow: "var(--card-shadow)" }}>
              <Link to={`/guides/${g.slug}`} className="font-semibold text-primary hover:underline">{g.heading}</Link>
            </li>
          ))}
        </ul>
      </section>

      <AppCta />
    </PageLayout>
  );
};

export default GuidePage;
