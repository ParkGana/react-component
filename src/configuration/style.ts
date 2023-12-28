import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const style = createGlobalStyle`
    ${reset}

    * {
        margin: 0px;
        padding : 0px;
        box-sizing : border-box;
    }

    body {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
