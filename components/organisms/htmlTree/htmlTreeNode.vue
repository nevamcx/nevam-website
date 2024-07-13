<template>

    <div class="children">

        <div 
            :class="`card ${props.firstChild ? 'first-child' : ''}`"
            :id="props.id ? props.id : null"
            :parent-id="props.parentId ? props.parentId : null"
            @click="(e) => toggleCard(e)"
        >
            <span class="text" v-if="props.node.name">{{ props.node.name }}</span>
        </div>

        <htmlTreeNode
            v-if="props.node.children && props.node.children.length"
            v-for="(child, childIndex) in props.node.children"
            :node="child" 
            :firstChild="childIndex == 0 ? true : false"
            :id="child.id"
            :parent-id="props.node.id"
        />

    </div>

</template>

<script setup lang="ts">
import { publish } from '@/events/events'

const props = defineProps({
    node: {
        type: Object,
        default: () => { }
    },
    firstChild: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ''
    },
    parentId: {
        type: String,
        default: ''
    }
})

const toggleCard = (event: any) => {
    // define card
    if(event.target.tagName == 'DIV' && event.target.classList.length) {
        const array = Array.from(event.target.classList)
        const element = document.getElementById(event.target.id)
        const elements = document.getElementsByClassName('card')
        if(element) {
            // is closed: open it
            if(array.includes('card') && !array.includes('open')) {
                // close others before
                Array.from(elements).forEach((element) => {
                    element.classList.remove('open')
                })
                element.classList.add('open')
                publish('triggerDrawVerticalLines', { redraw: 1 })
            }
            // is open: close it
            if(array.includes('card') && array.includes('open')) {
                element.classList.remove('open')
                publish('triggerDrawVerticalLines', { redraw: 1 })
            }
        }
    }
}
</script>
