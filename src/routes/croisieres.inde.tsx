import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import img from "@/assets/india.jpg";
import { Anchor, Check, MapPin } from "lucide-react";

export const Route = createFileRoute("/croisieres/inde")({
  head: () => ({
    meta: [
      { title: "Croisière Inde — Croisières en folie" },
      { name: "description", content: "Backwaters du Kerala, temples, épices et couchers de soleil : embarquez pour l'Inde authentique et gourmande." },
      { property: "og:title", content: "Croisière Inde" },
      { property: "og:description", content: "12 escales sensorielles, épices et couleurs à volonté." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="relative">
        <img src={img} alt="Côte indienne et cocotiers" className="h-[50vh] w-full object-cover md:h-[70vh]" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-secondary-foreground md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
            <MapPin className="h-4 w-4" /> Inde & Océan Indien
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-7xl">Épices, temples & couchers de soleil dorés</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[2fr_1fr] md:px-6">
        <div>
          <h2 className="text-3xl md:text-4xl">Une aventure sensorielle</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            De Mumbai à Cochin, on longe la côte Malabar, on glisse dans les backwaters du Kerala et on partage des thalis de fou avec les familles locales. Un cours de cuisine à bord chaque matin, un rooftop yoga chaque soir.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Escale 1 · Mumbai — street food & bazars géants",
              "Escale 2 · Goa — plage, samosas et guitare le soir",
              "Escale 3 · Cochin — backwaters et curries maison",
              "Escale 4 · Alleppey — nuit sur houseboat, festival de lucioles",
              "Escale 5 · Trivandrum — temples, épices et adieu chai chaud",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-2xl border-2 border-secondary bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-3xl border-2 border-secondary bg-primary p-6 text-primary-foreground shadow-[0_10px_0_var(--color-secondary)]">
          <h3 className="text-2xl">En bref</h3>
          <dl className="mt-4 space-y-3 text-sm opacity-95">
            <div><dt className="font-black">Durée</dt><dd>16 jours / 15 nuits</dd></div>
            <div><dt className="font-black">Départs</dt><dd>Octobre à mars</dd></div>
            <div><dt className="font-black">À partir de</dt><dd>4 190 $ / personne</dd></div>
            <div><dt className="font-black">Passagers</dt><dd>Max. 180</dd></div>
          </dl>
          <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-black text-secondary hover:brightness-95">
            <Anchor className="h-4 w-4" /> Réserver
          </Link>
        </aside>
      </section>
    </SiteLayout>
  );
}
