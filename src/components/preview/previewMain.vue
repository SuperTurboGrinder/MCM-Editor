<script setup lang="ts">
import { inject, Ref, ref } from "vue";

import GenericElement from "./prreview-controls/genericElement.vue";
import { BaseUIElement } from "../../model/uiElementsBase";
import { EventBusKey } from "../../providerKeys";

const props = defineProps<{
    pageContent: BaseUIElement[];
}>()

let description = ref("");
const setDescription = (desc: string) => description.value = desc;
const resetDescription = () => description.value = "";

const currentlySelected: Ref<BaseUIElement | null> = ref(null);

const eventBus = inject(EventBusKey);
eventBus?.on("PreviewElementSelectionEvent", (newSelected: BaseUIElement | null) => currentlySelected.value = newSelected);

</script>

<template>
    <div class="controls preview-scrollable">
        <GenericElement
            v-for="model in pageContent"
            :model-base="model"
            :currently-selected="model === currentlySelected"
            @update-description="setDescription"
            @clear-description="resetDescription"
        />
    </div>
    <div class="description">
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
.controls {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 85%;
    max-height: 85%;
    padding-left: 5px;
}
.description {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 15%;
    max-height: 15%;
    text-align: left;
    padding: 10px 20px;
}
</style>