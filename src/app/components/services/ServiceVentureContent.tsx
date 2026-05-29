import Link from "next/link";
import type { Venture } from "@/app/constants/site";
import type { VentureContent } from "@/app/constants/ventureContent";

type ServiceVentureContentProps = {
  venture: Venture;
  content: VentureContent;
};

export function ServiceVentureContent({
  venture,
  content,
}: ServiceVentureContentProps) {
  const accent = venture.accent ?? "#4682B4";

  return (
    <article className="space-y-6 md:space-y-8">
      <header className="space-y-3">
        <p className="eyebrow" style={{ color: accent }}>
          {venture.category}
        </p>
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight text-slate-900 leading-tight">
          {content.displayTitle}
        </h2>
        <p
          className="text-lg md:text-xl font-bold text-slate-800 leading-snug"
          style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "1rem" }}
        >
          {content.headline}
        </p>
        {content.subheadline && (
          <p className="text-slate-600 font-semibold italic">{content.subheadline}</p>
        )}
      </header>

      <div className="space-y-4 text-slate-600 leading-relaxed">
        {content.intro.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      {content.blocks.map((block) => (
        <section key={block.heading ?? block.quote} className="space-y-4">
          {block.heading && (
            <h3 className="text-lg font-black uppercase tracking-wide text-slate-900">
              {block.heading}
            </h3>
          )}

          {block.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-slate-600 leading-relaxed">
              {p}
            </p>
          ))}

          {block.quote && (
            <blockquote
              className="border-l-4 pl-4 py-1 text-slate-700 font-semibold italic"
              style={{ borderColor: accent }}
            >
              &ldquo;{block.quote}&rdquo;
            </blockquote>
          )}

          {block.listGroups?.map((group) => (
            <div key={group.title} className="space-y-2">
              <h4 className="font-bold text-slate-800">{group.title}</h4>
              <ul className="space-y-2 pl-4">
                {group.items.map((item) => (
                  <li
                    key={item.slice(0, 30)}
                    className="text-slate-600 text-sm leading-relaxed list-disc"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {block.bullets && (
            <ul className="space-y-2 pl-4">
              {block.bullets.map((item) => (
                <li
                  key={item.slice(0, 30)}
                  className="text-slate-600 text-sm leading-relaxed list-disc"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {block.numbered && (
            <ol className="space-y-4">
              {block.numbered.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {block.table && (
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 font-black uppercase text-[10px] tracking-widest text-slate-500">
                      Category
                    </th>
                    <th className="px-4 py-3 font-black uppercase text-[10px] tracking-widest text-slate-500">
                      The Promise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {block.table.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <td className="px-4 py-3 font-bold text-slate-800 align-top whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-slate-600 leading-relaxed">
                        {row.promise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {content.closing && (
        <footer className="space-y-3 pt-4 border-t border-slate-200">
          {content.closing.quote && (
            <p className="text-slate-700 font-semibold italic">
              &ldquo;{content.closing.quote}&rdquo;
            </p>
          )}
          {content.closing.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-slate-600 leading-relaxed">
              {p}
            </p>
          ))}
          {content.closing.tagline && (
            <p
              className="text-sm font-black uppercase tracking-widest pt-2"
              style={{ color: accent }}
            >
              {content.closing.tagline}
            </p>
          )}
        </footer>
      )}

      <Link href={venture.href} className="btn-primary inline-flex mt-2">
        Explore {venture.title}
      </Link>
    </article>
  );
}
