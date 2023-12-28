import styled from 'styled-components'

export namespace BoxStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            justify-items: center;
            align-content: start;
            gap: 20px;
            border: 5px solid ${theme.color.purple};
            border-radius: 20px;
            padding: 20px;
        `}
    `

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.headline3};
        `}
    `
}
