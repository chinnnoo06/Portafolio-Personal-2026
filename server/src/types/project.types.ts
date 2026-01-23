

export type TProjectContent =
    | {
        type: "paragraph"
        text: string
    }
    | {
        type: "heading"
        level: 2 | 3
        text: string
    }
    | {
        type: "quote"
        text: string
    }

export type TProject = {
    name: string
    slug: string
    excerpt: string
    content: TProjectContent[]
    images: string[]
    technologies: string[]
    githubUrl?: string
}