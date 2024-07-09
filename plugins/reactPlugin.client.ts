import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { Excalidraw } from '@excalidraw/excalidraw'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('excalidraw', { createElement, createRoot, Excalidraw })
})