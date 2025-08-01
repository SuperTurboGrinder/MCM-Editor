<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './baseInput.vue';

let invalidated = ref(false)

const current = defineModel<number>({required: true})

const props = defineProps<{
    label: string,
    hint: string,
    values: string[]
}>()

let opened = ref(false)
let directionTop = ref(false)
const openOrClose = () => opened.value = !opened.value;

const updateDropdownDirection = (event: MouseEvent) => {
    directionTop.value = window.screen.height/2 > event.clientY;
}

const select = (value: string) => {
    openOrClose();
    current.value = props.values.indexOf(value);
}

</script>

<template>
    <BaseInput :label="label" :hint="hint" :invalidated="false">
        <div 
            class="dropdown"
            :class="{open: opened, toTop: directionTop, toBottom: !directionTop}"
        >
            <div
                class="current"
                @click="openOrClose"
                @mouseenter="updateDropdownDirection"
            >
                <p>{{ values[current] }}</p>
            </div>
            <div class="content">
                <div v-for="value in values" @click="select(value)">
                    <p>{{ value }}</p>
                </div>
            </div>
        </div>
    </BaseInput>
</template>

<style scoped>
.dropdown {
    position: relative;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    width: 100%;
    padding: 10px;
    padding-bottom: 3px;
}
.dropdown .content {
    position: absolute;
    display: none;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    border: 1px solid black;
    background-color: #224;
}
.dropdown .current {
    display: block;
    width: 100%;
}
.dropdown.open .content {
    display: flex;
}
.dropdown.open.toTop .content {
    top: -100%
}
.dropdown.open.toBottom .content {
    bottom: 100%
}
.dropdown .current:hover,
.dropdown .content > div:hover {
    background-color: brown;
    color: cornflowerblue;
}
</style>