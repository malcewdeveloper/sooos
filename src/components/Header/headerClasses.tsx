import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IHeaderClasses {
    root: string;
    positionAbsolute: string;
    positionFixed: string;
    positionSticky: string;
    positionRelative: string;
    positionStatic: string;
}

export function getHeaderClass(slot: string): string {
    return generateUtilityClass('Header', slot, 'Header');
}

const headerClasses: IHeaderClasses = generateUtilityClasses('Header', [
    'root',
    'positionAbsolute',
    'positionFixed',
    'positionSticky',
    'positionRelative',
    'positionStatic'
], 'Header');

export default headerClasses;
