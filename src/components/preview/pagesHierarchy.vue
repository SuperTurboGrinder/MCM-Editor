<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const pages = ref([
    "Main Page",
    "Secondary page1",
    "Secondary page2",
    "Secondary page3",
    "Secondary page4"
]);
const activePage = ref(0);

const switchPage = (n: number) => activePage.value = n;

</script>

<template>
    <div class="hierarchy">
        <div
            v-for="(pageName, index) in pages"
            :class="{main: index===0, selected: index===activePage}"
            :key="pageName"
            @click="switchPage(index)"
            class="preview-control page-selector"
        >
            <p>{{ pageName }}</p>
        </div>
    </div>
</template>

<style scoped>
.hierarchy {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-bottom: none;
    border-left: none;
}
.page-selector {
    display: block;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    font-weight: 600;
    border-bottom: 1px solid;
    text-align: left;
    padding-left: 20px;
}
.page-selector.main {
    padding-left: 10px;
}
.page-selector > p {
    user-select: none;
    padding: 0px;
    margin: 0px;
}
</style>