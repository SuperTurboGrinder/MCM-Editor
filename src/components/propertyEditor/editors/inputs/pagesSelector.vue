<script setup lang="ts">
import { ref } from 'vue';
import { SecondaryPage } from '../../../../model/page';
import BaseSelector from './baseSelector.vue';


const props = defineProps<{
    pages: SecondaryPage[]
}>()

const emit = defineEmits<{
  update: [SecondaryPage[]]
}>()

const update = () => emit('update', props.pages)

let selected = ref(0);

const select = (page: SecondaryPage) => selected.value = props.pages.indexOf(page);

const add = () => {
    let newPageName: string;
    let n = 0;
    do {
        n +=1;
        newPageName = "New Page " + n;
        console.log("TST")
    } while(props.pages.findIndex((page:SecondaryPage) => page.displayName === newPageName) != -1)
    const newPage = new SecondaryPage( newPageName, []);
    props.pages.push(newPage)
    update()
}

const move = (step: number) => {
    const newPosition = selected.value + step;
    if(newPosition < 0 || newPosition >= props.pages.length) {
        return
    }
    const temp = props.pages[newPosition]
    props.pages[newPosition] = props.pages[selected.value];
    props.pages[selected.value] = temp;
    selected.value = newPosition;
    update()
}

const remove = () => {
    props.pages.splice(selected.value, 1);
    selected.value = selected.value === 0 ? 0 : selected.value-1;
    update()
}

</script>

<template>
    <BaseSelector
        @on-add="add"
        @on-remove="remove"
        @on-up="move(-1)"
        @on-down="move(+1)"
    >
        <div v-for="page in pages" class="page" @click="select(page)" :class="{selected: pages[selected] === page}">
            <p>{{ page.displayName }}</p>
        </div>
    </BaseSelector>
</template>

<style scoped>
.page p {
    text-align: left;
    padding: 3px;
}
</style>