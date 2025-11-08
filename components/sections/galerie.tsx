import React from "react"
import Image from "next/image"

import { CURRENT_PHOTOS } from "@/lib/constants/current-photos"
import { PROGRESS_PHOTOS } from "@/lib/constants/progress-photos"

export function GalerieSection() {
  const exteriorPhotos = CURRENT_PHOTOS.filter((p) => p.category === "Exterior")
  const interiorPhotos = CURRENT_PHOTOS.filter((p) => p.category === "Interior")
  const interiorLandscape = interiorPhotos.filter((p) => p.orientation === "landscape")
  const interiorPortrait = interiorPhotos.filter((p) => p.orientation === "portrait")

  return (
    <section
      id="galerie"
      className="scroll-section bg-background py-16 md:py-24"
    >
      <div className="container space-y-12 px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Galerie foto
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            De la randare la realitate.
          </h2>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Imagini reale cu stadiul actual al ansamblului, completate de etapele importante de construcție.
          </p>
        </div>

        {/* Bloc A: Clădirea astăzi */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold sm:text-xl">Clădirea astăzi</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Vederi exterioare și interioare care surprind modul în care arată în prezent ansamblul Mr
                Lucass Residence.
              </p>
            </div>
            {/* <p className="text-xs text-muted-foreground">
              *Fotografii realizate în 2024, în stadiu aproape de finalizare.
            </p> */}
          </div>

          {/* Exterior */}
          {exteriorPhotos.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Exterior
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {exteriorPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="group overflow-hidden rounded-2xl border bg-card/80 shadow-soft"
                  >
                    <div
                      className={
                        "relative " +
                        (photo.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]")
                      }
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Interior */}
          {interiorPhotos.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Interior
              </p>

              {/* Landscape hero shots */}
              {interiorLandscape.length > 0 && (
                <div className="space-y-4">
                  {interiorLandscape.map((photo) => (
                    <figure
                      key={photo.src}
                      className="group overflow-hidden rounded-2xl border bg-card/80 shadow-soft"
                    >
                      <div className="relative aspect-[16/9] md:aspect-[3/2]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 1000px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              )}

              {/* Portrait grid */}
              {interiorPortrait.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {interiorPortrait.map((photo) => (
                    <figure
                      key={photo.src}
                      className="group overflow-hidden rounded-2xl border bg-card/80 shadow-soft"
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bloc B: Evoluția construcției */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold sm:text-xl">Evoluția construcției</h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              Câteva dintre momentele-cheie din execuția proiectului, de la pregătirea terenului până la
              structura etajelor.
            </p>
          </div>

          <div className="space-y-5">
            {PROGRESS_PHOTOS.map((step) => (
              <article
                key={step.id}
                className="relative overflow-hidden rounded-2xl border bg-card/80 p-5 shadow-soft md:grid md:grid-cols-[auto_minmax(0,1.7fr)_minmax(0,220px)] md:gap-5"
              >
                {/* Step meta */}
                <div className="mb-3 flex items-start gap-3 md:mb-0 md:flex-col md:items-start">
                  <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground">
                    {step.etapa}
                  </div>
                  {step.date && (
                    <p className="text-xs text-muted-foreground md:mt-2">
                      {new Date(step.date).toLocaleDateString("ro-RO", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  )}
                </div>

                {/* Text */}
                <div className="space-y-1 text-sm text-muted-foreground sm:text-base">
                  <h4 className="text-sm font-semibold text-foreground sm:text-base">
                    {step.title}
                  </h4>
                  {step.description && <p>{step.description}</p>}
                </div>

                {/* Photo */}
                {step.photos[0] && (
                  <div className="relative mt-4 h-40 overflow-hidden rounded-xl border bg-muted md:mt-0">
                    <Image
                      src={step.photos[0]}
                      alt={step.title}
                      fill
                      sizes="(min-width: 1024px) 220px, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}