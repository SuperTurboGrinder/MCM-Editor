import { UIElementType } from "./enums";
import { Validatable } from "./interfaces";
import { BaseUIElement, LabeledUIElement } from "./uiElementsBase";

export enum SpacerType {InLines, InPixels}

export class Spacer extends BaseUIElement implements Validatable {
    spacerType: SpacerType;
    height: number;

    constructor(type: SpacerType = SpacerType.InLines, height: number = 1) {
        super(UIElementType.spacer);
        this.spacerType = type;
        this.height = height < 1 ? 1 : height;
    }

    isValid(): boolean {
        return super.isValid();
    }
}

export class Section extends LabeledUIElement implements Validatable {
    constructor(label: string) {
        super(UIElementType.section, label);
    }

    isValid(): boolean {
        return super.isValid()
    }
}

export class Text extends LabeledUIElement implements Validatable {
    html: boolean;

    constructor(label: string, isHTML: boolean = false) {
        super(UIElementType.text, label);
        this.html = isHTML;
    }

    isValid(): boolean {
        return super.isValid()
    }
}