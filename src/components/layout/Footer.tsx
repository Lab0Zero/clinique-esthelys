import Link from "next/link";

const footerLinks = {
  Traitements: [
    { label: "Botox", href: "#" },
    { label: "Acide hyaluronique", href: "#" },
    { label: "Skinboosters", href: "#" },
    { label: "Peelings", href: "#" },
    { label: "Mésothérapie", href: "#" },
  ],
  "La Clinique": [
    { label: "Notre équipe", href: "#" },
    { label: "Nos valeurs", href: "#" },
    { label: "Tarifs", href: "#" },
  ],
  Informations: [
    { label: "Rendez-vous", href: "#contact" },
    { label: "Accès & horaires", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="container-site py-14 sm:py-20 md:py-24">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl text-fg font-bold">Esthelys</p>
            <p className="mt-3 text-sm text-fg-muted leading-relaxed max-w-[220px]">
              Médecine esthétique à Paris.
              Expertise, élégance, résultats naturels.
            </p>
          </div>

          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-fg-muted mb-4">
                {cat}
              </p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-fg-dim hover:text-fg transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-fg-dim text-center sm:text-left">
            © {new Date().getFullYear()} Clinique Esthelys. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs text-fg-dim hover:text-fg transition-colors duration-300">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-fg-dim hover:text-fg transition-colors duration-300">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
