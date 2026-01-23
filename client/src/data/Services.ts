import { AppWindow, LayoutTemplate, MonitorCheck, TabletSmartphone } from "lucide-react";
import type { TService } from "../types/services.types";

export const services : TService[] = [
    {
        tittle: 'Diseño UI/UX',
        description: 'Creación de interfaces atractivas y funcionales en Figma. Prototipado interactivo y diseño centrado en el usuario para páginas web y apps móviles.',
        icon: LayoutTemplate,
        details: [
            'Diseño de wireframes y mockups',
            'Prototipos interactivos en Figma',
            'Sistemas de diseño consistentes',
            'Pruebas de usabilidad',
            'Diseño responsive y adaptable'
        ]
    },
    {
        tittle: 'Desarrollo Web (Frontend + Backend)',
        description: 'Creación de páginas web completas, responsivas y funcionales. Desde el diseño visual hasta el manejo de bases de datos y lógica del servidor.',
        icon: AppWindow,
        details: [
            'Desarrollo con React o Angular ',
            'Backend con Node.js o PHP ',
            'Bases de datos SQL y NoSQL',
            'APIs RESTful',
            'Despliegue en servidores'
        ]
    },
    {
        tittle: 'Aplicaciones de Escritorio',
        description: 'Desarrollo de programas para Windows usando C++, C# o Java. Ideal para herramientas empresariales, control de inventarios y automatización.',
        icon: MonitorCheck,
        details: [
            'Interfaces nativas de Windows',
            'Aplicaciones de base de datos',
            'Integración con hardware',
            'Aplicaciones multi-hilo',
            'Sistemas de autenticación'
        ]
    },
    {
        tittle: 'Desarrollo Móvil',
        description: 'Creación de aplicaciones móviles nativas con Java para Android. Ideal para apps empresariales o personales.',
        icon: TabletSmartphone,
        details: [
            'Apps nativas Android con Java/Kotlin',
            'Integración con APIs nativas',
            'Publicación en stores'
        ]
    }
];