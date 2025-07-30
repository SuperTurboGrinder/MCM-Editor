<script setup lang="ts">
import { computed, ref } from "vue";

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

const props = defineProps<{
    modelBase: BaseUIElement
}>()

const elementType = computed(() => props.modelBase.type)

const emit = defineEmits<{
    updateDescription: [description: string],
    clearDescription: []
}>()

const emitDesctiption = (description: string) => emit('updateDescription', description)

</script>

<template>
    <Spacer
        v-if="elementType === UIElementType.spacer"
        :model="modelBase as UIStatic.Spacer"
    />
    <Section
        v-else-if="elementType === UIElementType.section"
        :model="modelBase as UIStatic.Section"
    />
    <Text
        v-else-if="elementType === UIElementType.text"
        :model="modelBase as UIStatic.Text"
    />
    <Button
        v-else-if="elementType === UIElementType.button"
        :model="modelBase as UIControls.Button"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Hotkey
        v-else-if="elementType === UIElementType.hotkey"
        :model="modelBase as UIControls.Hotkey"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Slider
        v-else-if="elementType === UIElementType.slider"
        :model="modelBase as UIControls.Slider"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Checkbox
        v-else-if="elementType === UIElementType.switcher"
        :model="modelBase as UIControls.Switcher"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Stepper
        v-else-if="elementType === UIElementType.stepper"
        :model="modelBase as UIControls.Stepper"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
    <Dropdown
        v-else-if="elementType === UIElementType.dropdown"
        :model="modelBase as UIControls.Dropdown"
        @hovered="emitDesctiption"
        @unhovered="$emit('clearDescription')"
    />
</template>

<style scoped>
</style>

