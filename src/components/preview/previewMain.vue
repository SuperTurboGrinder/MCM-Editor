<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import Section from "./prreview-controls/section.vue";
import RangeSlider from "./prreview-controls/rangeSlider.vue";
import Checkbox from "./prreview-controls/checkbox.vue";
import Stepper from "./prreview-controls/stepper.vue";
import Dropdown from "./prreview-controls/dropdown.vue";


</script>

<template>
    <Section></Section>
    <RangeSlider></RangeSlider>
    <Checkbox></Checkbox>
    <Stepper></Stepper>
    <Dropdown></Dropdown>
</template>

<style scoped>

</style>