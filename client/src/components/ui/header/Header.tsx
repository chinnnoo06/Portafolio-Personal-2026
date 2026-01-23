import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavMobile } from "./NavMobile";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");

  const location = useLocation();
  const navigate = useNavigate();

  const isInicio = location.pathname === "/";

  // Scroll de secciones
  useEffect(() => {
    if (!isInicio) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    const HEADER_OFFSET = 100;

    const onScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("inicio");
        return;
      }

      let currentId = "inicio";

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;

        if (top - HEADER_OFFSET <= 0) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // inicial

    return () => window.removeEventListener("scroll", onScroll);
  }, [isInicio]);

  // OCULTAR / MOSTRAR HEADER
  useEffect(() => {
    const handleScroll = () => {
      if (menuVisible) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuVisible]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuVisible(false);
    }
  };

  const navigateToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
    setMenuVisible(false);
  };
  return (

    <header className={`fixed top-0 left-0 w-full z-50 bg-[#272727] transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="max-w-7xl mx-auto h-22 px-4 uppercase flex justify-between items-center lg:grid grid-cols-[1fr_auto_1fr] font-poppins">

        <div className="justify-start" translate="no">
          <a href="#inicio">
            <h1 className="text-xl xl:text-2xl text-[#dde1e9] font-bold">
              FRANCISCO <span className="text-[#b03a3a]">INDA</span>
            </h1>
          </a>
        </div>

        <nav className="hidden lg:flex gap-6 xl:gap-8 justify-center">
          {[
            ["inicio", "Inicio"],
            ["sobremi", "Sobre Mí"],
            ["servicios", "Servicios"],
            ["contacto", "Contacto"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() =>
                isInicio ? scrollToSection(id) : navigateToSection(id)
              }
              className={`text-base xl:text-lg font-medium transition-colors duration-300 uppercase ${activeSection === id && isInicio
                ? "text-[#b03a3a]"
                : "text-[#dde1e9] hover:text-[#b03a3a]"
                }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => navigate("/proyectos")}
            className={`text-base xl:text-lg font-medium transition-colors duration-300 uppercase ${location.pathname === "/proyectos" || activeSection == "proyectos"
              ? "text-[#b03a3a]"
              : "text-[#dde1e9] hover:text-[#b03a3a]"
              }`}
          >
            Proyectos
          </button>
        </nav>


        {/* REDES */}
        <div className="hidden lg:flex gap-4 justify-end text-xl xl:text-2xl">
          <a
            href="https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300 "
          >
            <i className="fab fa-linkedin-in" />
          </a>

          <a
            href="https://github.com/chinnnoo06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300 "
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://wa.me/523318237277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300 "
          >
            <i className="fab fa-whatsapp" />
          </a>

          <a
            href="mailto:franciscoinda@codemx.net"
            className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300 "
          >
            <i className="fas fa-envelope" />
          </a>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`flex justify-end lg:hidden text-[#dde1e9] text-[1.6rem] cursor-pointer hover:text-[#b03a3a]
            ${menuVisible ? "hidden" : "flex"}`}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <i className="fa-solid fa-bars" />
        </div>
      </div>

      <NavMobile
        onClose={() => setMenuVisible(!menuVisible)}
        menuVisible={menuVisible}
        activeSection={activeSection}
        isInicio={isInicio}
        scrollToSection={scrollToSection}
        navigateToSection={navigateToSection} />

    </header>
  );
};
