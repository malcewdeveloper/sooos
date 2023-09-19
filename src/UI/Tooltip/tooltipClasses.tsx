import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ITooltipClasses {
    root: string;
    content: string;
}

export function getTooltipClass(slot: string): string {
    return generateUtilityClass('Tooltip', slot, 'Tooltip');
}

const tooltipClasses: ITooltipClasses = generateUtilityClasses('Tooltip', [
    'root',
    'content',
], 'Tooltip');

export default tooltipClasses;