<script setup lang="ts">
import { computed, ref } from "vue";
import { MainPage, SecondaryPage } from "../../model/page";
import { BaseUIElement } from "../../model/uiElementsBase";

const props = defineProps<{
    mainPage: MainPage;
}>()

const emit = defineEmits<{
    updateContent: [pageContent: BaseUIElement[]]
}>()

const pages = computed(() => [props.mainPage as SecondaryPage, ...props.mainPage.pages.map((p)=>p as SecondaryPage)])
const activePage = ref(0);

const switchPage = (n: number) => {
    activePage.value = n;
    emit('updateContent', pages.value[activePage.value].content)
}

</script>

<template>
    <div class="hierarchy">
        <div
            v-for="(page, index) in pages"
            :class="{main: index===0, selected: index===activePage}"
            :key="page.displayName"
            @click="switchPage(index)"
            class="preview-control page-selector"
        >
            <p>{{ page.displayName }}</p>
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