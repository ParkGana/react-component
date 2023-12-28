import styled from 'styled-components'

export namespace FollowCursorPageStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 300px;
            height: 200px;
            position: relative;
            border: 1px solid ${theme.color.gray};
            overflow: hidden;
        `}
    `
}
