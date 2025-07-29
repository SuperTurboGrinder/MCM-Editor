<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import BaseControl from "./baseControl.vue";

import PagesHierarchy from "./pagesHierarchy.vue";
import PreviewMain from "./previewMain.vue";

</script>

<template>
    <div class="preview">
        <div class="pages">
            <PagesHierarchy></PagesHierarchy>
        </div>
        <div class="main">
            <PreviewMain></PreviewMain>
        </div>
    </div>
</template>

<style scoped>
.preview {
    display: flex;
    justify-content: stretch;
    height: 100%;
    width: 100%;
    color: #23dd45;
    background-color: #627267;
}
.preview .main {
    justify-content: space-between;
    height: 100%;
    width: 75%;
}
.preview .pages {
    height: 100%;
    width: 25%;
}
</style>


<style>
.preview-control {
    box-sizing: border-box;
    transition: 0.2s;
}
.preview-control p {
    cursor: pointer;
    user-select: none;
}
.preview-control .preview-border {
    border:1px solid #23dd45;
    box-sizing: border-box;
}
.preview-control .preview-before-after::before,
.preview-control .preview-before-after::after {
    color:  #23dd45;
    box-sizing: border-box;
}
.preview-control:hover {
    color: #186604;
    background-color: #23dd45;
}
.preview-control:hover .preview-border {
    border:1px solid #186604;
}
.preview-control:hover .preview-before-after::before,
.preview-control:hover .preview-before-after::after {
    color:#186604;
}
.preview-control.selected {
    color: #186604;
    background-color: #23dd45;
}
.preview-control.selected .preview-border {
    border:1px solid #186604;
}
.preview-control.selected .preview-before-after::before,
.preview-control.selected .preview-before-after::after {
    color: #186604;
}
.preview-control.selected:hover {
    color: #145c02;
    background-color: #19c238;
}
.preview-control.selected:hover .preview-border {
    border:1px solid #19c238;
}
.preview-control.selected:hover .preview-before-after::before,
.preview-control.selected:hover .preview-before-after::after {
    color: #19c238;
}
.preview-control .preview-color-override {
    color: #23dd45 !important;
}
.preview-control .preview-color-override .preview-before-after::before,
.preview-control .preview-color-override .preview-before-after::after {
    color: #23dd45 !important;
}
</style>