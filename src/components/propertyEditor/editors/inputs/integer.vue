<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './baseInput.vue';

let invalidated = ref(false)

const model = defineModel<number>({
    set(value: number) {
        return value < props.min ? props.min : (value > props.max ? props.max : value);
    }
});

const props = defineProps<{
    label: string,
    hint: string,
    min: number,
    max: number
}>()

</script>

<template>
    <BaseInput :label="label" :hint="hint" :invalidated="false">
        <input type="number" :min="min" :max="max" v-model.number="model" @keydown="null">
    </BaseInput>
</template>

<style scoped>
</style>