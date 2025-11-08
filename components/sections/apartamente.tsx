import Image from "next/image"
import Link from "next/link"

import { APARTMENTS, type Apartment, type ApartmentType } from "@/lib/constants/apartments"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const typeOrder: ApartmentType[] = ["2_camere", "3_camere", "studio"]

const typeLabels: Record<ApartmentType, string> = {
  "2_camere": "Apartamente 2 camere",
  "3_camere": "Apartamente 3 camere",
  studio: "Studio",
}

const typeDescriptions: Record<ApartmentType, string> = {
  "2_camere":
    "Apartamente de 2 camere, potrivite pentru cupluri sau familii la început de drum, cu suprafețe eficiente și compartimentări moderne.",
  "3_camere":
    "Apartamente de 3 camere, ideale pentru familii care își doresc mai mult spațiu și confort, cu living generos și dormitoare luminoase.",
  studio:
    "Garsonieră/studio, o alegere excelentă pentru investitori sau pentru cei care își doresc un spațiu compact și bine organizat.",
}

function formatFloor(floor: number) {
  if (floor === 0) return "Parter"
  return `Etaj ${floor}`
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("ro-RO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function formatAreas(usableArea: number, balconyArea: number) {
  if (!balconyArea || balconyArea <= 0) {
    return `${usableArea.toFixed(2)} m² utili`
  }

  const ratio = balconyArea / usableArea

  // Small/medium balcony: show as "included" in parentheses
  if (ratio <= 0.3) {
    return `${usableArea.toFixed(2)} m² utili (${balconyArea.toFixed(2)} m² balcon inclus)`
  }

  // Large balcony/terasă: show as separate added surface
  return `${usableArea.toFixed(2)} m² utili + ${balconyArea.toFixed(2)} m² balcon`
}

export function ApartamenteSection() {
  const groupedByType: Record<ApartmentType, Apartment[]> = {
    "2_camere": [],
    "3_camere": [],
    studio: [],
  }

  for (const apt of APARTMENTS) {
    groupedByType[apt.type].push(apt)
  }

  for (const type of typeOrder) {
    groupedByType[type].sort((a, b) => {
      const statusRank = (status: Apartment["status"]) => {
        if (status === "disponibil") return 0
        if (status === "rezervat") return 1
        return 2 // vandut
      }
      const byStatus = statusRank(a.status) - statusRank(b.status)
      if (byStatus !== 0) return byStatus
      // secondary sort: floor ascending
      return a.floor - b.floor
    })
  }

  return (
    <section
      id="apartamente"
      className="scroll-section bg-background py-16 md:py-24"
    >
      <div className="container space-y-12 px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Ofertă apartamente
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Alege tipul de apartament potrivit pentru tine.
          </h2>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Ansamblul Mr Lucass Residence oferă apartamente de 2 și 3 camere, precum și un studio, cu
            compartimentări moderne, suprafețe echilibrate și balcon generos. Vezi detaliile fiecărei
            unități și contactează-ne pentru vizionări.
          </p>
        </div>

        {typeOrder.map((type) => {
          const items = groupedByType[type]
          if (!items.length) return null

          return (
            <div key={type} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{typeLabels[type]}</h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {typeDescriptions[type]}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {items.map((apt) => {
                  const isSold = apt.status === "vandut"

                  return (
                    <article
                      key={apt.id}
                      className={`group overflow-hidden rounded-2xl border bg-card/80 p-4 shadow-soft transition-opacity ${
                        isSold ? "opacity-70" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-4 md:flex-row">
                        {/* Plan image */}
                        <figure className="flex-1 overflow-hidden rounded-xl border bg-muted/70">
                          <div className="relative aspect-square">
                            <Image
                              src={apt.image}
                              alt={apt.title}
                              fill
                              sizes="(min-width: 1024px) 260px, 50vw"
                              className="object-contain"
                            />
                          </div>
                        </figure>

                        {/* Info */}
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-foreground sm:text-base">
                              {apt.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={isSold ? "outline" : "default"}
                                className={
                                  isSold
                                    ? "border-destructive/30 text-xs text-destructive"
                                    : "bg-emerald-500/90 text-xs text-emerald-50"
                                }
                              >
                                {isSold ? "Vândut" : "Disponibil"}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-xs text-muted-foreground sm:text-sm">
                            {formatFloor(apt.floor)} •{" "}
                            {apt.view === "spate"
                              ? "Vedere spate"
                              : apt.view === "stradala"
                              ? "Vedere stradală"
                              : "Vedere laterală"}
                          </p>

                          <p className="text-xs text-muted-foreground sm:text-sm">
                            {formatAreas(apt.usableArea, apt.balconyArea)}
                          </p>

                          {/* Price – only for non-sold apartments */}
                          {!isSold && (
                            <div className="space-y-1">
                              <p className="text-lg font-semibold text-foreground">
                                {formatPrice(apt.totalPrice)} € + TVA
                              </p>
                              {/* <p className="text-xs text-muted-foreground">
                                ~ {formatPrice(apt.pricePerSqm)} €/m²
                              </p> */}
                            </div>
                          )}

                          <div className="pt-1">
                            <Button
                              asChild
                              size="sm"
                              variant={isSold ? "outline" : "default"}
                              className="rounded-xl"
                            >
                              <Link href="#contact">
                                {isSold ? "Solicită oferte similare" : "Programează o vizionare"}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}