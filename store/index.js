import { defineStore } from 'pinia'

export const baseStore = defineStore('store', {

    state: () => {
        return {
            modal: false
        }
    },
    persist: true,
    actions: {}
})