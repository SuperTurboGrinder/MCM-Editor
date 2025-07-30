<script setup lang="ts">
import { ref } from "vue";

import BaseControl from "./baseControl.vue";
import { Dropdown } from "../../../model/uiElementsInputs";

const props = defineProps<{
    model: Dropdown
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()


let currentValue = ref(props.model.options.indexOf(props.model.defaultValue));
let open = ref(false);

const openDropdown = () => open.value = true;
const closeDropdown = () => open.value = false;
const setCurrent = (index:number) => {
    currentValue.value = index;
    closeDropdown();
}

</script>

<template>
    <BaseControl :label=model.text @hovered="$emit('hovered', model.help)" @unhovered="$emit('unhovered')">
        <div
            class="dropdown mcm-input"
            :class="{open: open}"
            @blur="closeDropdown"
            tabindex="0"
        >
            <p class="preview-border">{{ model.options[currentValue] }}</p>
            <div class="open-button" @click="openDropdown"></div>
            <div class="dropdown-body preview-color-override">
                <div class="background preview-before-after"></div>
                <div
                    class="entry preview-control"
                    v-for="(entry, index) in model.options"
                    @click="setCurrent(index)"
                >
                    <p>{{ entry }}</p>
                </div>
            </div>
        </div>
    </BaseControl>
</template>

<style scoped>

.dropdown {
    position: relative;
    display: flex;
    justify-content: space-around;
}
.dropdown > p::after {
    content:"";
    display: block;
    position: absolute;
    width: 0; 
    height: 0;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid;
    top: 6px;
    right: -12px;
}
.dropdown.open > p::after {
    border-top: 5px solid transparent;
    border-bottom: 5px solid;
    top: 0px;
}
.dropdown > p {
    position: relative;
    display: block;
    width: fit-content;
    transition: 0.2;
    border: 0px !important;
}
.dropdown .dropdown-body {
    position: absolute;
    display: none;
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    bottom: 28px;
    transition: 0.2s;
    opacity: 0;
    z-index: 1;
}
.dropdown .dropdown-body .background {
    position: absolute;
    display: block;
    background-color: hsla(0, 0%, 0%, 0.5);
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.dropdown .dropdown-body .background::before,
.dropdown .dropdown-body .background::after {
    content: "";
    position: absolute;
    border: 3px solid;
    width: 100%;
    height: 6px;
    left: 0px;
}
.dropdown .dropdown-body .background::before {
    border-bottom: 0px;
    top: -2px;
}
.dropdown .dropdown-body .background::after {
    border-top: 0px;
    bottom: -2px;
}
.dropdown.open .dropdown-body {
    display: block;
    opacity: 1;
}
.dropdown .dropdown-body .entry {
    display: block;
    width: 100%;
    padding: 2px;
}
.open-button {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>