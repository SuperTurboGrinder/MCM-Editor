import { UIElementType } from "./enums";
import { BaseValueOptions, INIID } from "./inputData";
import { Validatable } from "./interfaces";

export class BaseUIElement implements Validatable {
    type: UIElementType;

    constructor(type: UIElementType) {
        this.type = type;
    }

    isValid() : boolean {
        return true;
    }
}

export class LabeledUIElement extends BaseUIElement implements Validatable {
    text: string;

    constructor(type: UIElementType, label: string) {
        super(type);
        this.text = label;
    }

    isValid(): boolean {
        return super.isValid() && this.text !== "";
    }
}

export class BaseControlUIElement extends LabeledUIElement implements Validatable {
    help: string;

    constructor(type: UIElementType, label: string, hint: string) {
        super(type, label);
        this.help = hint;
    }

    isValid(): boolean {
        return super.isValid()
            && this.help !== "";
    }
}

export class ControlUIElement extends BaseControlUIElement implements Validatable {
    id: INIID | null;
    valueOptions: BaseValueOptions;

    constructor(type: UIElementType, label: string, hint: string, valueOption: BaseValueOptions, id: INIID | null = null) {
        super(type, label, hint);
        this.valueOptions = valueOption;
        this.id = id;
    }

    isValid(): boolean {
        return super.isValid()
            && this.valueOptions.isValid()
            && this.valueOptions.isINISetting()
                ? (this.id === null ? false : this.id.isValid())
                : true;
    }
}

export class ControlUISelectorElement extends ControlUIElement implements Validatable {
    options: string[];
    defaultValue: string;

    constructor(type: UIElementType, label: string, hint: string, options: string[], defaultValue: string, valueOptions: BaseValueOptions) {
        super(type, label, hint, valueOptions);
        this.options = options;
        this.defaultValue = defaultValue;
    }

    isValid(): boolean {
        var uniqueArray = [...new Set(this.options)];
        return super.isValid()
            && !this.valueOptions.isFloat() && !this.valueOptions.isBool()
            && this.options.length > 1
            && this.options.length === uniqueArray.length
            && this.options.find((str, _1, _2) => str === "") === undefined
            && this.defaultValue !== ""
            && this.options.includes(this.defaultValue);
    }

    getValue() {
        return this.options.indexOf(this.defaultValue);
    }
}