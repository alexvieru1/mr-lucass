import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-section bg-linear-to-b from-background via-background to-muted/60 py-16 md:py-24"
    >
      <div className="container space-y-10 px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Hai să stabilim o vizionare.
          </h2>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Suntem disponibili telefonic pentru detalii despre apartamente și programarea unei vizionări la
            ansamblul Mr Lucass Residence. Completează formularul sau sună-ne direct.
          </p>
        </div>

        {/* Main content: contact info + map */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          {/* Contact info */}
          <div className="space-y-4 rounded-2xl border bg-card/80 p-5 shadow-soft">
            <h3 className="text-base font-semibold sm:text-lg">Date de contact</h3>
            <p className="text-sm text-muted-foreground">
              Pentru informații despre apartamente și programarea unei vizionări, ne poți contacta telefonic
              sau prin WhatsApp.
            </p>

            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Telefon
                </p>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex h-7 items-center rounded-full bg-accent/10 px-3 text-xs font-medium text-accent-foreground">
                      Principal
                    </span>
                    <a href="tel:+40741274273" className="font-medium hover:underline">
                      (0741) 274 273
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex h-7 items-center rounded-full bg-accent/10 px-3 text-xs font-medium text-accent-foreground">
                      Alternativ
                    </span>
                    <a href="tel:+40754439439" className="font-medium hover:underline">
                      (0754) 439 439
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Program recomandat: luni–vineri, 09:00–18:00.
                </p>
              </div>

              {/* <div className="space-y-1 pt-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  WhatsApp
                </p>
                <p className="text-sm text-muted-foreground">
                  Ne poți scrie direct pe WhatsApp folosind butonul din meniu sau linkul de mai jos.
                </p>
                <a
                  href="https://wa.me/40741274273"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-accent underline underline-offset-4"
                >
                  Deschide conversația pe WhatsApp
                </a>
              </div> */}

              <div className="space-y-1 pt-2 text-sm">
                <h4 className="text-sm font-semibold text-foreground">Locație</h4>
                <p className="text-muted-foreground">
                  Str. Barbu Catargi, Nr. 18C, Palazu Mare, Constanța
                </p>
                <Link
                  href="https://maps.app.goo.gl/JHDSwnH2rNyKayqSA"
                  target="_blank"
                  className="text-xs font-medium text-black dark:text-white underline underline-offset-4"
                >
                  Deschide în Google Maps
                </Link>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild size="sm" className="rounded-xl">
                <a href="tel:+40741274273">Sună acum</a>
              </Button>
            </div>
          </div>

          {/* Map card */}
          <div className="space-y-3 rounded-2xl border bg-card/80 p-5 shadow-soft">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold sm:text-base">Harta ansamblului</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Ansamblul este situat în zona Palazu Mare, cu acces facil către principalele puncte de interes
                din Constanța.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-muted">
              <div className="relative h-[220px] w-full md:h-[280px]">
                <iframe
                  title="Mr Lucass Residence - Hartă"
                  src="https://maps.google.com/maps?width=100%25&amp;height=320&amp;hl=ro&amp;q=Str.%20Barbu%20Catargi,%20Nr.18C,%20Palazu%20Mare,%20Constanța+(Mr%20Lucass%20Residence)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}