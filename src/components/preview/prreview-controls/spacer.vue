<script setup lang="ts">
import { computed } from "vue";
import { Spacer, SpacerType } from "../../../model/uiElementsStatic";

const props = defineProps<{
    model: Spacer
}>()

const height = computed(() => {
    return props.model.spacerType === SpacerType.InLines
        ? props.model.height + 'lh'
        : props.model.height + 'px'
})

</script>

<template>
    <div class="spacer" :style="{height: height}"></div>
</template>

<style scoped>
.spacer {
    box-sizing: border-box;
    width: 100%;
}
</style>