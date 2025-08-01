<script setup lang="ts">
import { computed, inject } from "vue";
import { Spacer, SpacerType } from "../../../model/uiElementsStatic";
import { EventBusKey } from "../../../providerKeys";

const props = defineProps<{
    model: Spacer,
    currentlySelected: boolean
}>()

const height = computed(() => {
    return props.model.spacerType === SpacerType.InLines
        ? props.model.height + 'lh'
        : props.model.height + 'px'
})

const eventBus = inject(EventBusKey);
const updateSelection = () => eventBus?.emit("PreviewElementSelectionEvent", props.model);

</script>

<template>
    <div class="spacer" @click="updateSelection" :style="{height: height}" :class="{selected: currentlySelected}"></div>
</template>

<style scoped>
.spacer {
    box-sizing: border-box;
    width: 100%;
}
.spacer.selected {
    box-sizing: border-box;
    border: 1px solid slateblue;
}
</style>