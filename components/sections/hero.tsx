"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative isolate flex h-screen w-full bg-linear-to-t from-background via-background to-muted/60">
      <div className="container flex min-h-[72vh] flex-col items-center gap-10 px-6 pt-24 pb-24 md:flex-row md:justify-between md:py-20 md:px-10 lg:px-16">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl text-center text-foreground md:text-left"
        >
          <Badge className="mb-4 bg-accent/10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Mr Lucass Residence • Palazu, Constanța
          </Badge>

          <h1 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl text-center md:text-left">
            Apartamente moderne, aproape de tot ce contează.
          </h1>

          <p className="mt-4 max-w-lg text-balance text-sm text-muted-foreground sm:text-base text-center md:text-left">
            Ansamblu rezidențial intim, cu doar câteva apartamente pe nivel, finisaje premium
            și acces rapid către punctele de interes din oraș.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#apartamente">Vezi apartamentele</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl"
            >
              <Link href="#contact">Programează o vizionare</Link>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground sm:text-sm md:justify-start">
            <span>• Studio</span>
            <span>• Apartamente 2 camere</span>
            <span>• Apartamente 3 camere</span>
            <span>• Locuri de parcare supraterane</span>
            {/* <span>• Zonă centrală</span> */}
          </div>
        </motion.div>

        {/* Image column – optimized for portrait renders */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          {/* Glow / shadow behind card */}
          <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 rounded-4xl bg-linear-to-tr from-accent/30 via-accent/5 to-transparent blur-2xl dark:from-accent/40" />

          <div className="overflow-hidden rounded-4xl border bg-card shadow-soft">
            <div className="relative aspect-3/4">
              {/* Light mode (day) */}
              <Image
                src="/images/day-render.webp"
                alt="Mr Lucass Residence - vedere de zi"
                fill
                priority
                className="object-cover transition-opacity duration-700 ease-out dark:opacity-0"
              />
              {/* Dark mode (night) */}
              <Image
                src="/images/night-render.webp"
                alt="Mr Lucass Residence - vedere de noapte"
                fill
                priority
                className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 ease-out dark:opacity-100"
              />
            </div>
          </div>

          {/* Small floating info badge on the card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-4 right-4 rounded-2xl bg-background/90 px-4 py-3 text-xs shadow-soft ring-1 ring-border backdrop-blur"
          >
            <p className="font-medium">Predare în curând</p>
            <p className="text-muted-foreground">Ultimele apartamente disponibile</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}