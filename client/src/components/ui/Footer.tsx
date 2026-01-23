export const Footer = () => {
  return (
    <div className="footer-container bg-[#272727] border-t border-[#3d3d3d] font-poppins">
      <footer className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          <div className="flex flex-col items-center lg:items-start gap-4" translate="no">
            <a href="/">
              <h2 className="text-2xl text-[#dde1e9] font-bold tracking-wide">
                FRANCISCO <span className="text-[#b03a3a]">INDA</span>
              </h2>
            </a>

            <div className="text-center lg:text-left lg:max-w-3/4">
              <p className="text-[#EBECF2] text-sm leading-relaxed">
                Desarrollador Full Stack especializado en crear soluciones digitales innovadoras y eficientes.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">

            <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-3">
              <h3 className="text-[#b03a3a] font-semibold uppercase text-lg">Enlaces Rápidos</h3>
              <div className="flex flex-col gap-2">
                <a href="#inicio" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
                  Inicio
                </a>
                <a href="#sobremi" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
                  Sobre Mí
                </a>
                <a href="#servicios" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
                  Servicios
                </a>
                <a href="#contacto" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
                  Contacto
                </a>
                <a href="#proyectos" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-base">
                  Proyectos
                </a>
              </div>
            </div>


            <div className="flex flex-col items-center lg:items-end gap-3">
              <h3 className="text-[#b03a3a] font-semibold uppercase text-lg">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/francisco-gabriel-inda-lomeli-3ab9b0323" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="https://github.com/chinnnoo06" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://wa.me/523318237277?text=Hola%20Francisco%2C%20quiero%20más%20información." target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition-colors duration-300">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
                <a href="mailto:franciscoinda@codemx.net" target="_blank" rel="noopener noreferrer" className="text-[#dde1e9] hover:text-[#b03a3a] transition duration-300 text-2xl">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <p className="text-[#dde1e9] text-base mt-2 hidden lg:block">
                inda5054@gmail.com
              </p>
            </div>
          </div>


        </div>

        {/* Sección inferior */}
        <div className="border-t border-[#EBECF2]/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

            {/* Derechos de autor */}
            <div className="text-center lg:text-left">
              <p className="text-[#EBECF2] text-sm">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>


            {/* Información adicional */}
            <div className="text-center lg:text-right">
              <p className="text-[#EBECF2] text-sm">
                <i className="fa-solid fa-shield-halved text-[#b03a3a] mr-1"></i>
                Sitio web seguro
              </p>
            </div>
          </div>
        </div>

      </footer >
    </div >
  );
};
