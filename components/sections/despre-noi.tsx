import { Building2, Car, Leaf, Ruler } from "lucide-react"

export function DespreNoiSection() {
  return (
    <section
      id="despre-noi"
      className="scroll-section bg-background pt-52 pb-16 md:py-24"
    >
      <div className="container max-w-5xl space-y-10 px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Despre ansamblu
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Mr Lucass Residence <br /> un ansamblu intim, cu atenție la detalii.
          </h2>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Situat în Constanța, zona Palazu, ansamblul de apartamente Mr Lucass îmbină designul modern cu
            o construcție de calitate, pentru cei care își doresc un cămin confortabil într-o zonă liniștită,
            dar bine conectată la oraș.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          {/* Text column */}
          <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
            <p>
              Cu o locație avantajoasă și finalizare în Octombrie 2025, ansamblul oferă atât un cămin, cât și
              o investiție sigură. Clădirea are o compartimentare eficientă, cu puține apartamente pe nivel, ceea ce
              se traduce prin mai multă liniște și intimitate pentru locatari.
            </p>
            <p>
              Compartimentarea este realizată din BCA CELCO, iar tâmplăria Barrier 75 cu feronerie RotoNX asigură o
              izolare acustică de până la 44 dB, contribuind la confortul termic și fonic al fiecărui apartament.
            </p>
            <p>
              Fațada este placată cu polistiren și accente de lemn, completate de un rastel din lemn/metal înierbat,
              oferind un aspect modern și îngrijit. La parter, clădirea dispune de o recepție spațioasă de 29 mp și
              este dotată cu lift pentru acces facil către toate nivelele.
            </p>
            <p>
              Locurile de parcare sunt disponibile separat, la prețul de 10.000 €, existând 12 locuri supraterane în
              cadrul complexului. Predarea apartamentelor se va face la cheie, astfel încât viitorii proprietari să se
              poată muta cu minim de efort.
            </p>
          </div>

          {/* Highlights column */}
          <div className="space-y-4 rounded-2xl border bg-card p-5 shadow-soft">
            <h3 className="text-sm font-semibold text-foreground sm:text-base">
              Ansamblu pe scurt
            </h3>
            <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-accent/10 p-2">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Clădire modernă</p>
                  <p>Compartimentare din BCA CELCO și fațadă cu accente de lemn.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-accent/10 p-2">
                  <Car className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Parcare dedicată</p>
                  <p>12 locuri de parcare supraterane, disponibile separat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-accent/10 p-2">
                  <Ruler className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Confort acustic</p>
                  <p>Tâmplărie Barrier 75, izolare acustică de până la 44 dB.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-accent/10 p-2">
                  <Leaf className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Spații verzi</p>
                  <p>Spațiu verde amenajat și loc de joacă pentru copii.</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              *Informațiile prezentate au caracter orientativ și pot suferi modificări pe parcursul dezvoltării
              proiectului.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}