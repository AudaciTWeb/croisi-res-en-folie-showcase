import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import family from "@/assets/family.jpg";
import { Leaf, Heart, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Croisières en folie" },
      { name: "description", content: "L'équipe déjantée derrière Croisières en folie : notre mission, nos engagements écolos et notre amour de la bonne bouffe." },
      { property: "og:title", content: "À propos — Croisières en folie" },
      { property: "og:description", content: "Notre histoire, nos valeurs, notre équipage." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-secondary">
            <Sparkles className="h-4 w-4" /> Notre histoire
          </span>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">Une bande de fous des mers — et de la bonne bouffe</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-90">
            Depuis 2015, on parcourt les océans avec une idée fixe : prouver qu'une croisière peut être écolo, gourmande et carrément fun. Spoiler : c'est possible.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <img src={family} alt="Notre équipage" className="rounded-3xl border-2 border-secondary shadow-[0_10px_0_var(--color-secondary)]" width={1600} height={1000} loading="lazy" />
        <div>
          <h2 className="text-4xl md:text-5xl">Notre mission</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Faire de chaque traversée un souvenir mémorable, sans laisser de trace sur la planète. On mise sur des bateaux dernier cri, un équipage local dans chaque port, et des chefs qui n'ont pas peur d'ajouter du piment.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Chez nous, la moyenne d'âge à bord va de 4 mois à 94 ans. Et tout le monde repart avec le sourire (et probablement 2 kg en plus).
          </p>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl">Nos engagements</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Zéro plastique", text: "Gourdes, pailles bambou et compost à bord depuis 2019." },
              { icon: Heart, title: "Local d'abord", text: "80% de notre carte vient des producteurs des ports d'escale." },
              { icon: Compass, title: "Petits groupes", text: "Max. 200 passagers pour préserver l'ambiance et les côtes." },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border-2 border-secondary bg-card p-6 shadow-[0_6px_0_var(--color-secondary)]">
                <div className="inline-flex rounded-2xl bg-primary p-3 text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-2xl">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6">
        <h2 className="text-4xl md:text-5xl">Prêt à embarquer ?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">On répond à toutes vos questions, même les plus loufoques.</p>
        <Link to="/contact" className="btn-fun btn-fun-hover mt-6">Prendre contact</Link>
      </section>
    </SiteLayout>
  );
}
