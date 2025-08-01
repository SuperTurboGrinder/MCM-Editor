<script setup lang="ts">
import { ref } from 'vue';
import { MainPage, SecondaryPage } from '../../../model/page';

import Text from './inputs/text.vue';
import BaseEditor from './baseEditor.vue';
import Integer from './inputs/integer.vue';
import PagesSelector from './inputs/pagesSelector.vue';
import { PreviewTestCase } from '../../preview/testCase';

const props = defineProps<{
    page: MainPage;
}>()

const testCase = new PreviewTestCase();
const secondaryPages = ref(testCase.mainPage.pages);

const heading = ref(props.page.displayName);

const update = (updatedPages: SecondaryPage[]) => secondaryPages.value = updatedPages;

</script>

<template>
    <BaseEditor :heading="heading">
        <Text
            label="Mod name"
            hint="Name of the plugin wihtout the extension.
                For example: it your plugin is MyAwesomeMod.esp,
                then this value should be MyAwesomeMod"
            v-model.isFileName="page.modName"
        />
        <Text
            label="Display name"
            hint="Name of the main page in this MCM,
                usually more human readable version of mod name.
                For example: My Awesome Mod"
            v-model.notEmpty="page.displayName"
        />
        <Integer
            label="Min MCM version"
            hint="Minimum version of MCM plugin required to use this
                menu. Usually set to 2."
            :min="1" :max="2"
            v-model="page.minMcmVersion"
        />
        <PagesSelector
            :pages="secondaryPages"
            v-on:update="update"
        />
    </BaseEditor>
</template>

<style scoped>

</style>