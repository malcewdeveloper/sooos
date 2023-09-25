import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IFooterClasses {
    root: string;
}

export function getFooterClass(slot: string): string {
    return generateUtilityClass('Footer', slot, 'Footer')
}

const footerClasses: IFooterClasses = generateUtilityClasses('Footer', [
    'root'
], 'Footer');

export default footerClasses;