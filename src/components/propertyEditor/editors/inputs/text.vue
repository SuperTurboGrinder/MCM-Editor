<script setup lang="ts">
import { ref, watch } from 'vue';
import * as ValidationUtils from "../../../../model/validationUtils"
import BaseInput from './baseInput.vue';

let invalidated = ref(false)

const [model, modifiers] = defineModel<string>({
    required: true,
    default: "",
    set(value: string) {
        invalidated.value = false;
        if(modifiers.isFileName && !ValidationUtils.isProperWindowsFileName(value)) {
            invalidated.value = true;
        }
        if(modifiers.notEmpty && value.length === 0) {
            invalidated.value = true;
        }
        return value;
    }
});

const {label, hint, maxLength=255} = defineProps<{
    label: string,
    hint: string,
    maxLength?: number
}>()

</script>

<template>
    <BaseInput :label="label" :hint="hint" :invalidated="invalidated">
        <input type="text" :maxlength="maxLength" v-model="model">
    </BaseInput>
</template>

<style scoped>
</style>