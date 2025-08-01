import { createApp } from "vue";
import App from "./App.vue";
import { BaseUIElement } from "./model/uiElementsBase";
import mitt from "mitt";
import { EventBusKey } from "./providerKeys";
import { Events } from "./eventKeys";

const app = createApp(App);



export class CurrentSelectedInjection {
    currentSelectedComponent: BaseUIElement | null = null;

    setCurrentSelectedComponent(newSelected: BaseUIElement) {
        this.currentSelectedComponent = newSelected;
    };
};

const eventBus = mitt<Events>();

app.provide(EventBusKey, eventBus);

app.mount("#app");
