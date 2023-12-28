const LARGE_MEDIUM = 1329 as const
const MEDIUM_SMALL = 759 as const

export const ratio = {
    size: (options: { large?: string; medium?: string; small?: string }) => {
        return `
            ${
                options.large &&
                `
                    @media (min-width: ${LARGE_MEDIUM + 1}px) {
                        ${options.large}
                    }
                `
            }

            ${
                options.medium &&
                `
                    @media (min-width: ${MEDIUM_SMALL + 1}px) and (max-width: ${LARGE_MEDIUM}px) {
                        ${options.medium}
                    }
                `
            }
            
            ${
                options.small &&
                `
                    @media (max-width: ${MEDIUM_SMALL}px) {
                        ${options.small}
                    }
                `
            }
            
        `
    }
}
