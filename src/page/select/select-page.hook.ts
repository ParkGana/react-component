import { useState } from 'react'

export function useSelectPage() {
    const [value, setValue] = useState<string>()

    /* select 창에서 option 선택 */
    const onSelectValue = (result: string) => {
        setValue(result)
    }

    return {
        datas: {
            value
        },
        events: {
            onSelectValue
        }
    }
}
