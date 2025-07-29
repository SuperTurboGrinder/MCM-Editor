<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import Preview from "./preview/preview.vue";


</script>


<template>
  <div class="main_container">
    <div class="main_area">
        <div class="control"></div>
        <div class="preview-container">
            <Preview></Preview>
        </div>
    </div>
    <div class="properties"></div>
  </div>
</template>

<style scoped>
.main_container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: stretch;
    min-height: 100vh;
    max-height: 100vh;
}
.main_area {
    display: flex;
    justify-content: stretch;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    width: 75%;
    /* background-color: #444; */
}
.preview-container {
    margin: 0;
    padding: 0;
    height: 75%;
    width: 100%;
    /* background-color: blueviolet; */
}
.properties {
    /* background-color: crimson; */
    height: 100vh;
    width: 25%;
}
.control {
    /* background-color: darkgreen; */
    height: 25%;
    width: 100%;
}
</style>