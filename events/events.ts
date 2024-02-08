const subscribe = (eventName: string, listener: any) => {
    document.addEventListener(eventName, listener)
}

const unsubscribe = (eventName: string, listener: any) => {
    document.removeEventListener(eventName, listener)
}

const publish = (eventName: string, data: object) => {
    const event = new CustomEvent(eventName, { detail: data })
    document.dispatchEvent(event)
}

export { publish, subscribe, unsubscribe }