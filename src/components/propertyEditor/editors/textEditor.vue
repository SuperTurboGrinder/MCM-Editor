<script setup lang="ts">

import BaseEditor from './baseEditor.vue';
import { Text } from '../../../model/uiElementsStatic';
import Dropdown from './inputs/dropdown.vue';
import { ref, watch } from 'vue';
import TextInput from './inputs/text.vue';

const props = defineProps<{
    text: Text;
}>()

const isHtml = ref(props.text.html ? 1 : 0);
watch(isHtml, (val, _1, _2) => props.text.html = isHtml.value===1 ? true : false)

</script>

<template>
    <BaseEditor heading="Text">
        <TextInput
            label="Text"
            hint="Text to display."
            v-model="text.text"
        />
        <Dropdown
            label="Is HTML"
            hint="Should MCM display this text as html
                using decoraing tags inside. For example text
                '<b>bold</b>' when html enabled would be displayed
                in bold."
            :values="['No', 'Yes']"
            v-model="isHtml"
        />
    </BaseEditor>
</template>

<style scoped>

</style>