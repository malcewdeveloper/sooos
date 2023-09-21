import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IHeaderClasses {
    root: string;
}

export function getHeaderClass(slot: string): string {
    return generateUtilityClass('Header', slot, 'Header');
}

const headerClasses: IHeaderClasses = generateUtilityClasses('Header', [
    'root',
], 'Header');

export default headerClasses;
