<script setup lang="ts">


const props = defineProps<{
    label: string,
    selected: boolean
}>()

const emit = defineEmits<{
  hovered: [],
  unhovered: [],
  click: []
}>()

</script>

<template>
    <div
        class="preview-control base-control"
        @mouseenter="$emit('hovered')"
        @mouseleave="$emit('unhovered')"
        @click="$emit('click')"
        :class="{currentlySelected: selected}"
    >
        <p>{{ label }}</p>
        <slot></slot>
    </div>
</template>

<style scoped>
.base-control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 5px 15px;
}

.base-control.currentlySelected {
    box-sizing: border-box;
    border: 1px solid slateblue;
}
</style>

<style>
.mcm-input {
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    text-align: center;
}
</style>