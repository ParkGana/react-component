import { useEffect } from 'react'

export function useFollowCursor() {
    useEffect(() => {
        const area = document.getElementById('area')
        const circle = document.getElementById('circle')

        let areaTop: number
        let areaLeft: number

        if (area) {
            areaTop = area.getBoundingClientRect().top
            areaLeft = area.getBoundingClientRect().left

            window.addEventListener('resize', (e) => {
                areaTop = area.getBoundingClientRect().top
                areaLeft = area.getBoundingClientRect().left
            })

            document.addEventListener('mousemove', (e) => {
                let pageTop = e.pageY - 25
                let pageLeft = e.pageX - 25

                if (circle) {
                    setTimeout(() => {
                        circle.style.top = pageTop - areaTop + 'px'
                        circle.style.left = pageLeft - areaLeft + 'px'
                    }, 50)
                }
            })
        }
    }, [])
}
