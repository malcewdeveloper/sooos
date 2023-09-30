import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IContainerClasses {
    root: string;
    maxWidthXs: string;
    maxWidthSm: string;
    maxWidthMd: string;
    maxWidthLg: string;
    maxWidthXl: string;
}

export function getContainerClass(slot: string): string {
    return generateUtilityClass('Container', slot, 'Container')
}

const containerClasses: IContainerClasses = generateUtilityClasses('Container', [
    'root',
    'maxWidthXs',
    'maxWidthSm',
    'maxWidthMd',
    'maxWidthLg',
    'maxWidthXl'
], 'Container');

export default containerClasses;