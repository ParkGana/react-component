import styled from 'styled-components'

export namespace SelectStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 250px;
            position: relative;
            display: grid;
            grid-template-columns: auto 14px;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${theme.color.gray};
            padding: 10px;
            cursor: pointer;
        `}
    `

    export const Text = styled.div<{ isSelected: boolean }>`
        ${({ theme, isSelected }) => `
            ${theme.font.body1};
            color: ${isSelected ? theme.color.black : theme.color.gray};
        `}
    `

    export const Icon = styled.img``

    export namespace Option {
        export const Container = styled.div<{ isOpen: boolean }>`
            ${({ theme, isOpen }) => `
                position: absolute;
                top: 40px;
                left: -1px;
                right: -1px;
                display: ${isOpen ? 'block' : 'none'};
                border: 1px solid ${theme.color.gray};
                z-index: 1;
            `}
        `

        export const SafetyContainer = styled.div`
            ${({ theme }) => `
                background-color: ${theme.color.white};
                padding: 10px;

                :hover {
                    background-color: ${theme.color.lightgray};
                }
            `}
        `

        export const Text = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
            `}
        `
    }
}
