import isCI from 'is-ci'

export const timeStamp = (type) => {
    const date = new Date()
    const options: Object = {
        year: 'numeric',
        month: 'short',
        weekday: 'long',
        day: 'numeric',
        minute: '2-digit',
        hour: '2-digit'
    }
    if (isCI) {
        date.setHours(date.getHours() - 3)
    }
    if(type == 1) {
        return date.toLocaleTimeString('en-au', options)
    }
    if(type == 2) {
        return date.toISOString()
    }
}