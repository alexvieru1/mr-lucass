export type CurrentPhotoCategory = "Exterior" | "Priveliste" | "Interior"
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
    src: "/images/current/bathroom-portrait.webp",
    alt: "Baie finisată cu plăci de marmură și cabină de duș",
    orientation: "portrait",
  },
  {
    category: "Priveliste",
    src: "/images/current/view-landscape.webp",
    alt: "Vedere panoramică spre lacul Siutghiol de la nivelul superior al ansamblului",
    orientation: "landscape",
  },
  {
    category: "Priveliste",
    src: "/images/current/rooftop.webp",
    alt: "Terasă rooftop cu placare lemnoasă și pardoseală finisată",
    orientation: "portrait",
  },
  {
    category: "Priveliste",
    src: "/images/current/view-portrait.webp",
    alt: "Priveliște spre lacul Siutghiol și zona liniștită din jurul Mr Lucass",
    orientation: "portrait",
  },
]