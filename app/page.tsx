import { ApartamenteSection } from "@/components/sections/apartamente";
import { DespreNoiSection } from "@/components/sections/despre-noi";
import { GalerieSection } from "@/components/sections/galerie";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div >
      <Hero/>
      <DespreNoiSection/>
      <GalerieSection/>
      <ApartamenteSection/>
    </div>
  );
}
