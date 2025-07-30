import { DataSourceType } from "./enums";
import { Validatable } from "./interfaces";


export class SourceForm implements Validatable {
    file: string;
    id: number = 0x0;

    constructor(file: string, id: number) {
        this.file = file;
        this.id = id;
    }

    isValid() : boolean {
        return this.file.length > 4
            && /[a-z0-9._]/i.test(this.file)
            && (this.file.endsWith('.esm') || this.file.endsWith('.esp'))
            && this.id !== 0x0;
    }

    getValue(): string {
        return this.file + '|' + this.id.toString(16);
    }
}

export class BaseValueOptions implements Validatable {
    sourceType: DataSourceType;
    sourceForm: SourceForm | null;
    propertyName: string | null;

    constructor(
        sourceType: DataSourceType,
        sourceForm: SourceForm | null,
        propertyName: string | null
    ) {
        this.sourceType = sourceType;
        this.sourceForm = sourceForm;
        this.propertyName = propertyName;
    }

    isGlobal = () => this.sourceType == DataSourceType.GlobalValue;
    isProperty = () => this.sourceType === DataSourceType.PropertyValueBool
            || this.sourceType === DataSourceType.PropertyValueFloat
            || this.sourceType === DataSourceType.PropertyValueInt;
    isINISetting = () => this.sourceType === DataSourceType.ModSettingBool
            || this.sourceType === DataSourceType.ModSettingFloat
            || this.sourceType === DataSourceType.ModSettingInt;
    isInteger = () => DataSourceType.ModSettingInt || DataSourceType.PropertyValueInt;
    isFloat = () => DataSourceType.GlobalValue || DataSourceType.ModSettingFloat || DataSourceType.PropertyValueFloat;
    isBool = () => DataSourceType.ModSettingBool || DataSourceType.ModSettingBool;

    isValid() : boolean {
        const isProperty = this.isProperty()
        const needsForm = this.isGlobal() || isProperty;
        return needsForm
            ? this.sourceForm?.isValid()
                && isProperty ? !!this.propertyName?.match('/[a-z0-9_]/i') && this.propertyName !== "" : true
            : true;
    }
}

enum ActionType {
    CallFunction,
    CallGlobalFunction
}

type ActionFunctionParamType = string | number;

class BaseAction implements Validatable{
    readonly type: ActionType;
    function: string;
    params: ActionFunctionParamType[] = []

    constructor(type: ActionType, func: string, params: ActionFunctionParamType[] = []) {
        this.type = type;
        this.function = func;
        this.params = params;
    }

    isValid(): boolean {
        return /[a-z0-9_]/i.test(this.function);
    }
}

export class CallFunctionAction extends BaseAction {
    form: SourceForm;
    scriptName: string | null;

    constructor(func: string, params: ActionFunctionParamType[] = [], form: SourceForm, scriptName: string | null = null) {
        super(ActionType.CallFunction, func, params)
        this.form = form;
        this.scriptName = scriptName;
    }

    isValid(): boolean {
        return super.isValid()
            && this.form.isValid()
            && this.scriptName !== null ? /[a-z0-9_]/i.test(this.scriptName) : true;
    }
}

export class CallGlobalFunctionAction extends BaseAction {
    script: string;

    constructor(func: string, params: ActionFunctionParamType[] = [], script: string) {
        super(ActionType.CallGlobalFunction, func, params)
        this.script = script;
    }

    isValid(): boolean {
        return super.isValid()
            && /[a-z0-9_]/i.test(this.script);
    }
}