import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterTwo from "@/components/FooterTwo";
import GalleryOne from "@/components/GalleryOne";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* HeaderTwo */}
        <HeaderTwo />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='About Us' />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
