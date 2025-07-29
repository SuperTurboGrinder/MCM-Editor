<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import BaseControl from "./baseControl.vue";

let sliderValue = ref(0);
const sliderMin = ref(-10);
const sliderMax = ref(10);
const sliderStep = ref(1);

</script>

<template>
    <BaseControl>
        <div class="slider-container">
            <p>{{ sliderValue }}</p>
            <input
                type="range"
                :min="sliderMin"
                :max="sliderMax"
                :step="sliderStep"
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