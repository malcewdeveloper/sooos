import { generateUtilityClasses, generateUtilityClass } from "@mui/material";


interface IButtonClasses {
    root: string;
    text: string;
    contained: string;
    disabled: string;
    fullWidth: string;
    selected: string;
    startIcon: string;
    endIcon: string;
}

export function getButtonClass(slot: string): string {
    return generateUtilityClass('Button', slot, 'Button');
}

const buttonClasses: IButtonClasses = generateUtilityClasses('Button', [
    'root',
    'text',
    'contained',
    'disabled',
    'fullWidth',
    'selected',
    'startIcon',
    'endIcon',
], 'Button');

export default buttonClasses;