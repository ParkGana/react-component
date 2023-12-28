import { useSelect } from './select.hook'
import { SelectStyle } from './select.style'

export function Select({
    placeholder,
    selected,
    options,
    selectCallback
}: {
    placeholder: string
    selected: string | undefined
    options: string[]
    selectCallback: (result: string) => void
}) {
    const { states, refs, events } = useSelect()

    return (
        <SelectStyle.Container ref={refs.ref} onClick={events.onToggleSelect}>
            <SelectStyle.Text isSelected={selected !== undefined}>{selected ?? placeholder}</SelectStyle.Text>
            <SelectStyle.Icon src={`/icons/select-arrow-${states.isOpen ? 'up' : 'down'}.png`} alt={'icon'} />
            <SelectStyle.Option.Container isOpen={states.isOpen}>
                {options.map((option, index) => (
                    <SelectStyle.Option.SafetyContainer key={index} onClick={() => selectCallback(option)}>
                        <SelectStyle.Option.Text>{option}</SelectStyle.Option.Text>
                    </SelectStyle.Option.SafetyContainer>
                ))}
            </SelectStyle.Option.Container>
        </SelectStyle.Container>
    )
}
