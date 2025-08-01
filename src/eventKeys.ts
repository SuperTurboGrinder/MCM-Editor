import { SecondaryPage } from "./model/page";
import { BaseUIElement } from "./model/uiElementsBase";

export type Events = {
     PreviewElementSelectionEvent: BaseUIElement | null;
     PreviewPageSelectionEvent: SecondaryPage;
};