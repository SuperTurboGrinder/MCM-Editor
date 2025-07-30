<script setup lang="ts">
import { ref } from "vue";

import BaseControl from "./baseControl.vue";
import { Switcher } from "../../../model/uiElementsInputs";

const props = defineProps<{
    model: Switcher
}>()

const emit = defineEmits<{
  hovered: [description: string],
  unhovered: []
}>()

const status = ref(props.model.defaultValue);

const switchStatus = () => status.value = !status.value;

</script>

<template>
    <BaseControl :label=model.text @hovered="$emit('hovered', model.help)" @unhovered="$emit('unhovered')">
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

