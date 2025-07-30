import { Validatable } from "./interfaces.ts"
import { BaseUIElement } from "./uiElementsBase.ts";

export class SecondaryPage implements Validatable {
    content: BaseUIElement[];
    displayName: string;

    constructor(displayName: string, content: BaseUIElement[]) {
        this.displayName = displayName;
        this.content = content;
    }

    isValid(): boolean {
        return this.displayName != ""
            && /[a-z0-9_]/i.test(this.displayName)
            && this.content.reduce(
                (accum, val) => accum && val.isValid(),
                true
            );
    }
}

export class MainPage extends SecondaryPage {
    modName: string;
    minMcmVersion: number = 2;
    pages: SecondaryPage[] = [];

    constructor(modName: string, pageName: string, content: BaseUIElement[]) {
        super(pageName, content);
        this.modName = modName;
        this.displayName = pageName;
    }

    isValid(): boolean {
        return super.isValid()
            && /[a-z0-9_]/i.test(this.modName)
            && this.minMcmVersion >= 1
            && this.pages.reduce(
                (accum, val) => accum && val.isValid(),
                true
            );
    }
}