document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGTM, 3500) // initialise after XXX milliseconds
})

document.addEventListener('scroll', initGTMOnEvent)
document.addEventListener('mousemove', initGTMOnEvent)
document.addEventListener('touchstart', initGTMOnEvent)

function initGTMOnEvent(event) {
    initGTM()
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent) // remove the event listener after initialise
}

function initGTM() {
    if (window.gtmDidInit) {
        return false
    }
    window.gtmDidInit = true // flag to ensure script does not get added to DOM more than once
    window.dataLayer = window.dataLayer || []
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => { // ensure PageViews is always tracked (on script load)
        window.dataLayer.push({
            "event": 'gtm.js',
            "gtm.start": new Date().getTime(),
            "gtm.uniqueEventId": 0
        })
    }
    script.src = '/js/gtm.min.js'
    document.head.appendChild(script)
}