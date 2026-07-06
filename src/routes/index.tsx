import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import ship from "@/assets/cruise-ship.jpg.asset.json";
import gourmet from "@/assets/gourmet.jpg";
import family from "@/assets/family.jpg";
import northamerica from "@/assets/northamerica.jpg";
import india from "@/assets/india.jpg";
import { Leaf, UtensilsCrossed, Users, Sparkles, Anchor, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand">
        <img
          src={ship.url}
          alt="Notre bateau au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
            <Sparkles className="h-4 w-4" /> 100% écolos · 100% gourmandes
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] text-secondary md:text-7xl lg:text-8xl">
            Venez sur notre <span className="text-primary">beau bateau</span> !!
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold text-muted-foreground md:text-xl">
            Des croisières déjantées, en famille ou entre amis, de l'Amérique du Nord jusqu'aux rivages de l'Inde. On mange bien, on rit fort, on respecte la mer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/croisieres/gourmande" className="btn-fun btn-fun-hover">
              <Anchor className="h-5 w-5" /> Choisir ma croisière
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-background px-6 py-3 font-bold text-secondary hover:bg-accent"
            >
              Notre philosophie <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Écolo jusqu'aux hublots", text: "Carburant bas-carbone, zéro plastique à bord, escales éco-responsables." },
            { icon: UtensilsCrossed, title: "Gourmand sans limites", text: "Chefs locaux, produits de saison, buffets déjantés et desserts XXL." },
            { icon: Users, title: "Fun pour toute la tribu", text: "Kids clubs délirants, karaokés, animations en pagaille — personne ne s'ennuie." },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border-2 border-secondary bg-card p-6 shadow-[0_6px_0_var(--color-secondary)]">
              <div className="inline-flex rounded-2xl bg-primary p-3 text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-sm font-black uppercase tracking-widest text-accent">Destinations</span>
              <h2 className="mt-2 text-4xl md:text-5xl">Où on largue les amarres ?</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { to: "/croisieres/amerique-du-nord", img: northamerica, title: "Amérique du Nord", text: "Fjords de l'Alaska, côte Est flamboyante et Grands Lacs." },
              { to: "/croisieres/inde", img: india, title: "Inde & Océan Indien", text: "Backwaters du Kerala, épices, temples et couchers de soleil." },
              { to: "/croisieres/gourmande", img: gourmet, title: "100% Gourmande", text: "La croisière-buffet ultime, un chef différent chaque escale." },
            ].map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="group overflow-hidden rounded-3xl border-2 border-accent bg-background text-foreground shadow-[0_8px_0_var(--color-accent)] transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" width={1600} height={1000} loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="overflow-hidden rounded-3xl border-2 border-secondary shadow-[0_10px_0_var(--color-secondary)]">
          <img src={family} alt="Une famille heureuse en croisière" className="h-full w-full object-cover" width={1600} height={1000} loading="lazy" />
        </div>
        <div>
          <span className="text-sm font-black uppercase tracking-widest text-primary">La tribu à bord</span>
          <h2 className="mt-2 text-4xl md:text-5xl">On embarque toute la famille — même mamie déjantée</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cabines familiales, menus enfants revisités par nos chefs, spectacles en soirée et grasse mat garantie. Pendant que les p'tits s'éclatent au kids club, vous savourez un cocktail les pieds dans le sable... enfin, sur le pont.
          </p>
          <Link to="/contact" className="btn-fun btn-fun-hover mt-6">
            Nous écrire <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
