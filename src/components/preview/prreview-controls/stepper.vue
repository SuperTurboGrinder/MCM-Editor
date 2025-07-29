<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import BaseControl from "./baseControl.vue";

const values = ref(["Val1", "Val2", "Val3"]);
let currentValue = ref(0);
let leftArrowVisible = ref(false);
let rightArrowVisible = ref(values.value.length > 0);

const updateArrowsStatus = () => {
    leftArrowVisible.value = currentValue.value !== 0;
    rightArrowVisible.value = currentValue.value !== values.value.length-1;
}

const switchValueLooped = () => {
    const max_index = values.value.length-1;
    currentValue.value = currentValue.value === max_index ? 0 : currentValue.value+1;
    updateArrowsStatus();
}
const switchToPrevValue = () => {
    if(currentValue.value !== 0) {
        currentValue.value = currentValue.value-1;
        updateArrowsStatus();
    }
}
const switchToNextValue = () => {
    if(currentValue.value < values.value.length-1) {
        currentValue.value = currentValue.value+1;
        updateArrowsStatus();
    }
}

</script>

<template>
    <BaseControl>
        <div
            class="stepper mcm-input"
            :class="{ leftArrow: leftArrowVisible, rightArrow: rightArrowVisible }"
        >
            <p class="preview-before-after">{{ values[currentValue] }}</p>
            <div class="left-btn" @click="switchToPrevValue"></div>
            <div class="right-btn" @click="switchToNextValue"></div>
        </div>
    </BaseControl>
</template>

<style scoped>
.stepper {
    position: relative;
    display: flex;
    justify-content: space-around;
}
.stepper.leftArrow > p::before,
.stepper.rightArrow > p::after {
    content:"";
    display: block;
    position: absolute;
    width: 0; 
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    top: 4px;
}
.stepper.leftArrow > p::before {
    left: -12px;
    border-left: 5px solid transparent;
    border-right: 5px solid;
}
.stepper.rightArrow > p::after {
    right: -12px;
    border-right: 5px solid transparent;
    border-left: 5px solid;
}
.stepper > p {
    position: relative;
    display: block;
    width: fit-content;
    transition: 0.2;
}
.stepper .left-btn,
.stepper .right-btn {
    position: absolute;
    width: 50%;
    height: 100%;
}
.stepper .left-btn {
    left: 0px;
}
.stepper .right-btn {
    right:0px;
}

</style>