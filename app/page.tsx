import FooterForm from "@/components/Form/FooterForm";
import Pepsi from "@/components/modal/Pepsi";
import { BgImage } from "@/components/section1/BgImage";
import DiffrentEnergy from "@/components/section1/DiffrentEnergy";
import HeroSection from "@/components/section1/HeroSection";
import SuperNatural from "@/components/section2/SuperNatural";
import { Heading } from "@/components/section3/Heading";
import ParagraphSection from "@/components/section3/ParagraphSection";
import ShortHeading from "@/components/section4/ShortHeading";
import CenterSection from "@/components/section6/CenterSection";
import CenterImage from "@/components/section7/CenterImage";
import ContactHeading from "@/components/section8/ContactHeading";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <BgImage/>
      <DiffrentEnergy />
      <SuperNatural/>
      <Heading />
      <ParagraphSection />
      <ShortHeading />
      <CenterSection />
      <CenterImage/>
      <ContactHeading/>
      <FooterForm/>
      <Pepsi/>

    </main>
  )
}
