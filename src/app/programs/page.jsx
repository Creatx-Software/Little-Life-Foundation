import BreadcrumbOne from "@/components/BreadcrumbOne";
import Programs from "@/components/CauseSliderOne";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Little Life Foundation"
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
        <BreadcrumbOne title='Our Programs' />

        {/* Programs */}
        <Programs />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
