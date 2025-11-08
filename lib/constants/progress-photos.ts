export type ProgressPhotoStep = {
  id: string
  etapa: string
  title: string
  date?: string
  description?: string
  photos: string[]
}

export const PROGRESS_PHOTOS: ProgressPhotoStep[] = [
  {
    id: "etapa-01-pregatire-teren",
    etapa: "Etapa 01",
    title: "Pregătirea terenului și săpături",
    date: "2023-03",
    description:
      "Curățarea terenului și realizarea săpăturilor pentru fundații, primul pas în construirea ansamblului.",
    photos: ["/images/progress/etapa-01-01.webp"],
  },
  {
    id: "etapa-02-fundatii-radier",
    etapa: "Etapa 02",
    title: "Fundații și radier general",
    date: "2023-03",
    description:
      "Realizarea fundațiilor și a radierului general: armare și turnare beton pentru baza structurii.",
    photos: ["/images/progress/etapa-02-01.webp"],
  },
  {
    id: "etapa-03-hidroizolatie-si-umpluturi",
    etapa: "Etapa 03",
    title: "Hidroizolație și umpluturi",
    date: "2023-04",
    description:
      "Aplicarea hidroizolației la fundații și realizarea umpluturilor compactate, pentru protecție și stabilitate.",
    photos: ["/images/progress/etapa-03-01.webp"],
  },
  {
    id: "etapa-04-placa-parter",
    etapa: "Etapa 04",
    title: "Placă parter și pregătire pentru structură",
    date: "2023-06",
    description:
      "Turnarea plăcii de pardoseală la parter și finalizarea straturilor de protecție la sol, pregătind clădirea pentru ridicarea etajelor.",
    photos: ["/images/progress/etapa-04-01.webp"],
  },
  {
    id: "etapa-05-structura-etaje",
    etapa: "Etapa 05",
    title: "Structura etajelor",
    date: "2024-01",
    description:
      "Armarea și turnarea plăcilor superioare, inclusiv placa etajului 3, marcând avansul major al structurii clădirii.",
    photos: ["/images/progress/etapa-05-01.webp"],
  },
]