import { publish } from '@/events/events'
import { subscribe } from '@/events/events'

export const intersectionObserver = (element: any, callback: any) => {
    const obsCallback = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.intersectionRatio > 0) {
                publish('intersectionObserver', {
                    element: element,
                    status: true
                })
            }
            else {
                publish('intersectionObserver', {
                    element: element,
                    status: false
                })
            }
        })
    }
    const options = {
        // rootMargin: '-170px',
        // threshold: 1.0
    }
    const observer = new IntersectionObserver(obsCallback, options)
    const target = document.querySelector(element)
    observer.observe(target)
    subscribe('intersectionObserver', (event: any) => callback(event, element))
}