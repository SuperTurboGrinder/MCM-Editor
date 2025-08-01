<script setup lang="ts">
import { inject, ref } from "vue";

import BaseControl from "./baseControl.vue";
import { Switcher } from "../../../model/uiElementsInputs";
import { EventBusKey } from "../../../providerKeys";

const props = defineProps<{
    model: Switcher,
    currentlySelected: boolean
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

const status = ref(props.model.defaultValue);

const switchStatus = () => status.value = !status.value;

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
        <div class="checkbox-switch mcm-input" :class="{on: status}" @click="switchStatus">
            <p v-if="status">ON</p>
            <p v-else>OFF</p>
        </div>
    </BaseControl>
</template>

<style scoped>
.checkbox-switch {
    display: flex;
    justify-content: space-around;
}
.checkbox-switch > p {
    display: block;
    width: fit-content;
    transition: 0.2;
}
</style>

