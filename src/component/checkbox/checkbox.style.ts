import styled from 'styled-components'

export namespace CheckboxStyle {
    export const Container = styled.div`
        display: grid;
        grid-template-columns: 16px auto;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    `

    export const Icon = styled.img``

    export const Name = styled.div`
        ${({ theme }) => `
            ${theme.font.body1};
        `}
    `
}
