<script setup lang="ts">
import { Text } from "../../../model/uiElementsStatic";

const props = defineProps<{
    model: Text
}>()

</script>

<template>
    <div class="text">
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
</style>