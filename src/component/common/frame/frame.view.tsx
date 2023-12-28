import { FrameStyle } from './frame.style'

export function Frame({ children }: { children: React.ReactNode }) {
    return (
        <FrameStyle.Container>
            <FrameStyle.SafetyContainer>{children}</FrameStyle.SafetyContainer>
        </FrameStyle.Container>
    )
}
