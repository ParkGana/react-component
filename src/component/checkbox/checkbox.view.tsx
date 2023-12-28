import { CheckboxStyle } from './checkbox.style'

export function Checkbox({
    selected,
    name,
    checkCallback
}: {
    selected: boolean
    name: string
    checkCallback: (result: string) => void
}) {
    return (
        <CheckboxStyle.Container onClick={() => checkCallback(name)}>
            <CheckboxStyle.Icon src={`/icons/checkbox-${selected ? 'checked' : 'unchecked'}.png`} alt={'icon'} />
            <CheckboxStyle.Name>{name}</CheckboxStyle.Name>
        </CheckboxStyle.Container>
    )
}
