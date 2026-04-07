import BannerTwo from "@/components/BannerTwo";
import CauseSliderOne from "@/components/CauseSliderOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FaqOne from "@/components/FaqOne";
import FooterTwo from "@/components/FooterTwo";
import GalleryOne from "@/components/GalleryOne";
import HeaderTwo from "@/components/HeaderTwo";
import HelpTwo from "@/components/HelpTwo";
import PartnerTwo from "@/components/PartnerTwo";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialTwo from "@/components/TestimonialTwo";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Little Life Foundation"
};

const Page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* HeaderTwo */}
        <HeaderTwo />

        {/* BannerTwo */}
        <BannerTwo />

        {/* HelpTwo */}
        <HelpTwo />

        {/* CauseSliderOne */}
        <CauseSliderOne />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* TeamTwo */}
        <TeamTwo />

        {/* FaqOne */}
        <FaqOne />

        {/* PartnerTwo */}
        <PartnerTwo />

        {/* TestimonialTwo */}
        <TestimonialTwo />

        {/* GalleryOne */}
        <GalleryOne />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default Page;