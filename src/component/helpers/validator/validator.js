export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field Required'
};
export const maxLength = (value) => {
    if (value && value.length > 30) return 'Max Length is 30 symbols';
    return undefined
};
export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined