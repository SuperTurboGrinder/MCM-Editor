<script setup lang="ts">

import { ref } from 'vue';
import Tooltip from './tooltip.vue';

const props = defineProps<{
    label: string,
    hint: string,
    invalidated: boolean
}>()

let ttBottom = ref(true);

const updateTooltipPos = (event: MouseEvent) => {
    ttBottom.value = window.screen.height/2 > event.clientY;
}

</script>

<template>
    <div class="input-field" :class="{invalidated: invalidated, tooltippedBottom: ttBottom, tooltippedTop: !ttBottom}" @mouseenter="updateTooltipPos">
        <label>{{ label }}</label>
        <slot></slot>
        <Tooltip :hint="hint" />
    </div>
</template>

<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    padding-bottom: 3px;
    width: 100%;
    overflow: visible;
}
.input-field.invalidated > input {
    outline-width: 1px;
    outline-style: solid;
    outline-color: crimson;
}
.input-field > label,
.input-field > input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
</style>