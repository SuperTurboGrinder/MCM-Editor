<script setup lang="ts">

import BaseEditor from './baseEditor.vue';
import { Spacer } from '../../../model/uiElementsStatic';
import Integer from './inputs/integer.vue';
import Dropdown from './inputs/dropdown.vue';
import { ref } from 'vue';

const props = defineProps<{
    spacer: Spacer;
}>()

</script>

<template>
    <BaseEditor heading="Spacer">
        <Dropdown
            label="Spacer type"
            hint="Type of units to use."
            :values="['InLineHeights', 'InPixels']"
            v-model="spacer.spacerType"
        />
        <Integer
            label="Height"
            hint="Height value of this spacer.
                Depending on spacer type can be in pixels or in text line heights.
                Only approximately represented by preview."
            :min="1" :max="100"
            v-model="spacer.height"
        />
    </BaseEditor>
</template>

<style scoped>

</style>