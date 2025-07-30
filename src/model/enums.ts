
export enum UIElementType {
    spacer,
    section,
    text,
    switcher,
    hiddenSwitcher,
    button,
    slider,
    stepper,
    dropdown,
    hotkey
}

export enum DataSourceType {
    //papyrus properties
    PropertyValueBool,
    PropertyValueInt,
    PropertyValueFloat,
    //mcm ini setting
    ModSettingBool,
    ModSettingInt,
    ModSettingFloat,
    //floats saved to form by id
    GlobalValue
}