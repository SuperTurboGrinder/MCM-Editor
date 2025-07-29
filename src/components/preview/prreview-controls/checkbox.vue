<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

import BaseControl from "./baseControl.vue";

const status = ref(true);

const switchStatus = () => status.value = !status.value;

</script>

<template>
    <BaseControl>
        <div class="checkbox-switch mcm-input" :class="{on: status}" @click="switchStatus">
            <p v-if="status">ON</p>
            <p v-else>OFF</p>
        </div>
    </BaseControl>
</template>

<style scoped>
.checkbox-switch {
    display: flex;
    justify-content: space-around;
}
.checkbox-switch > p {
    display: block;
    width: fit-content;
    transition: 0.2;
}
</style>

