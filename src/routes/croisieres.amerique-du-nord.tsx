import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import img from "@/assets/northamerica.jpg";
import { Anchor, Check, MapPin } from "lucide-react";

export const Route = createFileRoute("/croisieres/amerique-du-nord")({
  head: () => ({
    meta: [
      { title: "Croisière Amérique du Nord — Croisières en folie" },
      { name: "description", content: "Fjords de l'Alaska, côte Est flamboyante, Grands Lacs : notre grande boucle nord-américaine, en mode éco et gourmand." },
      { property: "og:title", content: "Croisière Amérique du Nord" },
      { property: "og:description", content: "10 escales, 3 saveurs, zéro plastique." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="relative">
        <img src={img} alt="Fjord d'Amérique du Nord" className="h-[50vh] w-full object-cover md:h-[70vh]" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-secondary-foreground md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
            <MapPin className="h-4 w-4" /> Amérique du Nord
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-7xl">Fjords, forêts et fondants au chocolat</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[2fr_1fr] md:px-6">
        <div>
          <h2 className="text-3xl md:text-4xl">L'itinéraire</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            14 jours pour remonter la côte pacifique de Vancouver jusqu'à Anchorage, puis boucler par les Grands Lacs. Randos glaciers, kayak avec les orques, dégustation de homard à Halifax, tout y est.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Escale 1 · Vancouver — départ & bienvenue tacos-poutine",
              "Escale 2 · Juneau — rando glacier & saumon fumé maison",
              "Escale 3 · Skagway — trip en train, marshmallows au feu de camp",
              "Escale 4 · Halifax — homard party sur le pont",
              "Escale 5 · Toronto — brunch pancakes XXL & érable partout",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-2xl border-2 border-secondary bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-3xl border-2 border-secondary bg-accent p-6 shadow-[0_10px_0_var(--color-secondary)]">
          <h3 className="text-2xl">En bref</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div><dt className="font-black">Durée</dt><dd>14 jours / 13 nuits</dd></div>
            <div><dt className="font-black">Départs</dt><dd>Mai à septembre</dd></div>
            <div><dt className="font-black">À partir de</dt><dd>3 490 $ / personne</dd></div>
            <div><dt className="font-black">Passagers</dt><dd>Max. 200</dd></div>
          </dl>
          <Link to="/contact" className="btn-fun btn-fun-hover mt-6 w-full justify-center">
            <Anchor className="h-4 w-4" /> Réserver
          </Link>
        </aside>
      </section>
    </SiteLayout>
  );
}
