import type { ReactNode } from 'react'
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaMicrosoft,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiAngular,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'

export const TECHNOLOGIES_MAP: Record<
  string,
  { icon: ReactNode; label: string }
> = {
  javascript: {
    icon: <SiJavascript className="text-[#f0db4f]" />,
    label: 'JavaScript',
  },
  typescript: {
    icon: <SiTypescript className="text-[#3178c6]" />,
    label: 'TypeScript',
  },
  nodejs: {
    icon: <FaNodeJs className="text-[#68a063]" />,
    label: 'Node.js',
  },
  react: {
    icon: <FaReact className="text-[#61dafb]" />,
    label: 'React',
  },
  bootstrap: {
    icon: <FaBootstrap className="text-[#7952b3]" />,
    label: 'Bootstrap',
  },
  tailwind: {
    icon: <SiTailwindcss className="text-[#38bdf8]" />,
    label: 'Tailwind',
  },
  angular: {
    icon: <SiAngular className="text-[#dd1b16]" />,
    label: 'Angular',
  },
  expressjs: {
    icon: <SiExpress className="text-white" />,
    label: 'Express.js',
  },
  mysql: {
    icon: <SiMysql className="text-[#00758f]" />,
    label: 'MySQL',
  },
  postgresql: {
    icon: <SiPostgresql className="text-[#336791]" />,
    label: 'PostgreSQL',
  },
  mongodb: {
    icon: <SiMongodb className="text-[#47A248]" />,
    label: 'MongoDB',
  },
  sqlite: {
    icon: <SiSqlite className="text-[#003b57]" />,
    label: 'SQLite',
  },
  php: {
    icon: <FaPhp className="text-[#8892be]" />,
    label: 'PHP',
  },
  java: {
    icon: <FaJava className="text-[#007396]" />,
    label: 'Java',
  },
  csharp: {
    icon: <FaMicrosoft className="text-[#239120]" />,
    label: 'C#',
  },
}
