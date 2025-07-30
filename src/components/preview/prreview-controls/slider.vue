<script setup lang="ts">
import { ref } from "vue";

import BaseControl from "./baseControl.vue";
import { Slider } from "../../../model/uiElementsInputs";

const props = defineProps<{
    model: Slider
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

let sliderValue = ref(props.model.defaultValue);

</script>

<template>
    <BaseControl :label=model.text @hovered="$emit('hovered', model.help)" @unhovered="$emit('unhovered')">
        <div class="slider-container">
            <p>{{ sliderValue }}</p>
            <input
                type="range"
                :min="model.min"
                :max="model.max"
                :step="model.step"
                v-model="sliderValue"
                class="slider preview-border preview-before-after mcm-input"
            >
        </div>
    </BaseControl>
</template>

<style scoped>
.slider-container {
    display: flex;
    width: fit-content;
}
.slider-container > p {
    margin-right: 10px;
}
.slider-container > input {
    position: relative;
    box-sizing: border-box;
    appearance: none;
    outline: none;
    margin: 0px;
    margin-top: 4px;
    height: 10px;
    background: none;
}
.slider-container > input::before,
.slider-container > input::after {
    content:"";
    display: block;
    position: absolute;
    width: 0; 
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.slider-container > input::before {
    left: -12px;
    top: -1px;
    border-left: 5px solid transparent;
    border-right: 5px solid;
    
}
.slider-container > input::after {
    right: -12px;
    top: -1px;
    border-right: 5px solid transparent;
    border-left: 5px solid;
}
.slider-container > input::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: #23dd45;
    cursor: pointer;
    transition: 0.2s;
}
.preview-control:hover .slider-container > input {
    border: 1px solid #186604;
}
.preview-control:hover .slider-container > input::-webkit-slider-thumb {
    background: #186604;
}
</style>