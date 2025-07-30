<script setup lang="ts">
import { Section } from "../../../model/uiElementsStatic";

const props = defineProps<{
    model: Section
}>()

</script>

<template>
    <div class="section">
        <div class="title">
            <p>{{ model.text }}</p>
        </div>
    </div>
</template>

<style scoped>
.section {
    box-sizing: border-box;
    width: 100%;
}
.section .title {
    display: block;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    text-align: left;
}
.section .title > p {
    display: flex;
    width: max-content;
    white-space: nowrap;
    width: 100%;
}
.section .title > p::after {
    content: " ";
    display: block;
    border: 3px solid;
    height: 6px;
    margin-top: 8px;
    border-left: none;
    border-bottom: none;
    width: 100%;
    margin-left: 4px;
}
.section .title .separator {
    display: block;
    border: 3px solid;
    height: 6px;
    margin-top: 6px;
}
.section .title .separator.before {
    border-right: none;
    border-bottom: none;
    width: 30px;
    margin-right: 4px;
}
.section .title .separator.after {
    border-left: none;
    border-bottom: none;
    width: 100%;
    margin-left: 4px;
}
</style>