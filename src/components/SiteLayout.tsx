import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Anchor, Mail, Instagram, Facebook } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/croisieres/amerique-du-nord", label: "Amérique du Nord" },
  { to: "/croisieres/inde", label: "Inde" },
  { to: "/croisieres/gourmande", label: "100% Gourmande" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b-4 border-secondary bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 md:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={logo} alt="Croisières en folie" className="h-12 w-12 shrink-0" width={48} height={48} />
            <div className="min-w-0">
              <div className="truncate text-lg font-black leading-none text-primary md:text-xl">Croisières en folie</div>
              <div className="text-xs font-semibold text-muted-foreground">Fun · Éco · Gourmand</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-bold text-secondary transition-colors hover:bg-accent"
                activeProps={{ className: "bg-primary text-primary-foreground rounded-full px-3 py-2 text-sm font-bold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-fun btn-fun-hover ml-2 text-sm">
              <Anchor className="h-4 w-4" /> Réserver
            </Link>
          </nav>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border-2 border-secondary bg-accent p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t-2 border-secondary bg-sand px-4 py-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="rounded-lg px-3 py-2 text-sm font-bold text-secondary hover:bg-accent"
                  activeProps={{ className: "bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-bold" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-12 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-10 w-10" width={40} height={40} />
              <span className="text-xl font-black">Croisières en folie</span>
            </div>
            <p className="mt-3 text-sm opacity-80">
              Larguez les amarres avec le sourire. Des croisières fun, écolos et gourmandes en Amérique du Nord et en Inde.
            </p>
          </div>
          <div>
            <h4 className="text-lg text-accent">Explorer</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="opacity-80 hover:text-accent hover:opacity-100">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-accent">On garde le contact</h4>
            <p className="mt-3 flex items-center gap-2 text-sm opacity-80">
              <Mail className="h-4 w-4" /> ahoy@croisieres-en-folie.com
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-accent hover:text-secondary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full bg-primary p-2 text-primary-foreground hover:bg-accent hover:text-secondary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Croisières en folie — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
