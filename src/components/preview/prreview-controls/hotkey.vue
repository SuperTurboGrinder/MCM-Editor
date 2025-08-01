<script setup lang="ts">

import BaseControl from "./baseControl.vue";
import { Hotkey } from "../../../model/uiElementsInputs";
import { inject } from "vue";
import { EventBusKey } from "../../../providerKeys";

const props = defineProps<{
    model: Hotkey,
    currentlySelected: boolean
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

const eventBus = inject(EventBusKey);
const updateSelection = () => eventBus?.emit("PreviewElementSelectionEvent", props.model);

</script>

<template>
    <BaseControl
        :label=model.text
        :selected="currentlySelected"
        @hovered="$emit('hovered', model.help)"
        @unhovered="$emit('unhovered')"
        @click="updateSelection"
    >
        <div class="mcm-input">
            <p>None)</p>
        </div>
    </BaseControl>
</template>

<style scoped>
</style>

