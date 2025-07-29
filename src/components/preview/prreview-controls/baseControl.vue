<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";



</script>

<template>
    <div class="preview-control base-control">
        <p>Test text</p>
        <slot></slot>
    </div>
</template>

<style scoped>
.base-control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    font-weight: 600;
    padding: 5px 25px;
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