import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IBoxClasses {
    root: string;
}

export function getBoxClass(slot: string): string {
    return generateUtilityClass('Box', slot, 'Box')
}

const boxClasses: IBoxClasses = generateUtilityClasses('Box', [
    'root'
], 'Box');

export default boxClasses;