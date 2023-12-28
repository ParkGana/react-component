import { Frame } from '@/src/component/common/frame/frame.view'
import { CheckboxPage } from '@/src/page/checkbox/checkbox-page.view'
import { FollowCursorPage } from '@/src/page/follow-cursor/follow-cursor-page.view'
import { SelectPage } from '@/src/page/select/select-page.view'

export default function Page() {
    return (
        <Frame>
            <CheckboxPage />
            <FollowCursorPage />
            <SelectPage />
        </Frame>
    )
}
