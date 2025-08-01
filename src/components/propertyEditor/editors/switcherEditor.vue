<script setup lang="ts">

import BaseEditor from './baseEditor.vue';
import Dropdown from './inputs/dropdown.vue';
import { ref, watch } from 'vue';
import TextInput from './inputs/text.vue';
import { Switcher } from '../../../model/uiElementsInputs';

const props = defineProps<{
    switcher: Switcher;
}>()

const defaultVal = ref(props.switcher.defaultValue ? 1 : 0);
watch(defaultVal, (val, _1, _2) => props.switcher.defaultValue = defaultVal.value===1 ? true : false)

</script>

<template>
    <BaseEditor heading="Switcher">
        <TextInput
            label="Label"
            hint="Short label to distinguish this input element's purpose."
            v-model="switcher.text"
        />
        <Dropdown
            label="Default value"
            hint="Default value of this switcher."
            :values="['False', 'True']"
            v-model="defaultVal"
        />
    </BaseEditor>
</template>

<style scoped>

</style>