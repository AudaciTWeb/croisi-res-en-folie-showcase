import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Mail, MapPin, Phone, Anchor } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Croisières en folie" },
      { name: "description", content: "Une question, une envie de croisière ? Écrivez à notre équipage déjanté." },
      { property: "og:title", content: "Contact — Croisières en folie" },
      { property: "og:description", content: "On répond à toutes vos questions, même les plus loufoques." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <span className="text-sm font-black uppercase tracking-widest text-accent">On vous écoute</span>
          <h1 className="mt-2 text-5xl md:text-7xl">Larguez un message !</h1>
          <p className="mt-4 max-w-2xl opacity-80">Notre équipage vous répond en moins de 48h (sauf pendant la sieste post-buffet).</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[2fr_1fr] md:px-6">
        <form
          className="rounded-3xl border-2 border-secondary bg-card p-6 shadow-[0_10px_0_var(--color-secondary)] md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold">Prénom</span>
              <input required className="mt-1 w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            </label>
            <label className="block">
              <span className="text-sm font-bold">Nom</span>
              <input required className="mt-1 w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-bold">Email</span>
            <input required type="email" className="mt-1 w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold">Votre croisière de rêve</span>
            <select className="mt-1 w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-primary">
              <option>Amérique du Nord</option>
              <option>Inde & Océan Indien</option>
              <option>100% Gourmande</option>
              <option>Je ne sais pas encore, aidez-moi !</option>
            </select>
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold">Message</span>
            <textarea required rows={5} className="mt-1 w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-primary" />
          </label>
          <button type="submit" className="btn-fun btn-fun-hover mt-6">
            <Anchor className="h-4 w-4" /> Envoyer
          </button>
          {sent && <p className="mt-4 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-secondary">Message reçu ! On revient vers vous très vite 🚢</p>}
        </form>

        <aside className="space-y-4">
          <div className="rounded-3xl border-2 border-secondary bg-accent p-6 shadow-[0_6px_0_var(--color-secondary)]">
            <h3 className="text-xl">Le port d'attache</h3>
            <p className="mt-3 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Quai des Fous, 1234 Grand Océan</p>
            <p className="mt-2 flex items-center gap-2 text-sm"><Mail className="h-4 w-4" /> ahoy@croisieres-en-folie.com</p>
            <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" /> +1 555 CRUISE</p>
          </div>
          <div className="rounded-3xl border-2 border-secondary bg-primary p-6 text-primary-foreground shadow-[0_6px_0_var(--color-secondary)]">
            <h3 className="text-xl">Horaires</h3>
            <p className="mt-3 text-sm opacity-90">Lun. → Ven. : 9h - 18h</p>
            <p className="text-sm opacity-90">Sam. : 10h - 15h</p>
            <p className="text-sm opacity-90">Dim. : on est en mer 🌊</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
