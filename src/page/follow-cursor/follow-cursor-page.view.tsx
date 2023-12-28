import { Box } from '@/src/component/common/box/box.view'
import { FollowCursor } from '@/src/component/follow-cursor/follow-cursor.view'
import { FollowCursorPageStyle } from './follow-cursor-page.style'

export function FollowCursorPage() {
    return (
        <Box title={'FOLLOW CURSOR'}>
            <FollowCursorPageStyle.Container id="area">
                <FollowCursor />
            </FollowCursorPageStyle.Container>
        </Box>
    )
}
