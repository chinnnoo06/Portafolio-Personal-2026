import type z from "zod";
import type { ProjectSchema } from "../schemas/project.schemas";

export type TProject = z.infer<typeof ProjectSchema>