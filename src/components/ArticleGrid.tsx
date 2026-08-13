import { useEffect, useMemo, useState } from "react";

export interface ArticleCardData {
  href: string;
  title: string;
  excerpt?: string;
  image?: string;
  categories: string[];
}

interface Props {
  articles: ArticleCardData[];
  /** Show the category filter row */
  filters?: boolean;
}

const slugify = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export default function ArticleGrid({ articles, filters = false }: Props) {
  const [active, setActive] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Map<string, string>();
    for (const a of articles) for (const c of a.categories) set.set(slugify(c), c);
    return [...set.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [articles]);

  // Sync filter with URL hash (e.g. /blog/#ux) so filtered views are shareable.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      setActive(h && categories.some(([slug]) => slug === h) ? h : "all");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [categories]);

  const select = (slug: string) => {
    setActive(slug);
    history.replaceState(null, "", slug === "all" ? window.location.pathname : `#${slug}`);
  };

  const shown =
    active === "all"
      ? articles
      : articles.filter((a) => a.categories.some((c) => slugify(c) === active));

  return (
    <div>
      {filters && (
        <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="mr-2 text-sm font-bold text-neutral-900">Filter</span>
          <FilterLink label="All" active={active === "all"} onClick={() => select("all")} />
          {categories.map(([slug, label]) => (
            <FilterLink
              key={slug}
              label={label}
              active={active === slug}
              onClick={() => select(slug)}
            />
          ))}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((a, i) => (
          <a
            key={a.href}
            href={a.href}
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-none bg-neutral-900 p-7 md:min-h-[420px] md:p-8"
          >
            {a.image && (
              <img
                src={a.image}
                alt=""
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10"
              aria-hidden="true"
            />
            <div className="relative">
              {a.categories.length > 0 && (
                <p className="mb-2 text-xs font-bold tracking-wide text-white/70 uppercase">
                  {a.categories.join(" · ")}
                </p>
              )}
              <h3 className="text-xl leading-snug font-bold text-white md:text-2xl">{a.title}</h3>
              {a.excerpt && (
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80">
                  {a.excerpt}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FilterLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer border-b-2 pb-0.5 text-sm transition-colors ${
        active
          ? "border-brand font-bold text-brand"
          : "border-transparent text-body hover:text-neutral-900"
      }`}
    >
      {label}
    </button>
  );
}
