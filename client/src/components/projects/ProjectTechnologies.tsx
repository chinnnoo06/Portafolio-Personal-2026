import { TECHNOLOGIES_MAP } from "../../constants/Technologies"
import { normalizeTechKey } from "../../helpers/utils"
import type { TProject } from "../../types/project.types"

type TProjectTechnologiesProps = {
  technologies: TProject['technologies']
}

export const ProjectTechnologies = ({ technologies }: TProjectTechnologiesProps) => {
  return (
    <div className="flex flex-wrap gap-4 lg:justify-center">
      {technologies.map((tech) => {
        const key = normalizeTechKey(tech)
        const data = TECHNOLOGIES_MAP[key]

        if (!data) {
          console.warn('Tech no soportada:', tech)
          return null
        }

        return (
          <div
            key={tech}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#272727] text-[#dde1e9] text-xs lg:text-sm font-medium"
          >
            <span className="text-sm lg:text-base">{data.icon}</span>
            <span className="opacity-80">{data.label}</span>
          </div>
        )
      })}
    </div>
  )
}
