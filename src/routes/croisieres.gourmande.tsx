import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import img from "@/assets/gourmet.jpg";
import { Anchor, ChefHat, UtensilsCrossed, Sparkles } from "lucide-react";

export const Route = createFileRoute("/croisieres/gourmande")({
  head: () => ({
    meta: [
      { title: "Croisière 100% Gourmande — Croisières en folie" },
      { name: "description", content: "La croisière-buffet ultime : un chef différent à chaque escale, produits locaux et desserts déjantés." },
      { property: "og:title", content: "Croisière 100% Gourmande" },
      { property: "og:description", content: "Un chef par escale, buffets XXL, zéro gaspillage." },
      { property: "og:image", content: img },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="relative">
        <img src={img} alt="Buffet gourmand sur le pont" className="h-[50vh] w-full object-cover md:h-[70vh]" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-secondary-foreground md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
            <Sparkles className="h-4 w-4" /> 100% Gourmande
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-7xl">Mangez, riez, recommencez</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">Le concept</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              À chaque escale, un chef local monte à bord et invente le menu du soir avec les produits du marché. Vous mangez local, saisonnier, et souvent avec les mains. On assume.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ChefHat, t: "10 chefs invités", d: "1 par escale, tous récompensés dans leur pays." },
                { icon: UtensilsCrossed, t: "Menus 6 services", d: "Le soir, brunch géant le week-end, snacks 24/7." },
                { icon: Sparkles, t: "Zéro gaspi", d: "Les restes deviennent le brunch du lendemain." },
                { icon: Anchor, t: "Ateliers à bord", d: "Cours de pâtisserie, dégustation vins, mixologie." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border-2 border-secondary bg-card p-5 shadow-[0_6px_0_var(--color-secondary)]">
                  <f.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-2 text-xl">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border-2 border-secondary bg-accent p-6 shadow-[0_10px_0_var(--color-secondary)]">
            <h3 className="text-2xl">En bref</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="font-black">Durée</dt><dd>10 jours / 9 nuits</dd></div>
              <div><dt className="font-black">Départs</dt><dd>Toute l'année</dd></div>
              <div><dt className="font-black">À partir de</dt><dd>2 990 $ / personne</dd></div>
              <div><dt className="font-black">Régimes</dt><dd>Végé, vegan, sans gluten — on gère.</dd></div>
            </dl>
            <Link to="/contact" className="btn-fun btn-fun-hover mt-6 w-full justify-center">
              <Anchor className="h-4 w-4" /> Réserver
            </Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
