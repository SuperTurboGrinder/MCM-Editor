<script setup lang="ts">
import { ref } from "vue";

import BaseControl from "./baseControl.vue";
import { Hotkey } from "../../../model/uiElementsInputs";

const props = defineProps<{
    model: Hotkey
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

</script>

<template>
    <BaseControl :label=model.text @hovered="$emit('hovered', model.help)" @unhovered="$emit('unhovered')">
        <div class="mcm-input">
            <p>None)</p>
        </div>
    </BaseControl>
</template>

<style scoped>
</style>

