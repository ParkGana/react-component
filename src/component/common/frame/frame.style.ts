import styled from 'styled-components'

export namespace FrameStyle {
    export const Container = styled.div`
        display: grid;
        justify-items: center;
        align-items: center;
        margin: 30px;
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            display: grid;
            gap: 50px;

            ${theme.ratio.size({
                large: `
                    grid-template-columns: repeat(3, 1fr);
                `,
                medium: `
                    grid-template-columns: repeat(2, 1fr);
                `,
                small: ``
            })}
        `}
    `
}
