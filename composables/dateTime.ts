import isCI from 'is-ci'

export const timeStamp = () => {
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
    return date.toLocaleTimeString('en-au', options)
}