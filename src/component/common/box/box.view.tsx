import { BoxStyle } from './box.style'

export function Box({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <BoxStyle.Container>
            <BoxStyle.Title>{title}</BoxStyle.Title>
            {children}
        </BoxStyle.Container>
    )
}
