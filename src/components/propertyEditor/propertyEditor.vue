<script setup lang="ts">
import { inject, ref } from 'vue';
import { EventBusKey } from '../../providerKeys';
import { MainPage, SecondaryPage } from '../../model/page';
import { BaseUIElement } from '../../model/uiElementsBase';
import { EditorTypes } from './editors/editorTypes';
import { Section, Spacer, Text } from '../../model/uiElementsStatic';
import { Button, Dropdown, Hotkey, Slider, Stepper, Switcher } from '../../model/uiElementsInputs';
import { UIElementType } from '../../model/enums';

import MainPageEditor from './editors/mainPageEditor.vue';
import SecondaryPageEditor from './editors/secondaryPageEditor.vue';
import SpacerEditor from './editors/spacerEditor.vue';
import SectionEditor from './editors/sectionEditor.vue';
import TextEditor from './editors/textEditor.vue';
import SwitcherEditor from './editors/switcherEditor.vue';

const selectedPage = ref<SecondaryPage | null>(null);
const selectedElement = ref<BaseUIElement | null>(null);
const currentEditorType = ref(EditorTypes.None);

const eventBus = inject(EventBusKey);

const elementTypeToEditorType = (elType : UIElementType) => {
    switch(elType) {   /// (。﹏。)
        case UIElementType.spacer:
            return EditorTypes.Spacer;
        case UIElementType.section:
            return EditorTypes.Section;
        case UIElementType.text:
            return EditorTypes.Text;
        case UIElementType.switcher:
            return EditorTypes.Switcher;
        case UIElementType.button:
            return EditorTypes.Button;
        case UIElementType.slider:
            return EditorTypes.Slider;
        case UIElementType.stepper:
            return EditorTypes.Stepper;
        case UIElementType.dropdown:
            return EditorTypes.Dropdown;
        case UIElementType.hotkey:
            return EditorTypes.Hotkey;
    
        default:
            console.error("Trying to edit properties of unsupported ui element type.")
            return EditorTypes.None;
    }
}

eventBus?.on("PreviewPageSelectionEvent", (page: SecondaryPage) => {
    selectedPage.value = page;
    currentEditorType.value = page instanceof MainPage ? EditorTypes.MainPage : EditorTypes.SecondaryPage;
});
eventBus?.on("PreviewElementSelectionEvent", (element: BaseUIElement | null) => {
    selectedElement.value = element;
    if(element != null) {
        currentEditorType.value = elementTypeToEditorType(element.type);
    }
});

</script>

<template>
    <div class="property-editor-container">
        <MainPageEditor
            v-if="currentEditorType === EditorTypes.MainPage"
            :page="selectedPage as MainPage"
        />
        <SecondaryPageEditor
            v-else-if="currentEditorType === EditorTypes.SecondaryPage"
            :page="selectedPage as SecondaryPage"
        />
        <SpacerEditor
            v-else-if="currentEditorType === EditorTypes.Spacer"
            :spacer="selectedElement as Spacer"
        />
        <SectionEditor
            v-else-if="currentEditorType === EditorTypes.Section"
            :section="selectedElement as Section"
        />
        <TextEditor
            v-else-if="currentEditorType === EditorTypes.Text"
            :text="selectedElement as Text"
        />
        <SwitcherEditor
            v-else-if="currentEditorType === EditorTypes.Switcher"
            :switcher="selectedElement as Switcher"
        />
    </div>
</template>

<style scoped>
.property-editor-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: bisque;
    background-color: rgb(49, 59, 77);
    overflow: visible;
    overflow-y: auto;
}
</style>