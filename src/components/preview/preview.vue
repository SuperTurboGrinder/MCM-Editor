<script setup lang="ts">

import { ref } from "vue";
import PagesHierarchy from "./pagesHierarchy.vue";
import PreviewMain from "./previewMain.vue";
import { PreviewTestCase } from "./testCase";
import { BaseUIElement } from "../../model/uiElementsBase";

const testCase = new PreviewTestCase();

const currentPageContent = ref(testCase.mainPage.content);

const updateContent = (newPageContent: BaseUIElement[]) => currentPageContent.value = newPageContent;

</script>

<template>
    <div class="preview">
        <div class="pages">
            <PagesHierarchy
                :main-page="testCase.mainPage"
                @update-content="updateContent"
            />
        </div>
        <div class="main">
            <PreviewMain
                :page-content="currentPageContent"
            />
        </div>
    </div>
</template>

<style scoped>
.preview {
    display: flex;
    justify-content: stretch;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    color: #23dd45;
    background-color: #627267;
    cursor: pointer;
}
.preview .main {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 75%;
    padding: 5px;
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
.preview p {
    font-weight: 600;
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


.preview .preview-scrollable{
    overflow-y: auto;
    direction: rtl;
}
.preview .preview-scrollable > * {
    direction: ltr;
}
.preview .preview-scrollable::-webkit-scrollbar-thumb {
    background-color: #23dd45;
}
.preview .preview-scrollable:-webkit-scrollbar-track {
    background-color: transparent;
}
.preview .preview-scrollable::-webkit-scrollbar {
    width: 6px;
}
.preview .preview-scrollable::-webkit-scrollbar-button:single-button {
    position: relative;
    background-color: transparent;
    display: block;
    height: 6px;
    width: 6px;
    border: 3px solid transparent
}
/* Up */
.preview .preview-scrollable::-webkit-scrollbar-button:single-button:vertical:decrement {
    border-bottom: 3px solid #23dd45;
}
/* Down */
.preview .preview-scrollable::-webkit-scrollbar-button:single-button:vertical:increment {
    border-top: 3px solid #23dd45;
}
</style>