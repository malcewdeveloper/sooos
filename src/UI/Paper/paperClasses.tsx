import { generateUtilityClass, generateUtilityClasses } from "@mui/material";

interface IPaperClasses {
    root: string;
}

export function getPaperClass(slot: string): string {
    return generateUtilityClass('Paper', slot, 'Paper')
}

const paperClasses:IPaperClasses = generateUtilityClasses('Paper', [
    'root'
], 'Paper');

export default paperClasses;