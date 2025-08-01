<script setup lang="ts">

import BaseEditor from './baseEditor.vue';
import { Section } from '../../../model/uiElementsStatic';
import Text from './inputs/text.vue';

const props = defineProps<{
    section: Section;
}>()

</script>

<template>
    <BaseEditor heading="Section">
        <Text
            label="Section title"
            hint="Title displayed for this section."
            v-model="section.text"
        />
    </BaseEditor>
</template>

<style scoped>

</style>