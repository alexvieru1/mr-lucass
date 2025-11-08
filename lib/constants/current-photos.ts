export type CurrentPhotoCategory = "Exterior" | "Interior"
export type CurrentPhotoOrientation = "portrait" | "landscape"

export type CurrentPhoto = {
  src: string
  alt: string
  category: CurrentPhotoCategory
  orientation: CurrentPhotoOrientation
}

export const CURRENT_PHOTOS: CurrentPhoto[] = [
  {
    category: "Exterior",
    src: "/images/current/exterior.webp",
    alt: "Vedere laterală a fațadei ansamblului Mr Lucass",
    orientation: "portrait",
  },
  {
    category: "Exterior",
    src: "/images/current/frontal.webp",
    alt: "Vedere frontală a clădirii Mr Lucass Residence",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-living.webp",
    alt: "Living luminos, finisat, în cadrul unui apartament Mr Lucass",
    orientation: "landscape",
  },
  {
    category: "Interior",
    src: "/images/current/interior-open-space.webp",
    alt: "Spațiu open-space gata de compartimentare și mobilare",
    orientation: "landscape",
  },
  {
    category: "Interior",
    src: "/images/current/interior-balcon.webp",
    alt: "Balcon cu pardoseală finisată și parapet metalic",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-hol.webp",
    alt: "Hol interior cu uși și finisaje realizate",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-cabina-dus.webp",
    alt: "Baie cu cabină de duș, finisaje moderne",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-cada.webp",
    alt: "Baie cu cadă, pregătită pentru dotări finale",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-dormitor-1.webp",
    alt: "Dormitor luminos, finisat, cu acces la balcon",
    orientation: "portrait",
  },
  {
    category: "Interior",
    src: "/images/current/interior-dormitor-2.webp",
    alt: "Dormitor spațios, finisaje moderne",
    orientation: "portrait",
  },
]