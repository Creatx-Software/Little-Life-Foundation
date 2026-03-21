"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const HeaderTwo = () => {
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [scroll, setScroll] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/" || pathname === "/index-two") {
      setActiveNavItem("home");
    }
  }, [pathname]);

  return (
    <>
      <header
        className={`header header-primary no-topbar ${
          scroll && "sticky-header"
        }`}
        style={{ top: 0 }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img
                        src='/assets/images/Little life - LOGO Final.png'
                        alt='Image_inner'
                        style={{ height: "88px", width: "auto" }}
                      />
                    </Link>
                  </div>

                  <div className='navbar__menu d-none d-xl-block'>
                    <ul className='navbar__list'>
                      <li className={`navbar__item nav-fade ${activeNavItem === "home" ? "active" : ""}`}>
                        <Link href='/' onClick={() => setActiveNavItem("home")}>Home</Link>
                      </li>
                      <li className={`navbar__item nav-fade ${activeNavItem === "about" ? "active" : ""}`}>
                        <Link href='/about-us' onClick={() => setActiveNavItem("about")}>About Us</Link>
                      </li>
                      <li className={`navbar__item nav-fade ${activeNavItem === "programs" ? "active" : ""}`}>
                        <Link href='/index-two' onClick={() => setActiveNavItem("programs")}>Programs</Link>
                      </li>
                      <li className={`navbar__item nav-fade ${activeNavItem === "events" ? "active" : ""}`}>
                        <Link href='/index-two' onClick={() => setActiveNavItem("events")}>Events</Link>
                      </li>
                      <li className={`navbar__item nav-fade ${activeNavItem === "volunteers" ? "active" : ""}`}>
                        <Link href='/our-team' onClick={() => setActiveNavItem("volunteers")}>Volunteers</Link>
                      </li>
                      <li className={`navbar__item nav-fade ${activeNavItem === "contact" ? "active" : ""}`}>
                        <Link href='/index-two' onClick={() => setActiveNavItem("contact")}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <div className='contact-btn d-none d-xxl-flex'>
                        <div className='contact-icon'>
                          <i className='fa-solid fa-phone-volume' />
                        </div>
                        <div className='contact-content'>
                          <p>Call Us Now</p>
                          <a href='tel:01-793-7938'>+94 70 533 2446 </a>
                        </div>
                      </div>
                      <div className='search-box'>
                        <button
                          onClick={handleSearch}
                          className='open-search'
                          aria-label='search products'
                          title='open search box'
                        >
                          <i className='fa-solid fa-magnifying-glass' />
                        </button>
                      </div>
                      <Link
                        href='/index-two'
                        className='btn--primary d-none d-md-flex'
                      >
                        Donate Now <i className='icon-circle-arrow' />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <img src='assets/images/logo.png' alt='Image_inner' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            <Link href='/index-two' className='btn--primary '>
              Donate Now <i className='fa-solid fa-arrow-right' />
            </Link>
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href='https://vimeo.com/'
              target='_blank'
              aria-label='share us on vimeo'
              title='vimeo'
            >
              <i className='fa-brands fa-vimeo-v' />
            </Link>
            <Link
              href='https://x.com/'
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-twitter' />
            </Link>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>

      <div
        className={`${search ? "search-active search-popup" : "search-popup"}`}
      >
        <button
          onClick={handleSearch}
          className='close-search'
          aria-label='close search box'
          title='close search box'
        >
          <i className='fa-solid fa-xmark' />
        </button>
        <form action='#' method='post'>
          <div className='search-popup__group'>
            <input
              type='text'
              name='search-field'
              id='searchField'
              placeholder='Search....'
              required=''
            />
            <button
              type='submit'
              aria-label='search products'
              title='search products'
            >
              <i className='fa-solid fa-magnifying-glass' />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HeaderTwo;
