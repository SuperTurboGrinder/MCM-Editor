import { UIElementType } from "./enums";
import { BaseValueOptions, CallFunctionAction, CallGlobalFunctionAction } from "./inputData";
import { Validatable } from "./interfaces";
import { BaseControlUIElement, ControlUIElement, ControlUISelectorElement } from "./uiElementsBase";


    // hiddenSwitcher,
    // stepper,
    // dropdown,
    // hotkey

export class Button extends BaseControlUIElement implements Validatable {
    action: CallFunctionAction | CallGlobalFunctionAction;

    constructor(label: string, hint: string, action: CallFunctionAction | CallGlobalFunctionAction) {
        super(UIElementType.button, label, hint);
        this.action = action;
    }

    isValid(): boolean {
        return super.isValid()
            && this.action.isValid();
    }
}

export class Switcher extends ControlUIElement implements Validatable {
    defaultValue: boolean;

    constructor(label: string, hint: string, defaultValue: boolean, valueOptions: BaseValueOptions) {
        super(UIElementType.switcher, label, hint, valueOptions);
        this.defaultValue = defaultValue;
    }

    isValid(): boolean {
        return super.isValid()
             && !this.valueOptions.isFloat();
    }
}

// export class HiddenSwitcher extends ControlUIElement implements Validatable {
//     defaultValue: boolean;

//     constructor(label: string, hint: string, defaultValue: boolean, valueOptions: BaseValueOptions) {
//         super(UIElementType.switcher, label, hint, valueOptions);
//         this.defaultValue = defaultValue;
//     }

//     isValid(): boolean {
//         return super.isValid()
//     }
// }





export class Slider extends ControlUIElement implements Validatable {
    min: number;
    max: number;
    step: number;
    defaultValue: number;

    constructor(
        label: string, 
        hint: string, 
        min: number,
        max: number,
        step: number,
        defaultValue: number,
        valueOptions: BaseValueOptions

    ) {
        super(UIElementType.slider, label, hint, valueOptions);
        this.min = min;
        this.max = max;
        this.step = step;
        this.defaultValue = defaultValue;
    }

    isValid(): boolean {
        return super.isValid()
            && !this.valueOptions.isBool()
            && this.step > 0
            && this.min != this.max
            && this.min < this.max
            && this.step < (this.max - this.min)
            && this.defaultValue > this.min && this.defaultValue < this.max
    }
}


export class Stepper extends ControlUISelectorElement implements Validatable {
    constructor(label: string, hint: string, options: string[], defaultValue: string, valueOptions: BaseValueOptions) {
        super(UIElementType.stepper, label, hint, options, defaultValue, valueOptions);    
    }

    isValid(): boolean {
        return super.isValid();
    }
}


export class Dropdown extends ControlUISelectorElement implements Validatable {
    constructor(label: string, hint: string, options: string[], defaultValue: string, valueOptions: BaseValueOptions) {
        super(UIElementType.dropdown, label, hint, options, defaultValue, valueOptions);    
    }

    isValid(): boolean {
        return super.isValid();
    }
}


export class Hotkey extends BaseControlUIElement implements Validatable {
    id: string;
    allowModifierKeys: boolean

    constructor(label: string, hint: string, id: string, allowModifierKeys: boolean = true) {
        super(UIElementType.hotkey, label, hint);
        this.id = id;
        this.allowModifierKeys = allowModifierKeys;
    }

    isValid(): boolean {
        return super.isValid()
            && this.id != ""
            && /[a-z0-9:_]/i.test(this.id);
    }
}