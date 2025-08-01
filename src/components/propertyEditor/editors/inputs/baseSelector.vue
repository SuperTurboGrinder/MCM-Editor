<script setup lang="ts">

const emit = defineEmits<{
  onAdd: [],
  onRemove: [],
  onUp: [],
  onDown: []
}>()

</script>

<template>
    <div class="selector">
        <div class="controls">
            <input type="button" value="Add" @click="$emit('onAdd')"/>
            <input type="button" value="Rem" @click="$emit('onRemove')"/>
            <input type="button" value="Up" @click="$emit('onUp')"/>
            <input type="button" value="Down" @click="$emit('onDown')"/>
        </div>
        <div class="selection">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.selector {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    padding-top: 10px;
}
.selector .controls {
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    width: 100%;
}
.selector .selection {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid black;
    border-bottom: 0px;
}
.selector .selection > * {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid black;
    cursor: pointer;
    user-select: none;
}
</style>

<style>
.selector .selection > *.selected,
.selector .selection > *:hover {
    background-color: brown;
    color: cornflowerblue;
}
</style>