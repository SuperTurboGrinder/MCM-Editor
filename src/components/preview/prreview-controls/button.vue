<script setup lang="ts">

import BaseControl from "./baseControl.vue";
import { Button } from "../../../model/uiElementsInputs";

const props = defineProps<{
    model: Button
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

</script>

<template>
    <BaseControl :label=model.text @hovered="$emit('hovered', model.help)" @unhovered="$emit('unhovered')">
        <!-- no point to add click callback in a preview -->
    </BaseControl>
</template>

<style scoped>
</style>

