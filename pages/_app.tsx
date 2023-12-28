import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/configuration/theme'
import { style as Style } from '../src/configuration/style'
import '../src/configuration/preload-font.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Style />
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>REACT</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
