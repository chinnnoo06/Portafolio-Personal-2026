import { useNavigate } from "react-router-dom";

type TNavMobileProps = {
    onClose: () => void,
    menuVisible: boolean,
    activeSection: string,
    isInicio: boolean,
    scrollToSection: (id: string) => void,
    navigateToSection: (id: string) => void,
}

export const NavMobile = ({ onClose, menuVisible, activeSection, isInicio, scrollToSection, navigateToSection }: TNavMobileProps) => {
    const navigate = useNavigate();
    return (

        <div className={`menu-lateral fixed top-0 right-0 h-screen bg-[#272727] w-64 transform font-poppins ${menuVisible ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-100 flex flex-col`}>

            <div className="flex items-center p-4 border-b border-[#3d3d3d] backdrop-blur-sm">

                <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg 
                      border border-[#b03a3a]
                      text-[#dde1e9] hover:bg-[#b03a3a] 
                      hover:border-transparent
                      hover:shadow-md
                      active:scale-95
                      transition-all duration-300
                      group"
                >
                    <i className="fa-solid fa-xmark text-sm transition-transform duration-300 group-hover:rotate-180" />

                </button>
            </div>
            <nav className="flex flex-col items-start p-4 gap-8">
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
                        className={`text-base font-medium transition-colors duration-300 uppercase ${activeSection === id && isInicio
                            ? "text-[#b03a3a]"
                            : "text-[#dde1e9] hover:text-[#b03a3a]"
                            }`}
                    >
                        {label}
                    </button>
                ))}

                <button
                    onClick={() => {
                        navigate("/proyectos")
                        onClose()
                    }}
                    className={`text-base font-medium transition-colors duration-300 uppercase ${location.pathname === "/proyectos" || activeSection == "proyectos"
                        ? "text-[#b03a3a]"
                        : "text-[#dde1e9] hover:text-[#b03a3a]"
                        }`}
                >
                    Proyectos
                </button>

            </nav>

            {/* Redes sociales en menú móvil */}
            <div className="mt-auto p-4 flex justify-center gap-6 border-t border-[#3d3d3d]">
                <a href="https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/chinnnoo06" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información." target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:franciscoinda@codemx.net" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] text-xl">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}
