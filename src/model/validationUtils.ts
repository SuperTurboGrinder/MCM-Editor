export const isProperWindowsFileName = (str: string) : boolean => {
    var forbiddenFilenameCharacters=/^[^\\/:\*\?"<>\|]+$/; //  \ / : * ? " < > |
    var falseIfStartsWithADot=/^\./;
    var forbiddenFilenames=/^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
    return str.length > 0
        && forbiddenFilenameCharacters.test(str)
        && !falseIfStartsWithADot.test(str)
        && !forbiddenFilenames.test(str);
}

export const isProperVariableName = (str: string) => /[a-z0-9_]/i.test(str) && str.length > 0;
export const isProperFunctionName = isProperVariableName;

export const hasFileExtension = (str: string, extensions: string[]) => {
    for (let i = 0; i < extensions.length; i++) {
        if(str.endsWith('.'+extensions[i])) return true;
    }
    return false;
}

export const isBethesdaPluginFilename = (str: string) => str.length > 4
            && hasFileExtension(str, ['esl', 'esp'])

export const isIntegerNumber = (str: string) => str.length > 0 && /[0-9_]/.test(str)