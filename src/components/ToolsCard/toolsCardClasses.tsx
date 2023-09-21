import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IToolsCardClasses {
    root: string;
    hover: string;
}

export function getToolsCardClass(slot: string): string {
    return generateUtilityClass('ToolsCard', slot, 'ToolsCard');
}

const toolsCardClasses: IToolsCardClasses = generateUtilityClasses('ToolsCard', [
    'root',
    'hover'
], 'ToolsCard');

export default toolsCardClasses;