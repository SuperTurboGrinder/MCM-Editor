<script setup lang="ts">
import { computed, inject, ref } from "vue";

import Spacer from "./spacer.vue";
import Section from "./section.vue";
import Text from "./text.vue";
import Button from "./button.vue";
import Hotkey from "./hotkey.vue";
import Slider from "./slider.vue";
import Checkbox from "./checkbox.vue";
import Stepper from "./stepper.vue";
import Dropdown from "./dropdown.vue";
import { BaseUIElement } from "../../../model/uiElementsBase";
import * as UIStatic from "../../../model/uiElementsStatic";
import * as UIControls from "../../../model/uiElementsInputs";
import { UIElementType } from "../../../model/enums";
import { EventBusKey } from "../../../providerKeys";

const props = defineProps<{
    modelBase: BaseUIElement
}>()

const emit = defineEmits<{
    updateDescription: [description: string],
    clearDescription: []
}>()

const elementType = computed(() => props.modelBase.type)
const currentlySelected = ref(false);

const eventBus = inject(EventBusKey);
eventBus?.on('PreviewElementSelectionEvent', (newSelected: BaseUIElement | null) => {
    currentlySelected.value = newSelected === props.modelBase;
})

const emitDesctiption = (description: string) => emit('updateDescription', description)

</script>

<template>
    <Spacer
        v-if="elementType === UIElementType.spacer"
        :model="modelBase as UIStatic.Spacer"
        :currently-selected="currentlySelected"
    />
    <Section
        v-else-if="elementType === UIElementType.section"
        :model="modelBase as UIStatic.Section"
        :currently-selected="currentlySelected"
    />
    <Text
        v-else-if="elementType === UIElementType.text"
        :model="modelBase as UIStatic.Text"
        :currently-selected="currentlySelected"
    />
    <Button
        v-else-if="elementType === UIElementType.button"
        :model="modelBase as UIControls.Button"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Hotkey
        v-else-if="elementType === UIElementType.hotkey"
        :model="modelBase as UIControls.Hotkey"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Slider
        v-else-if="elementType === UIElementType.slider"
        :model="modelBase as UIControls.Slider"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Checkbox
        v-else-if="elementType === UIElementType.switcher"
        :model="modelBase as UIControls.Switcher"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Stepper
        v-else-if="elementType === UIElementType.stepper"
        :model="modelBase as UIControls.Stepper"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Dropdown
        v-else-if="elementType === UIElementType.dropdown"
        :model="modelBase as UIControls.Dropdown"
        :currently-selected="currentlySelected"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
</template>

<style scoped>
</style>

