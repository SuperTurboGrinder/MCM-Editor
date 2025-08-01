<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    heading: string
}>()

</script>

<template>
    <div class="property-editor">
        <div class="heading">
            <h3>Editor: {{ heading }}</h3>
        </div>
        <form @submit.prevent="" class="properties">
            <slot></slot>
        </form>
    </div>
</template>

<style scoped>
.property-editor {
    width: 100%;
    color: bisque;
}
</style>