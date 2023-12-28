import { Box } from '@/src/component/common/box/box.view'
import { Select } from '@/src/component/select/select.view'
import { useSelectPage } from './select-page.hook'

export function SelectPage() {
    const { datas, events } = useSelectPage()

    return (
        <Box title={'SELECT'}>
            <Select
                placeholder={'응원하는 구단을 선택해 주세요.'}
                selected={datas.value}
                options={[
                    '기아 타이거즈',
                    '두산 베어스',
                    '롯데 자이언츠',
                    '삼성 라이온즈',
                    '키움 히어로즈',
                    '한화 이글스',
                    'KT 위즈',
                    'LG 트윈스',
                    'NC 다이노스',
                    'SSG 랜더스'
                ]}
                selectCallback={events.onSelectValue}
            />
        </Box>
    )
}
