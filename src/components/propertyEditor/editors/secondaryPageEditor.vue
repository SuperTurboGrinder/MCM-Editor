<script setup lang="ts">
import { ref } from 'vue';
import { SecondaryPage } from '../../../model/page';

import Text from './inputs/text.vue';
import BaseEditor from './baseEditor.vue';

const props = defineProps<{
    page: SecondaryPage;
}>()

const heading = ref(props.page.displayName);

</script>

<template>
    <BaseEditor :heading="heading">
        <Text
            label="Page name"
            hint="Name of this page of the menu"
            v-model.notEmpty="page.displayName"
        />
    </BaseEditor>
</template>

<style scoped>

</style>