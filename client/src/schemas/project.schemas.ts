import z from "zod";

const ProjectContentSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("paragraph"),
    text: z.string()
  }),
  z.object({
    type: z.literal("heading"),
    level: z.union([z.literal(2), z.literal(3)]),
    text: z.string()
  }),
  z.object({
    type: z.literal("quote"),
    text: z.string()
  })
])

export const ProjectSchema = z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    content: z.array(ProjectContentSchema),
    images: z.array(z.string()),
    technologies: z.array(z.string()),
    githubUrl: z.string().nullable().optional(),
    createdAt: z.coerce.date()
});