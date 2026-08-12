import { useEffect, useMemo, useState } from "react";

export interface ProjectCard {
  slug: string;
  title: string;
  thumbnail?: string;
  tags: string[];
  date: string;
}

interface Props {
  projects: ProjectCard[];
  /** Show the tag filter row */
  filters?: boolean;
  /** If set, show this many items initially with a Load More button */
  pageSize?: number;
}

const slugify = (tag: string) => tag.toLowerCase().replace(/\s+/g, "-");

/**
 * Replicates the Salient nectar-post-grid rhythm: a repeating cycle of one
 * full-width card followed by two half-width cards.
 */
const isFullWidth = (index: number) => index % 3 === 0;

export default function ProjectGrid({ projects, filters = false, pageSize }: Props) {
  const [active, setActive] = useState<string>("all");
  const [visible, setVisible] = useState<number>(pageSize ?? projects.length);

  const tags = useMemo(() => {
    const set = new Map<string, string>();
    for (const p of projects) for (const t of p.tags) set.set(slugify(t), t);
    return [...set.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [projects]);

  // Sync filter with URL hash (e.g. /projects/#ai) so filtered views are shareable.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      setActive(h && tags.some(([slug]) => slug === h) ? h : "all");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tags]);

  const select = (slug: string) => {
    setActive(slug);
    setVisible(pageSize ?? projects.length);
    history.replaceState(null, "", slug === "all" ? window.location.pathname : `#${slug}`);
  };

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.tags.some((t) => slugify(t) === active));
  const shown = filtered.slice(0, visible);

  return (
    <div>
      {filters && (
        <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="mr-2 text-sm font-bold text-neutral-900">Filter</span>
          <FilterLink label="All" count={projects.length} active={active === "all"} onClick={() => select("all")} />
          {tags.map(([slug, label]) => (
            <FilterLink
              key={slug}
              label={label}
              active={active === slug}
              onClick={() => select(slug)}
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {shown.map((p, i) => (
          <a
            key={p.slug}
            href={`/ux-projects/${p.slug}/`}
            className={`group relative block overflow-hidden bg-neutral-200 ${
              isFullWidth(i) ? "h-72 md:col-span-2 md:h-[480px]" : "h-64 md:h-60"
            }`}
          >
            {p.thumbnail && (
              <img
                src={p.thumbnail}
                alt=""
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <h3
                className={`font-bold text-white ${
                  isFullWidth(i) ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}
              >
                {p.title}
              </h3>
              <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100">
                {p.tags.join(" · ")}
              </p>
            </div>
          </a>
        ))}
      </div>

      {shown.length < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible(filtered.length)}
            className="cursor-pointer rounded-full border-2 border-brand px-7 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

function FilterLink({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
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
      {typeof count === "number" ? "" : ""}
    </button>
  );
}
