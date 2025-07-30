import { MainPage, SecondaryPage } from "../../model/page";

import * as StaticElementsModel from "../../model/uiElementsStatic";
import * as InputElementsModel from "../../model/uiElementsInputs";
import { BaseValueOptions, CallGlobalFunctionAction } from "../../model/inputData";
import { DataSourceType } from "../../model/enums";

export class PreviewTestCase {
    mainPage: MainPage;

    constructor() {
        const testSpacer = new StaticElementsModel.Spacer(StaticElementsModel.SpacerType.InLines, 4);
        const testSection = new StaticElementsModel.Section("Demo section");
        const testStrWithHtmlTags = "Test <b>formatted</b> text <i>line</i> with <u>html</u> tags.";
        const testText1 = new StaticElementsModel.Text(testStrWithHtmlTags);
        const testText2 = new StaticElementsModel.Text(testStrWithHtmlTags, true);
        const testSwitcher = new InputElementsModel.Switcher("Demo switcher", "Demo switcher description", false, new BaseValueOptions(
            DataSourceType.ModSettingBool, null, null
        ));
        const testButton = new InputElementsModel.Button("Demo button", "Demo button description", new CallGlobalFunctionAction(
            "MessageBox", ["Hello World!"], "Debug"
        ));
        const testSlider = new InputElementsModel.Slider("Demo slider", "Demo slider description", -10, 10, 1, 0, new BaseValueOptions(
            DataSourceType.ModSettingInt, null, null
        ));
        const testStepper = new InputElementsModel.Stepper("Demo stepper", "Demo stepper description",
            ["TestVal1", "TestVal2", "TestVal3"], "TestVal1",
            new BaseValueOptions(DataSourceType.ModSettingInt, null, null)
        );
        const testDropdown = new InputElementsModel.Dropdown("Demo dropdown", "Demo dropdown description",
            ["TestVal4", "TestVal5", "TestVal6"], "TestVal5",
            new BaseValueOptions(DataSourceType.ModSettingInt, null, null)
        );
        const testHotkey = new InputElementsModel.Hotkey("Demo hotkey", "Demo hotkey description", "test_id");

        const testElementsMain = [
            testSection, testText1, testText2, testSpacer, testSwitcher, testHotkey, testButton,
            testSlider, testSlider, testSlider, testSlider, testSlider, testStepper, testDropdown
        ];
        const testElementsSecondary1 = [
            testSection, testButton, testSlider, testSlider, testSlider, testSlider, testSlider, 
            testSection, testStepper, testDropdown, testDropdown
        ];
        const testElementsSecondary2 = [
            testSection, testButton, testSlider, testDropdown, testDropdown,
            testSection, testStepper, testStepper, testStepper, testStepper, testStepper,
        ];
        this.mainPage = new MainPage("testCaseMod", "Test Case Mod", testElementsMain)
        this.mainPage.pages = [
            new SecondaryPage("Secondary page 1", testElementsSecondary1),
            new SecondaryPage("Secondary page 2", testElementsSecondary2)
        ];
    }
}