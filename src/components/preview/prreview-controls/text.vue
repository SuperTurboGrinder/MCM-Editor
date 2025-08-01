<script setup lang="ts">
import { inject } from "vue";
import { Text } from "../../../model/uiElementsStatic";
import { EventBusKey } from "../../../providerKeys";

const props = defineProps<{
    model: Text,
    currentlySelected: boolean
}>()

const eventBus = inject(EventBusKey);
const updateSelection = () => eventBus?.emit("PreviewElementSelectionEvent", props.model);

</script>

<template>
    <div class="text"@click="updateSelection" :class="{selected: currentlySelected}">
        <p v-if="model.html" v-html="model.text"></p>
        <p v-else>{{ model.text }}</p>
    </div>
</template>

<style scoped>
.text {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    padding: 5px 25px;
}
.text.selected {
    box-sizing: border-box;
    border: 1px solid slateblue;
}
</style>