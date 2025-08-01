<script setup lang="ts">

const props = defineProps<{
    hint: string;
}>()

</script>

<template>
    <div class="tooltip">
        <p>{{ hint }}</p>
    </div>
</template>

<style>
.tooltippedLeft,
.tooltippedRight,
.tooltippedTop,
.tooltippedBottom {
    position: relative;
    overflow: visible;
}
.tooltip {
    display: none;
    position: absolute;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    max-width: 300px;
    border: 1px solid #224;
    background-color: blanchedalmond;
    color: #224;
    padding: 15px 10px;
    z-index: 1;
}
.tooltippedLeft:hover .tooltip,
.tooltippedRight:hover .tooltip,
.tooltippedTop:hover .tooltip,
.tooltippedBottom:hover .tooltip {
    display: block
}
.tooltippedLeft .tooltip {
    top: 0px;
    transform: translate(-110%);
}
.tooltippedRight .tooltip {
    top: 0px;
    left: 100%;
    transform: translate(10%);
}
.tooltippedTop .tooltip {
    left: 0;
    transform: translate(0, -110%);
}
.tooltippedBottom .tooltip {
    left: 0;
    top: 130%;
}
</style>

<style scoped>
</style>