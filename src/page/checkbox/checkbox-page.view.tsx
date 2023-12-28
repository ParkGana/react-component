import { Box } from '@/src/component/common/box/box.view'
import { CheckboxPageStyle } from './checkbox-page.style'
import { Checkbox } from '@/src/component/checkbox/checkbox.view'
import { useCheckboxPage } from './checkbox-page.hook'

export function CheckboxPage() {
    const { datas, events } = useCheckboxPage()

    return (
        <Box title={'CHECKBOX'}>
            <CheckboxPageStyle.Container>
                {['글램핑', '노지', '오토', '카라반'].map((item, index) => (
                    <Checkbox
                        key={index}
                        selected={datas.values.includes(item)}
                        name={item}
                        checkCallback={events.onCheckValue}
                    />
                ))}
            </CheckboxPageStyle.Container>
        </Box>
    )
}
