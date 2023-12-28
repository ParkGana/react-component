import { useEffect, useState } from 'react'

export function useCheckboxPage() {
    const [values, setValues] = useState<string[]>([])

    /* checkbox 선택 */
    const onCheckValue = (result: string) => {
        if (values.includes(result)) {
            setValues(values.filter((item) => item !== result))
        } else {
            setValues((prevValues) => {
                return [...prevValues, result]
            })
        }
    }

    return {
        datas: {
            values
        },
        events: {
            onCheckValue
        }
    }
}
