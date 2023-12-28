import { useFollowCursor } from './follow-cursor.hook'
import { FollowCursorStyle } from './follow-cursor.style'

export function FollowCursor() {
    useFollowCursor()

    return <FollowCursorStyle.Circle id="circle" />
}
