import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import TeamInner from "@/components/TeamInner";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import Register from "@/components/RegisterVolunteer";

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
        <BreadcrumbOne title='Become a Volunteer' />

        {/* RegisterVolunteer */}
        <Register />

        {/* TeamInner */}
        <TeamInner />

        {/* FooterTwo */}
        <FooterTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
