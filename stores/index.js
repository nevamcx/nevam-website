import { defineStore } from 'pinia'

export const baseStore = defineStore('store', {

    state: () => {
        return {
            mode: null, // desktop, mobile, tablet
            mobile_device_type: null, // iphone, android
            small_mobile: false,
            spinner: false,
            modal: false
        }
    },
    persist: true,
    actions: {}
})