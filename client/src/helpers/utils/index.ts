export const isDesktop = () =>
  typeof window !== "undefined" && window.innerWidth >= 1024

export const normalizeTechKey = (tech: string) =>
  tech
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, '')
